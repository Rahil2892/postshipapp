import React from 'react';
import { HashLink } from 'react-router-hash-link';

interface NavItemProps {
  label: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  link: string;
  onClick: () => void; // Add onClick handler prop
}

const NavItem: React.FC<NavItemProps> = ({ label, isActive = false, hasDropdown = false, link, onClick }) => (
  <div className="flex flex-col whitespace-nowrap">
    <HashLink smooth to={link} onClick={onClick}> {/* Call onClick when the link is clicked */}
      <div className="flex gap-1 items-start">
        <div>{label}</div>
        {hasDropdown && (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/36ae7ee3121fca789e2e572774880687b00a618f173c8d78f941a965cd72cf4d?placeholderIfAbsent=true&apiKey=1516c456a62546418cdc64c619308aeb"
            className="object-contain shrink-0 w-5 aspect-square"
            alt=""
          />
        )}
      </div>
      {isActive && (
        <div className="mt-1 w-6 border-2 border-violet-500 border-solid min-h-[2px]" />
      )}
    </HashLink>
  </div>
);

export default NavItem;
