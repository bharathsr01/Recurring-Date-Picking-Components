import React from 'react';

interface DateRangePickerProps {
  startDate: string;
  endDate?: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ startDate, endDate, onStartDateChange, onEndDateChange }) => (
  <div className="flex gap-4 items-center">
    <div>
      <label htmlFor="start-date" className="block text-sm">Start Date</label>
      <input
        id="start-date"
        type="date"
        value={startDate}
        onChange={e => onStartDateChange(e.target.value)}
        className="border rounded px-2 py-1"
        placeholder="Select start date"
        title="Start Date"
      />
    </div>
    <div>
      <label htmlFor="end-date" className="block text-sm">End Date (optional)</label>
      <input
        id="end-date"
        type="date"
        value={endDate || ''}
        onChange={e => onEndDateChange(e.target.value)}
        className="border rounded px-2 py-1"
        placeholder="Select end date"
        title="End Date"
      />
    </div>
  </div>
);

export default DateRangePicker;
