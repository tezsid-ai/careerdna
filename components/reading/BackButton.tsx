interface BackButtonProps {
  onClick: () => void;
  label?: string;
}

export default function BackButton({
  onClick,
  label = "Back",
}: BackButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex cursor-pointer items-center gap-1.5 rounded-full
        px-4 py-2 text-sm font-medium text-muted
        transition-all duration-200
        hover:bg-lavender/60 hover:text-primary
        focus:outline-none focus:ring-2 focus:ring-primary/30
        active:scale-95"
      aria-label={label}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-200 group-hover:-translate-x-0.5"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      {label}
    </button>
  );
}
