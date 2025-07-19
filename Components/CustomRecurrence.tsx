import React from 'react';

interface CustomRecurrenceProps {
  frequency: number;
  unit: string;
  onFrequencyChange: (n: number) => void;
  onUnitChange: (u: string) => void;
}

const units = [
  { label: 'Days', value: 'days' },
  { label: 'Weeks', value: 'weeks' },
  { label: 'Months', value: 'months' },
  { label: 'Years', value: 'years' },
];

const CustomRecurrence: React.FC<CustomRecurrenceProps> = ({ frequency, unit, onFrequencyChange, onUnitChange }) => (
  <div className="flex gap-2 items-center">
    <span>Every</span>
    <label htmlFor="recurrence-frequency" className="sr-only">
      Frequency
    </label>
    <input
      id="recurrence-frequency"
      type="number"
      min={1}
      value={frequency}
      onChange={e => onFrequencyChange(Number(e.target.value))}
      className="w-16 border rounded px-2 py-1"
      placeholder="1"
      aria-label="Frequency"
    />
    <label htmlFor="recurrence-unit" className="sr-only">
      Unit
    </label>
    <select
      id="recurrence-unit"
      value={unit}
      onChange={e => onUnitChange(e.target.value)}
      className="border rounded px-2 py-1"
      aria-label="Unit"
    >
      {units.map(u => (
        <option key={u.value} value={u.value}>{u.label}</option>
      ))}
    </select>
  </div>
);

export default CustomRecurrence;
