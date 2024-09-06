import React from 'react';

interface FilterButtonProps {
  label: string;
  isActive?: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive = false }) => {
  const baseClasses = "self-stretch px-3 py-2 my-auto rounded";
  const activeClasses = "bg-purple-50 border border-violet-500 border-solid";
  const inactiveClasses = "bg-white";

  return (
    <button className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      {label}
    </button>
  );
};

export default FilterButton;