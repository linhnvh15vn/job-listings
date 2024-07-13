import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  // Add your component props here
}

export default function Tag({ children }: Props) {
  return (
    <div className="flex items-center px-2 h-8 font-bold text-[#5ca5a5] bg-[#eff6f6] rounded">
      {children}
    </div>
  );
}
