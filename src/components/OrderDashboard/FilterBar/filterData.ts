export interface ShipmentStatus {
  label: string;
  value: number;
  isActive?: boolean; // Added isActive property
}

export interface DataByFilter {
  'Lifetime': ShipmentStatus[];
  'Last Week': ShipmentStatus[];
  'Last Month': ShipmentStatus[];
  'Last Year': ShipmentStatus[];
}

// Dummy data for different time filters with isActive property
export const dataByFilter: DataByFilter = {
  'Lifetime': [
    { label: 'Delivered', value: 220, isActive: true },
    { label: 'Out for delivery', value: 150, isActive: false },
    { label: 'Intransit', value: 120, isActive: false },
    { label: 'Pending', value: 90, isActive: false },
    { label: 'Exception', value: 30, isActive: false },
  ],
  'Last Week': [
    { label: 'Delivered', value: 40, isActive: true },
    { label: 'Out for delivery', value: 30, isActive: false },
    { label: 'Intransit', value: 20, isActive: false },
    { label: 'Pending', value: 15, isActive: false },
    { label: 'Exception', value: 5, isActive: false },
  ],
  'Last Month': [
    { label: 'Delivered', value: 100, isActive: true },
    { label: 'Out for delivery', value: 80, isActive: false },
    { label: 'Intransit', value: 60, isActive: false },
    { label: 'Pending', value: 45, isActive: false },
    { label: 'Exception', value: 10, isActive: false },
  ],
  'Last Year': [
    { label: 'Delivered', value: 180, isActive: true },
    { label: 'Out for delivery', value: 120, isActive: false },
    { label: 'Intransit', value: 100, isActive: false },
    { label: 'Pending', value: 60, isActive: false },
    { label: 'Exception', value: 20, isActive: false },
  ],
};
