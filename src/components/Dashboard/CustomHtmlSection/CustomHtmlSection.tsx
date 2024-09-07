import React from 'react';
import ActionButton from '../../common/ActionButton';

const CustomHtmlSection: React.FC = () => {
  return (
    <section className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full border border-1 rounded-2xl">
      <div className="flex overflow-hidden flex-col gap-4 w-full rounded-2xl shadow-sm bg-[color:var(--p-color-bg-surface)] pb-[var(--p-sapce-0)] pl-[var(--p-sapce-0)] pr-[var(--p-sapce-0)] pt-[var(--p-sapce-0)] max-md:mt-4">
        <div className="flex flex-col p-4 w-full">
          <div className="flex gap-6 justify-center items-center w-full leading-5 text-[color:var(--p-color-text-brand)]">
            <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0 min-w-[240px]">
              <h2 className="text-sm font-[650]">Seamlessly Integrate Custom HTML Elements</h2>
              <p className="mt-2 text-sm font-[450]">
                Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-8 w-full text-sm font-[450] text-[color:var(--p-color-text)]">
            <label htmlFor="htmlLink" className="flex-1 shrink gap-2 w-full leading-loose">
              HTML Link
            </label>
            <textarea
              id="htmlLink"
              className="flex flex-col justify-center px-3 py-1.5 mt-1 w-full leading-5 whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-500 min-h-[128px]"
              placeholder="Enter your HTML here"
              aria-label="HTML Link input"
            ></textarea>
          </div>
          <div className="flex gap-2 items-center mt-8 max-w-full w-[266px]">
            <ActionButton text="Preview" variant="secondary" />
            <ActionButton text="Apply changes" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomHtmlSection;