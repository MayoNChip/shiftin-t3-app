import { Employee, Shift, WeeklySchedule } from "./ScheduleTypes";

export const employees: Employee[] = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Davis" },
  { id: 4, name: "Diana Brooks" },
];

export const shifts: Shift[] = [
  { id: 101, type: "Morning" },
  { id: 102, type: "Afternoon" },
  { id: 103, type: "Night" },
];

export const weeklySchedule: WeeklySchedule = {
  week: "2023-11-06",
  days: {
    Monday: [
      { shiftId: 101, employeeIds: [1, 2] },
      { shiftId: 102, employeeIds: [3] },
    ],
    Tuesday: [
      { shiftId: 101, employeeIds: [4] },
      { shiftId: 103, employeeIds: [2, 3] },
    ],
    Wednesday: [{ shiftId: 102, employeeIds: [1, 4] }],
    // ... similar data for other days
    Thursday: [],
    Friday: [
      { shiftId: 101, employeeIds: [1, 2, 3] },
      { shiftId: 103, employeeIds: [4] },
    ],
    Saturday: [{ shiftId: 102, employeeIds: [2] }],
    Sunday: [{ shiftId: 103, employeeIds: [1, 3] }],
  },
};
