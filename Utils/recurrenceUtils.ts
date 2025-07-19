import { RecurrenceType } from '../store/recurrenceStore';

interface RecurrenceOptions {
  recurrenceType: RecurrenceType;
  customFrequency: number;
  customUnit: string;
  startDate: string;
  endDate?: string;
  daysOfWeek: number[];
  pattern: string;
}

export function getRecurringDates({
  recurrenceType,
  customFrequency,
  customUnit,
  startDate,
  endDate,
  daysOfWeek,
  pattern,
}: RecurrenceOptions): string[] {
  // Dummy implementation for now
  if (!startDate) return [];
  const result: string[] = [];
  const start = new Date(startDate);
  let current = new Date(start);
  let count = 0;
  while (count < 30) {
    result.push(current.toISOString().slice(0, 10));
    if (recurrenceType === 'daily') {
      current.setDate(current.getDate() + 1);
    } else if (recurrenceType === 'weekly') {
      current.setDate(current.getDate() + 7);
    } else if (recurrenceType === 'monthly') {
      current.setMonth(current.getMonth() + 1);
    } else if (recurrenceType === 'yearly') {
      current.setFullYear(current.getFullYear() + 1);
    } else if (recurrenceType === 'custom') {
      if (customUnit === 'days') current.setDate(current.getDate() + customFrequency);
      if (customUnit === 'weeks') current.setDate(current.getDate() + 7 * customFrequency);
      if (customUnit === 'months') current.setMonth(current.getMonth() + customFrequency);
      if (customUnit === 'years') current.setFullYear(current.getFullYear() + customFrequency);
    }
    if (endDate && current > new Date(endDate)) break;
    count++;
  }
  return result;
}
