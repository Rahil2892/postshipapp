import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface NavActionItemProps {
  icon: string;
  label: string;
  hasUnderline?: boolean;
}

const NavActionItem: React.FC<NavActionItemProps> = ({ icon, label, hasUnderline = false }) => {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const sendToast = (val: string) => {
    if (val.trim() !== '') {
      toast(`Can't search for: ${val}`);
    } else {
      toast.error("Textarea cannot be empty!");
    }
  };

  const changeHandler = (val: string) => {
    setSearchText(val);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendToast(searchText);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-start">
        <img loading="lazy" src={icon} className="object-contain shrink-0 w-5 aspect-square" alt="" />
        
        {label === 'Search' ? (
          <>
            <input
              type="text"
              placeholder="Search"
              className={`text-center text-black  focus:outline-none focus:border-none`} // border removed when focused
              onChange={(e) => changeHandler(e.target.value)}
              value={searchText}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)} // Focus change handlers
            />
          </>
        ) : (
          <>{label}</>
        )}
      </div>
      
      {hasUnderline && (
        <div className="mt-1 max-w-full border border-solid border-neutral-600 min-h-[1px] w-[120px]" />
      )}
    </div>
  );
};

export default NavActionItem;
