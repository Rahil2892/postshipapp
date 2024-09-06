import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="flex relative gap-0.5 justify-center items-start self-stretch px-3 py-1.5 my-auto rounded-lg bg-zinc-800">
      <span className="z-0 my-auto text-xs font-medium leading-none text-white">
        {children}
      </span>
      <div className="flex absolute inset-0 z-0 flex-col self-start rotate-[3.141592653589793rad] w-full">
        <div className="flex shrink-0 h-7 shadow-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.07_82.14%,rgba(255,255,255,0.15)_94.44%))] rounded-[var(--p-border-radius-button)]" />
      </div>
    </button>
  );
};

export default Button;