import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  allowedRemove?: boolean;
  variant?: "default" | "primary" | "accent";
  onRemove?: () => void;
}

export default function Tag({
  children,
  allowedRemove,
  variant = "default",
  onRemove,
  ...props
}: Props) {
  const variants = {
    default: `h-8 bg-[#eff6f6] text-base leading-8 text-primary hover:bg-primary hover:text-white ${
      allowedRemove ? "rounded-l-md" : "rounded-md"
    }`,
    primary: "h-6 rounded-3xl bg-primary text-sm leading-6 text-white",
    accent: "h-6 rounded-3xl bg-[#2b3939] text-sm leading-6 text-white",
  };

  return (
    <div className="inline-flex items-stretch">
      <div
        className={`cursor-pointer px-2 font-bold ${variants[variant]}`}
        {...props}
      >
        {children}
      </div>
      {allowedRemove && (
        <button
          type="button"
          className="rounded-r-md bg-primary p-2 hover:bg-[#2b3939]"
          onClick={onRemove}
        >
          <img src="/images/icon-remove.svg" alt="icon remove" />
        </button>
      )}
    </div>
  );
}
