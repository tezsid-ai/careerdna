"use client";

import { useState, useCallback } from "react";
import FormField from "./FormField";
import ContinueButton from "./ContinueButton";

export interface ReadingData {
  name: string;
  dob: string;
  birthCity: string;
  birthTime: string;
}

interface BirthDataFormProps {
  data: ReadingData;
  setData: (data: ReadingData) => void;
  onNext: () => void;
}

export default function BirthDataForm({ data, setData, onNext }: BirthDataFormProps) {
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  const validate = useCallback(
    (field: string, value: string): string | undefined => {
      if (field === "name" && value.trim().length < 2)
        return "Please enter your full birth name.";
      if (field === "dob") {
        if (!value) return "Date of birth is required.";
        const date = new Date(value);
        if (date > new Date()) return "Date cannot be in the future.";
        const age =
          (Date.now() - date.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
        if (age < 13) return "You must be at least 13 years old.";
      }
      if (field === "birthCity" && value.trim().length < 2)
        return "Please enter your birth city.";
      return undefined;
    },
    [],
  );

  const handleChange = (field: keyof ReadingData, value: string) => {
    setData({ ...data, [field]: value });
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate(field, value) }));
    }
  };

  const handleBlur = (field: keyof ReadingData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validate(field, data[field]),
    }));
  };

  const isValid =
    data.name.trim().length >= 2 &&
    !!data.dob &&
    !validate("dob", data.dob) &&
    data.birthCity.trim().length >= 2;

  const INPUT_CLS =
    "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm " +
    "font-medium text-foreground placeholder:text-gray-300 " +
    "focus:border-transparent focus:outline-none focus:ring-2 " +
    "focus:ring-primary/40 transition-all duration-200";

  return (
    <div className="flex flex-col gap-5">
      <FormField
        label="Your full name at birth"
        sublabel="Used to calculate your Destiny and Soul Numbers"
        error={touched.name ? errors.name : undefined}
      >
        <input
          type="text"
          className={INPUT_CLS}
          placeholder="As it appears on your birth certificate"
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
          onBlur={() => handleBlur("name")}
        />
      </FormField>

      <FormField
        label="Your date of birth"
        sublabel="Determines your Life Path Number and Sun Sign"
        error={touched.dob ? errors.dob : undefined}
      >
        <input
          type="date"
          className={INPUT_CLS}
          value={data.dob}
          onChange={(e) => handleChange("dob", e.target.value)}
          onBlur={() => handleBlur("dob")}
        />
      </FormField>



      <FormField
        label="City where you were born"
        sublabel="Used for precise astrological positioning"
        error={touched.birthCity ? errors.birthCity : undefined}
      >
        <input
          type="text"
          className={INPUT_CLS}
          placeholder="e.g. Pune"
          value={data.birthCity}
          onChange={(e) => handleChange("birthCity", e.target.value)}
          onBlur={() => handleBlur("birthCity")}
        />
      </FormField>

      <FormField
        label="Your birth time"
        sublabel="Optional — unlocks Ascendant and Midheaven insights"
        optional
      >
        <input
          type="time"
          className={INPUT_CLS}
          value={data.birthTime}
          onChange={(e) => handleChange("birthTime", e.target.value)}
        />
        <p className="mt-1.5 text-[11px] text-gray-400">
          Don&apos;t know your birth time? No worries — we&apos;ll work with
          what we have.
        </p>
      </FormField>

      <ContinueButton isValid={isValid} onClick={onNext} />
    </div>
  );
}
