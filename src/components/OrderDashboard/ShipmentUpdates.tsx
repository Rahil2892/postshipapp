import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { dataByFilter, ShipmentStatus } from './FilterBar/filterData'; // Adjust import path as necessary

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface ShipmentStatusWithActive extends ShipmentStatus {
  isActive: boolean;
}

const chartColors = [
  'rgba(102, 51, 0, 0.9)', 
  'rgba(153, 102, 0, 0.9)', 
  'rgba(204, 153, 0, 0.9)', 
  'rgba(255, 204, 51, 0.9)', 
  'rgba(255, 229, 153, 0.9)', 
];

const borderColors = [
  'rgba(255, 255, 255, 1)', 
  'rgba(255, 255, 255, 1)', 
  'rgba(255, 255, 255, 1)', 
  'rgba(255, 255, 255, 1)', 
  'rgba(255, 255, 255, 1)', 
];

const ShipmentUpdates: React.FC<{ activeFilter: string }> = ({ activeFilter }) => {
  const [shipmentStatuses, setShipmentStatuses] = useState<ShipmentStatusWithActive[]>(() => {
    // Initialize with data from filter, including `isActive` field
    const initialData = dataByFilter[activeFilter as keyof typeof dataByFilter] || [];
    return initialData.map(status => ({ ...status, isActive: false }));
  });

  useEffect(() => {
    const updatedData = dataByFilter[activeFilter as keyof typeof dataByFilter] || [];
    setShipmentStatuses(updatedData.map(status => ({ ...status, isActive: false })));
  }, [activeFilter]);

  const handleFilterClick = (index: number) => {
    const updatedStatuses = shipmentStatuses.map((status, i) => ({
      ...status,
      isActive: i === index,
    }));
    setShipmentStatuses(updatedStatuses);
  };

  const chartData = {
    labels: shipmentStatuses.map(status => status.label),
    datasets: [
      {
        data: shipmentStatuses.map(status => status.value),
        backgroundColor: chartColors,
        borderColor: borderColors,
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      datalabels: {
        display: (context: any) => shipmentStatuses[context.dataIndex]?.isActive,
        color: 'black',
        font: {
          weight: 'bold' as const,
        },
      },
      legend: {
        display: false, // Hide legend
      },
    },
    responsive: true,
  };

  return (
    <section className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full border rounded-2xl bg-white">
      <div className="flex flex-col grow text-[color:var(--p-color-text-brand)] max-md:mt-4 max-md:max-w-full">
        <div className="flex flex-col gap-4 justify-center p-4 w-full rounded-xl shadow-sm bg-[color:var(--p-color-bg-surface)]">
          <div className="flex flex-col justify-center w-full">
            <div className="flex justify-between items-center w-full">
              <h2 className="font-[650]">Shipment Updates</h2>
              <p className="font-[450]">Total Orders: {shipmentStatuses.reduce((acc, cur) => acc + cur.value, 0)}</p>
            </div>
            <div className="flex-shrink mt-4 ">
              {shipmentStatuses.map((status, index) => (
                <button
                  key={index}
                  onClick={() => handleFilterClick(index)}
                  className={`px-3 py-2 m-1 rounded ${
                    status.isActive ? 'bg-orange-50 border-2 border-neutral-200' : 'bg-zinc-100'
                  }`}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center">
           <div className="w-28">
            <Doughnut data={chartData} options={chartOptions} />
          </div> 
          </div>

          <div className="flex justify-start mt-6 w-full text-sm leading-none font-[450]">
            <div className="flex flex-wrap gap-4 items-start">
              {shipmentStatuses.map((status, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-5 h-2.5 rounded-3xl`} style={{ backgroundColor: chartColors[index] }} />
                  <span>{status.label}: {status.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShipmentUpdates;
