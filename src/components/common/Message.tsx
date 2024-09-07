import React from 'react';

interface MessageProps {
  msg: string;
}

const Message: React.FC<MessageProps> = ({ msg }) => {
  return (
    <header className="self-start my-11 md:my-10 text-start mx-4 sm:mx-10 md:mx-16">
      <h1 className="text-2xl font-bold tracking-normal leading-none text-start text-[color:var(--p-color-text-brand)]">
        {msg}
      </h1>
    </header>
  );
};

export default Message;