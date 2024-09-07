import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import ActionButton from '../../common/ActionButton';

interface CustomizationSectionProps {
  title: string;
  description: string;
}

const CustomizationSection: React.FC<CustomizationSectionProps> = ({ title, description }) => {
  // Default color options for customization
  const [colorOptions, setColorOptions] = useState([
    { label: 'Accent Color', value: 'FF9898' },
    { label: 'Text Color', value: '571010' },
    { label: 'Background Color', value: 'FFEAEA' },
  ]);

  // Handler to update the color value when user inputs a new color
  const handleColorChange = (index: number, newValue: string) => {
    const updatedColors = [...colorOptions];
    updatedColors[index].value = newValue;
    setColorOptions(updatedColors);
  };

  return (
    <section className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full border border-1 rounded-2xl">
      <div className="flex overflow-hidden flex-col grow gap-4 w-full rounded-2xl shadow-sm bg-[color:var(--p-color-bg-surface)] pb-[var(--p-sapce-0)] pl-[var(--p-sapce-0)] pr-[var(--p-sapce-0)] pt-[var(--p-sapce-0)] max-md:mt-4">
        <div className="flex flex-col p-4 w-full">
          <div className="flex flex-col w-full">
            <div className="flex gap-6 justify-center items-center w-full leading-5 text-[color:var(--p-color-text-brand)]">
              <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0 min-w-[240px]">
                <h2 className="text-sm font-[650]">{title}</h2>
                <p className="mt-2 text-sm font-[450]">{description}</p>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full text-sm leading-loose font-[450] text-[color:var(--p-color-text)]">
              {colorOptions.map((option, index) => (
                <ColorPicker
                  key={index}
                  label={option.label}
                  value={option.value}
                  onChange={(newValue) => handleColorChange(index, newValue)}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center mt-6 w-full min-h-[28px]">
            <ActionButton text="Preview" variant="secondary" />
            <ActionButton text="Apply Colors" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;
