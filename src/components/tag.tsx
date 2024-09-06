import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  allowedRemove?: boolean;
  variant?: 'default' | 'primary' | 'accent';
  onRemove?: () => void;
}

export default function Tag({
  children,
  allowedRemove,

  variant = 'default',
  onRemove,
  ...props
}: Props) {
  const variants = {
    default: `h-8 leading-8 text-base text-primary bg-[#eff6f6] hover:bg-primary hover:text-white ${
      allowedRemove ? 'rounded-l-md' : 'rounded-md'
    }`,
    primary: 'h-6 leading-6 text-sm text-white bg-primary rounded-3xl',
    accent: 'h-6 leading-6 text-sm text-white bg-[#2b3939] rounded-3xl',
  };

  return (
    <div className="inline-flex items-stretch">
      <div
        className={`px-2 font-bold cursor-pointer ${variants[variant]}`}
        {...props}
      >
        {children}
      </div>
      {allowedRemove && (
        <button
          type="button"
          className="p-2 bg-primary rounded-r-md hover:bg-[#2b3939]"
          onClick={onRemove}
        >
          <img src="/images/icon-remove.svg" alt="icon remove" />
        </button>
      )}
    </div>
  );
}
