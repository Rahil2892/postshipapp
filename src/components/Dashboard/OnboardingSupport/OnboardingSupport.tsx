import React from 'react';
import ActionButton from '../../common/ActionButton';

const OnboardingSupport: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col gap-4 bg-violet-600 shadow-sm pb-[var(--p-sapce-0)] pl-[var(--p-sapce-0)] pr-[var(--p-sapce-0)] pt-[var(--p-sapce-0)] max-md:max-w-full border border-1 rounded-2xl">
      <div className="flex flex-col justify-center p-4 w-full bg-white max-md:max-w-full">
        <div className="flex gap-6 justify-center items-center w-full text-[color:var(--p-color-text-brand)]">
          <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0 min-w-[240px]">
            <h2 className="text-sm leading-none font-[650]">
              Exclusive Onboarding Support for High-Volume Brands
            </h2>
            <p className="mt-2 text-sm leading-5 font-[450]">
              Unlock personalized guidance! Book a one-on-one <br /> onboarding call to streamline your experience.
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-6 w-full">
          <ActionButton text="Schedule A Call" variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default OnboardingSupport;