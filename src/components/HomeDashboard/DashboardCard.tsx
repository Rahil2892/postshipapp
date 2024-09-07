import React from 'react';
import Button from '../common/Button';

interface DashboardCardProps {
  title: string;
  description: React.ReactNode;
  buttonText: string;
  bgColor: string;
  textColor: string;
  icon?: string;
  extraButton?: {
    text: string;
    className: string;
  };
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  buttonText,
  bgColor,
  textColor,
  icon,
  extraButton
}) => {
  return (
    <article className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full border-2 rounded-2xl`}>
      <div className={`flex overflow-hidden flex-col grow gap-4 w-full ${bgColor} rounded-xl shadow-sm pb-[var(--p-sapce-0)] pl-[var(--p-sapce-0)] pr-[var(--p-sapce-0)] pt-[var(--p-sapce-0)] max-md:mt-4`}>
        <div className="flex flex-col px-4 pt-4 pb-6 w-full">
          <div className={`flex flex-col w-full ${textColor}`}>
            <div className="flex gap-2 items-start w-full text-sm leading-none font-[650]">
              {icon && <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-5 aspect-square" />}
              <div className="flex-1 shrink basis-0">{title}</div>
            </div>
            <div className="flex-1 shrink gap-2.5 mt-2 w-full text-sm leading-5 font-[450]">
              {description}
            </div>
          </div>
          <div className="flex gap-2 items-center mt-8 w-full">
            {extraButton && (
              <button className={extraButton.className}>
                {extraButton.text}
              </button>
            )}
            <Button>{buttonText}</Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DashboardCard;