import React from 'react';

interface RecurrenceOptionsProps {
  value: string;
  onChange: (value: string) => void;
}

const options = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Yearly', value: 'yearly' },
  { label: 'Custom', value: 'custom' },
];

const RecurrenceOptions: React.FC<RecurrenceOptionsProps> = ({ value, onChange }) => (
  <div className="flex gap-2">
    {options.map((opt) => (
      <button
        key={opt.value}
        className={`px-3 py-1 rounded ${value === opt.value ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => onChange(opt.value)}
        type="button"
      >
        {opt.label}
      </button>
    ))}
  </div>
);

export default RecurrenceOptions;
