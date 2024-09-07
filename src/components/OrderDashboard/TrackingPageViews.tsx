import React from 'react';

const TrackingPageViews: React.FC = () => {
  return (
    <section className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full border border-1 rounded-2xl bg-white">
      <div className="flex overflow-hidden flex-col grow gap-4 w-full rounded-xl shadow-sm bg-[color:var(--p-color-bg-surface)] pb-[var(--p-sapce-0)] pl-[var(--p-sapce-0)] pr-[var(--p-sapce-0)] pt-[var(--p-sapce-0)] text-[color:var(--p-color-text-brand)] max-md:mt-4 max-md:max-w-full">
        <div className="flex flex-col px-4 pt-4 pb-8 w-full max-md:max-w-full">
          <div className="flex flex-col w-full">
            <h2 className="text-sm leading-none font-[650]">Tracking Page Views Vs Orders</h2>
            <p className="mt-2 text-sm leading-5 font-[450]">
              Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.
            </p>
          </div>
          <div className="flex flex-col mt-6 w-full leading-none">
            <div className="flex flex-col w-full whitespace-nowrap">
              <div className="flex flex-col mt-5 w-full">
                <div className="flex relative flex-col p-4 w-full bg-orange-100 rounded-md">
                  <h3 className="z-0 text-xs font-[550]">Orders</h3>
                  <p className="z-0 mt-2 text-4xl font-bold tracking-tight">80</p>
                  <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets%2F1516c456a62546418cdc64c619308aeb%2F496ac242742e4ef88d2bf1ef1a8a3357"
                  className="object-contain absolute z-0 ml-auto w-12 h-12 aspect-square bottom-[26px] right-[42px]"
                  alt="Tracking page views icon"
                />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5 w-full">
              <div className="flex relative flex-col p-4 w-full bg-orange-300 rounded-md">
                <h3 className="z-0 text-xs font-[550]">Tracking Page Views</h3>
                <p className="z-0 mt-2 text-4xl font-bold tracking-tight">44</p>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6666d5b1bb05de4898e60902396461b455ceed34578ed1b4b34acc499960d773?placeholderIfAbsent=true&apiKey=1516c456a62546418cdc64c619308aeb"
                  className="object-contain absolute z-0 ml-auto w-12 h-12 aspect-square bottom-[26px] right-[42px]"
                  alt="Tracking page views icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingPageViews;