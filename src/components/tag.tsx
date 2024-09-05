import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  allowedRemove?: boolean;
  onRemove?: () => void;
}

export default function Tag({
  children,
  allowedRemove,
  onRemove,
  ...props
}: Props) {
  return (
    <div className="inline-flex items-stretch">
      <div
        className="p-2 leading-3 font-bold text-[#5ca5a5] bg-[#eff6f6]"
        {...props}
      >
        {children}
      </div>
      {allowedRemove && (
        <button type="button" className="p-2 bg-[#5CA5A5]" onClick={onRemove}>
          <img src="/images/icon-remove.svg" alt="" />
        </button>
      )}
    </div>
  );
}
