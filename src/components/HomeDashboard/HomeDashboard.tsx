import React from 'react';
import DashboardCard from './DashboardCard';
import Button from '../common/Button';
import Message from '../common/Message'


interface HomeDashboardProps {}

const HomeDashboard: React.FC<HomeDashboardProps> = () => {
  const cardData = [
    {
      title: "Order Sync Successful!",
      description: "Your order details from the last 30 days have been successfully synced. Check them out now!",
      buttonText: "Explore Your Orders",
      bgColor: "bg-white",
      textColor: "text-[color:var(--p-color-text-brand)]",
    },
    {
      title: "Customize Customer Notification",
      description: "Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers",
      buttonText: "Configure Notifications",
      bgColor: "bg-orange-100",
      textColor: "text-[color:var(--p-color-text-warning)]",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9756c88df521af592fd8914dae9acf31e7c1306af3b31e0fe77ae883dd12a6e0?placeholderIfAbsent=true&apiKey=1516c456a62546418cdc64c619308aeb",
    },
    {
      title: "Your Tracking Link has been generated",
      description: <>Include the <a href="https://50d72d-5.myshopify.com/tools/tracking." className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Link</a> to Your Store's Navigation Menu.</>,
      buttonText: "Go To Navigation Menu",
      bgColor: "bg-indigo-50",
      textColor: "text-[color:var(--p-color-text-brand)]",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b7c2cfd6aedcef6eadb3f573e38e11c8515361ced600680db845ed4da7c375d?placeholderIfAbsent=true&apiKey=1516c456a62546418cdc64c619308aeb",
      extraButton: {
        text: "Copy Link",
        className: "self-stretch px-3 py-1.5 my-auto text-xs leading-none shadow-sm bg-[color:var(--p-color-bg-fill)] font-[550] gap-[var(--p-sapce-050)] pb-[var(--p-sapce-150)] pl-[var(--p-sapce-300)] pr-[var(--p-sapce-300)] pt-[var(--p-sapce-150)] rounded-[var(--p-border-radius-button)] text-[color:var(--p-color-text)]"
      }
    }
  ];

  return (
    <section className="px-5 mt-8 max-md:max-w-full max-sm:p-5" id='orders'>
      <Message msg="Welcome John Mathew!!" />
      <div className="flex gap-5 max-md:flex-col">
        {cardData.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            bgColor={card.bgColor}
            textColor={card.textColor}
            icon={card.icon}
            extraButton={card.extraButton}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeDashboard;