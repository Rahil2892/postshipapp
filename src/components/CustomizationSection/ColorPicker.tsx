import React from 'react';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex gap-4 items-end w-full mb-4">
      <div className="flex flex-col flex-1 shrink basis-0">
        <label htmlFor={`color-${label}`} className="flex-1 shrink gap-2 w-full">
          {label}
        </label>
        <div className="flex gap-1 items-center px-3 py-1.5 mt-1 w-full whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-500">
          <input
            type="text"
            id={`color-${label}`}
            value={value}
            className="flex-1 shrink self-stretch my-auto w-full text-ellipsis"
            aria-label={`${label} value`}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div
        className="flex shrink-0 w-16 h-8 rounded-lg"
        style={{ backgroundColor: `#${value}` }}
        aria-hidden="true"
      />
    </div>
  );
};

export default ColorPicker;
