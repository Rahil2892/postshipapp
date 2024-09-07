import React from 'react';

interface NavActionItemProps {
  icon: string;
  label: string;
  hasUnderline?: boolean;
}

const NavActionItem: React.FC<NavActionItemProps> = ({ icon, label, hasUnderline = false }) => (
  <div className="flex flex-col justify-center items-center">
    <div className="flex gap-2 items-start self-start">
      <img loading="lazy" src={icon} className="object-contain shrink-0 w-5 aspect-square" alt="" />
      <div>{label}</div>
    </div>
    {hasUnderline && (
      <div className="mt-1 max-w-full border border-solid border-neutral-600 min-h-[1px] w-[120px]" />
    )}
  </div>
);

export default NavActionItem;