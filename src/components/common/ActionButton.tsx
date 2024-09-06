import React from 'react';

interface ActionButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, variant }) => {
  const baseClasses = "flex relative gap-0.5 justify-center items-start self-stretch px-3 py-1.5 my-auto text-xs font-semibold leading-none rounded-lg";
  const variantClasses = variant === 'primary'
    ? "bg-zinc-800 text-white"
    : "bg-[color:var(--p-color-bg-fill)] text-[color:var(--p-color-text)]";

  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      <span className="z-0 my-auto">{text}</span>
      {variant === 'primary' && (
        <div className="flex absolute inset-0 z-0 flex-col self-start rotate-[3.141592653589793rad] w-[100px]">
          <div className="flex shrink-0 h-7 shadow-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.07_82.14%,rgba(255,255,255,0.15)_94.44%))] rounded-[var(--p-border-radius-button)]" />
        </div>
      )}
    </button>
  );
};

export default ActionButton;