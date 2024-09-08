import React, { useState } from 'react';
import NavItem from './NavItem';
import NavActionItem from './NavActionItem';

const Navigation: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>('Home'); // Track active nav item

  const navItems = [
    { label: 'Home', link: '/#home' },
    { label: 'Orders', link: '/#orders' },
    { label: 'Integrations', link: '/#integration' },
    { label: 'Tracking Page', hasDropdown: true, link: '/#trackingPage' },
    { label: 'Partner with Us', link: '/#partner' }
  ];

  const actionItems = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/03c8c98dde262aa9fa3ece49fed84048be7b42e618770da61b8aa57d7ce6047c?placeholderIfAbsent=true&apiKey=1516c456a62546418cdc64c619308aeb', label: 'Search', hasUnderline: true },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/349c800baea3e44b5bc205cb39c52824aa4133b4d9aba0d5252d626a34f2c66a?placeholderIfAbsent=true&apiKey=1516c456a62546418cdc64c619308aeb', label: 'Account' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/212e6aa2e5826e4c396931d81e9580675bec8215a9ab9f5c40081bc6a1f86e3d?placeholderIfAbsent=true&apiKey=1516c456a62546418cdc64c619308aeb', label: 'Settings' }
  ];

  const handleNavItemClick = (label: string) => {
    setActiveNavItem(label); // Set the clicked item as active
  };

  return (
    <nav className="flex flex-col pt-4 w-full text-sm leading-none bg-white font-[650] max-md:max-w-full">
      <div className="flex flex-wrap-reverse sm:flex-wrap gap-5 justify-between self-center w-full max-w-[1139px] max-md:max-w-full max-sm:p-5">
        <div className="flex flex-wrap justify-center gap-8 items-start text-[color:var(--p-color-text-brand)] max-md:max-w-full">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              {...item}
              isActive={activeNavItem === item.label}
              onClick={() => handleNavItemClick(item.label)} // Pass the handler to each NavItem
            />
          ))}
        </div>
        <div className="flex gap-8 whitespace-nowrap text-[color:var(--p-color-text-secondary)]">
          {actionItems.map((item, index) => (
            <NavActionItem key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="mt-4 w-full border border-solid border-zinc-500 min-h-[1px] max-md:max-w-full" />
    </nav>
  );
};

export default Navigation;
