interface FormFieldProps {
  label: string;
  sublabel?: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}

export default function FormField({
  label,
  sublabel,
  error,
  optional,
  children,
}: FormFieldProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <label className="block text-sm font-semibold text-gray-700">
          {label}
        </label>
        {optional && (
          <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[10px] font-medium text-gold">
            Optional
          </span>
        )}
      </div>
      {sublabel && (
        <span className="mt-0.5 mb-2 block text-xs text-gray-400">
          {sublabel}
        </span>
      )}
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
