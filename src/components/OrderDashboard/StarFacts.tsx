import React from 'react';

const StarFacts: React.FC = () => {
  return (
    <section className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col gap-4 mx-auto w-full shadow-sm bg-[color:var(--p-color-bg-surface)] min-h-[368px] pb-[var(--p-sapce-0)] pl-[var(--p-sapce-0)] pr-[var(--p-sapce-0)] pt-[var(--p-sapce-0)] max-md:mt-4 bg-yellow-700 border border-1 rounded-2xl">
        <div className="flex relative gap-6 items-start pt-4 pr-11 pb-6 pl-4 w-full max-md:pr-5">
          <div className="flex z-0 flex-col flex-1 shrink basis-0">
            <h2 className="text-sm leading-5 font-bold text-[color:var(--p-color-text-brand-on-bg-fill)]">
              Star Facts about your orders!!!
            </h2>
            <div className="flex flex-col mt-2 w-full">
              <p className="text-sm leading-5 font-[450] text-[color:var(--p-color-text-brand-on-bg-fill)]">
                There are 8 shipments that have been in out for delivery for more than 3 days.
                <br />
                <br />
                There are 5 shipments in exception right now
                <br />
                <br />
                The maximum chargebacks are from Miami.
              </p>
              <div className="flex gap-2 items-center mt-8 w-full text-xs leading-none font-[550] max-w-[300px] min-h-[28px] text-[color:var(--p-color-text)]">
                <button className="self-stretch px-3 py-1.5 font-bold my-auto shadow-sm bg-[color:var(--p-color-bg-fill)] gap-[var(--p-sapce-050)] pb-[var(--p-sapce-150)] pl-[var(--p-sapce-300)] pr-[var(--p-sapce-300)] pt-[var(--p-sapce-150)] rounded-[var(--p-border-radius-button)]">
                  Check Orders Page
                </button>
              </div>
            </div>
          </div>
          <div className="flex absolute z-0 shrink-0 bg-orange-100 rounded-full opacity-20 bottom-[114px] h-[70px] right-[-3px] w-[70px]" />
          <div className="flex absolute z-0 shrink-0 bg-orange-100 rounded-full h-[51px] right-[-130px] top-[63px] w-[51px]" />
        </div>
      </div>
    </section>
  );
};

export default StarFacts;