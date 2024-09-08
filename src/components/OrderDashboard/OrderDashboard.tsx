import React, { useState } from 'react';
import ShipmentUpdates from './ShipmentUpdates';
import StarFacts from './StarFacts';
import TrackingPageViews from './TrackingPageViews';
import Message from '../common/Message';
import FilterBar from './FilterBar/FilterBar';

const OrderDashboard: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Lifetime');

  const handleFilterChange = (label: string) => {
    setActiveFilter(label);
  };

  return (
    <main className="self-stretch mt-9 max-md:max-w-full bg-[#FFF7EE] px-4 py-2 sm:px-16 sm:py-4" id='trackingPage'>
      <Message msg="Instant Dive into Your Performance Metrics"/>
      <FilterBar activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      <div className="flex gap-5 max-md:flex-col my-4">
        <ShipmentUpdates activeFilter={activeFilter} />
        <StarFacts />
        <TrackingPageViews />
      </div>
    </main>
  );
};

export default OrderDashboard;
