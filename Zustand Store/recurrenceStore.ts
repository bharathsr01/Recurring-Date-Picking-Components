import { create } from 'zustand';

export type RecurrenceType = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'custom';

interface RecurrenceState {
  recurrenceType: RecurrenceType;
  setRecurrenceType: (type: RecurrenceType) => void;
  customFrequency: number;
  setCustomFrequency: (n: number) => void;
  customUnit: string;
  setCustomUnit: (u: string) => void;
  startDate: string;
  setStartDate: (d: string) => void;
  endDate?: string;
  setEndDate: (d: string) => void;
  daysOfWeek: number[];
  setDaysOfWeek: (days: number[]) => void;
  pattern: string;
  setPattern: (p: string) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  recurrenceType: 'daily',
  setRecurrenceType: (recurrenceType) => set({ recurrenceType }),
  customFrequency: 1,
  setCustomFrequency: (customFrequency) => set({ customFrequency }),
  customUnit: 'days',
  setCustomUnit: (customUnit) => set({ customUnit }),
  startDate: '',
  setStartDate: (startDate) => set({ startDate }),
  endDate: '',
  setEndDate: (endDate) => set({ endDate }),
  daysOfWeek: [],
  setDaysOfWeek: (daysOfWeek) => set({ daysOfWeek }),
  pattern: '',
  setPattern: (pattern) => set({ pattern }),
}));
