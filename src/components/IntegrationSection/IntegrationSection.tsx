import React from 'react';
import ActionButton from '../common/ActionButton';

const IntegrationSection: React.FC = () => {
  const integrations = [
    { id: 1, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e264393c84179b05060b8ab9981e4296f888b4114ce3442396e143a2a83554b3?placeholderIfAbsent=true&apiKey=1516c456a62546418cdc64c619308aeb", alt: "Integration 1" },
    { id: 2, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e585fb4a756daf3807718dddc3d13d6a7162620523a79f35cb7cd35815a45b7e?placeholderIfAbsent=true&apiKey=1516c456a62546418cdc64c619308aeb", alt: "Integration 2" },
    { id: 3, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c59529bb8147b28452956b4bf2c48798f269ca23fd456d328986c70733bc00bc?placeholderIfAbsent=true&apiKey=1516c456a62546418cdc64c619308aeb", alt: "Integration 3" },
    { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4e847788a1c8e2067e3eef609c69b0e7fabfae38ea5b84e54faec08cea0e23e?placeholderIfAbsent=true&apiKey=1516c456a62546418cdc64c619308aeb", alt: "Integration 4" },
    { id: 5, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7e51e9f90188ff818915fdd55c2c1ec030864fd6f2af2b158a9b7fc733d2f21?placeholderIfAbsent=true&apiKey=1516c456a62546418cdc64c619308aeb", alt: "Integration 5" },
  ];

  return (
    <section className="flex overflow-hidden flex-col gap-4 mt-4 shadow-sm bg-[color:var(--p-color-bg-surface)] pb-[var(--p-sapce-0)] pl-[var(--p-sapce-0)] pr-[var(--p-sapce-0)] pt-[var(--p-sapce-0)] max-md:max-w-full border border-1 rounded-2xl">
      <div className="flex flex-col px-4 pt-4 pb-6 w-full max-md:max-w-full">
        <div className="flex flex-col w-full text-[color:var(--p-color-text-brand)]">
          <h2 className="text-sm leading-none font-[650]">Explore Our Integrated Ecosystem</h2>
          <p className="mt-2 text-sm leading-5 font-[450]">
            Discover a variety of popular integrations tailored for your convenience.
          </p>
        </div>
        <div className="flex flex-col mt-6 max-w-full w-[266px]">
          <div className="flex gap-6 items-start w-full">
            {integrations.map((integration) => (
              <img
                key={integration.id}
                loading="lazy"
                src={integration.src}
                alt={integration.alt}
                className="object-contain shrink-0 aspect-square w-[34px]"
              />
            ))}
          </div>
          <div className="flex gap-2 items-center mt-8 w-full">
            <ActionButton text="Explore Integrations" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;