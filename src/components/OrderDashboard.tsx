import React from 'react';
import ShipmentUpdates from './ShipmentUpdates';
import StarFacts from './StarFacts';
import TrackingPageViews from './TrackingPageViews';
import Message from '../components/Message'
import FilterBar from './FilterBar/FilterBar';

const OrderDashboard: React.FC = () => {
  return (
    <main className="self-stretch mt-9 max-md:max-w-full bg-[#FFF7EE] px-4 py-2 sm:px-16 sm:py-4">
        <Message msg="Instant Dive into Your Performance Metrics"/>
        <FilterBar/>
      <div className="flex gap-5 max-md:flex-col my-4">
        <ShipmentUpdates />
        <StarFacts />
        <TrackingPageViews />
      </div>
    </main>
  );
};

export default OrderDashboard;