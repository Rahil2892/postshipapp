import React from 'react';

interface ShipmentStatus {
  label: string;
  isActive: boolean;
}

interface ChartLegendItem {
  color: string;
  label: string;
}

const shipmentStatuses: ShipmentStatus[] = [
  { label: 'Delivered', isActive: true },
  { label: 'Out for delivery', isActive: false },
  { label: 'Intransit', isActive: false },
  { label: 'Pending', isActive: false },
  { label: 'Exception', isActive: false },
];

const chartLegend: ChartLegendItem[] = [
  { color: 'bg-yellow-900', label: 'Exception' },
  { color: 'bg-yellow-700', label: 'Intransit' },
  { color: 'bg-yellow-500', label: 'Pending' },
  { color: 'bg-orange-300', label: 'Delivered' },
  { color: 'bg-orange-200', label: 'Out for delivery' },
];

const ShipmentUpdates: React.FC = () => {
  return (
    <section className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full border border-1 rounded-2xl">
      <div className="flex flex-col grow text-[color:var(--p-color-text-brand)] max-md:mt-4 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col gap-4 justify-center p-4 w-full rounded-xl shadow-sm bg-[color:var(--p-color-bg-surface)] pb-[var(--p-space-card-padding)] pl-[var(--p-space-card-padding)] pr-[var(--p-space-card-padding)] pt-[var(--p-space-card-padding)] max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center p-5 w-full">
            <div className="flex flex-col justify-center w-full">
              <div className="flex overflow-hidden gap-2.5 items-start w-full text-sm leading-none">
                <div className="flex flex-1 shrink gap-10 justify-between items-start w-full basis-0 min-w-[240px]">
                  <h2 className="font-[650]">Shipment Updates</h2>
                  <p className="font-[450]">Total Orders : 394</p>
                </div>
              </div>
              <div className="flex overflow-hidden overflow-x-auto flex-col items-start mt-4 w-full text-sm leading-loose font-[650]">
                <div className="flex overflow-hidden overflow-x-auto flex-wrap gap-2 items-center mr-0 w-full max-md:max-w-full">
                  {shipmentStatuses.map((status, index) => (
                    <div
                      key={index}
                      className={`self-stretch px-3 py-2 my-auto whitespace-nowrap rounded ${
                        status.isActive ? 'bg-orange-50 border border-solid border-neutral-200' : 'bg-zinc-100'
                      }`}
                    >
                      {status.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbd21069f48b81f7bf9dec598401cdfa09b988b96a4bccb7110644c4036b6b3b?placeholderIfAbsent=true&apiKey=1516c456a62546418cdc64c619308aeb" className="object-contain self-center mt-6 w-40 max-w-full aspect-square" alt="Shipment updates chart" />
            <div className="flex flex-col justify-center mt-6 w-full text-sm leading-none font-[450]">
              <div className="flex gap-4 items-center w-full whitespace-nowrap">
                {chartLegend.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex gap-2 items-center self-stretch my-auto">
                    <div className={`flex shrink-0 self-stretch my-auto w-5 h-2.5 ${item.color} rounded-3xl`} />
                    <div className="self-stretch my-auto">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 items-center mt-4 w-full">
                {chartLegend.slice(3).map((item, index) => (
                  <div key={index} className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap">
                    <div className={`flex shrink-0 self-stretch my-auto w-5 h-2.5 ${item.color} rounded-3xl`} />
                    <div className="self-stretch my-auto">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShipmentUpdates;