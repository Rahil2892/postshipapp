import React from 'react';

interface FilterOption {
  label: string;
  isActive?: boolean;
}

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (label: string) => void;
}

const filterOptions: FilterOption[] = [
  { label: 'Lifetime' },
  { label: 'Last Week' },
  { label: 'Last Month' },
  { label: 'Last Year' },
];

const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <nav className="flex overflow-hidden overflow-x-auto flex-wrap gap-2 items-center mt-8 w-full text-sm leading-loose font-[650] text-[color:var(--p-color-text-brand)]">
      {filterOptions.map((option, index) => (
        <button
          key={index}
          className={`px-3 py-2 rounded ${
            option.label === activeFilter ? 'bg-indigo-50 border-2 border-[#8051FF]' : 'bg-white'
          }`}
          onClick={() => onFilterChange(option.label)}
        >
          {option.label}
        </button>
      ))}
      <button className="flex gap-2 justify-center items-center self-stretch px-3 py-2 my-auto bg-white rounded">
        <span className="self-stretch my-auto">Customize Time Line</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/107f1eb299f8dd8987a68e526cd26de44fd7f708fbf16952dbc42c8e44e2af0b?placeholderIfAbsent=true&apiKey=1516c456a62546418cdc64c619308aeb"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt=""
        />
      </button>
    </nav>
  );
};

export default FilterBar;
