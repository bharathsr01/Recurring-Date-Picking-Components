import React from 'react';

interface CalendarPreviewProps {
  dates: string[];
}

const CalendarPreview: React.FC<CalendarPreviewProps> = ({ dates }) => (
  <div className="mt-4">
    <h4 className="font-semibold mb-2">Preview</h4>
    <div className="flex flex-wrap gap-2">
      {dates.slice(0, 10).map(date => (
        <span key={date} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{date}</span>
      ))}
      {dates.length > 10 && <span className="text-gray-500">+{dates.length - 10} more</span>}
    </div>
  </div>
);

export default CalendarPreview;
