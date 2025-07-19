# Recurring Date Picker Component

A reusable React (Next.js) component for selecting recurring dates, inspired by the TickTick app. This project demonstrates modular component design, state management with Zustand, and recurrence logic utilities, styled with Tailwind CSS.

## Features

- **Recurrence Options:** Daily, Weekly, Monthly, Yearly, and Custom patterns

- **Customization:**
  - Every X days/weeks/months/years
  - Select specific days of the week
  - Patterns like “The second Tuesday of every month”

- **Date Range:** Select start and optional end date

- **Mini Calendar Preview:** Visual preview of selected recurring dates

- **Modular Components:**
  - `RecurrenceOptions`
  - `CustomRecurrence`
  - `DateRangePicker`
  - `CalendarPreview`
  - `RecurringDatePicker` (main entry)

- **State Management:** Zustand store (`/store/recurrenceStore.ts`)

- **Recurrence Logic:** Utility functions in `/utils/recurrenceUtils.ts`

- **Testing:** Unit and integration tests with Jest and React Testing Library

## Folder Structure

```
/components
  ├── RecurrenceOptions.tsx
  ├── CustomRecurrence.tsx
  ├── DateRangePicker.tsx
  ├── CalendarPreview.tsx
  └── RecurringDatePicker.tsx
/store
  └── recurrenceStore.ts
/utils
  └── recurrenceUtils.ts
/tests
  └── RecurringDatePicker.test.tsx
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Run tests:**
   ```sh
   npm test
   ```

## Usage

Import and use the main component in your app:

```tsx
import RecurringDatePicker from './components/RecurringDatePicker';

function App() {
  return <RecurringDatePicker />;
}
```

## Customization

- Update recurrence logic in `/utils/recurrenceUtils.ts` as needed.
- Adjust UI and styles using Tailwind CSS classes.

## License

MIT
