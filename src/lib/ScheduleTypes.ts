// types.ts
export interface Employee {
  id: number;
  name: string;
  //   role: string;
  //   availability: Record<string, boolean>;
}

// export interface Shift {
//   id: number;
//   type: string;
//   startTime: string;
//   endTime: string;
// }

export interface Shift {
  id: number;
  type: string; // e.g., 'Morning', 'Afternoon', 'Night'
}
export interface ShiftAssignment {
  shiftId: number;
  employeeIds: number[]; // Array of employee IDs
}
export interface WeeklySchedule {
  week: string; // e.g., '2023-11-06' indicating the start of the week
  // days: {

  //   [key: string]: ShiftAssignment[];
  // };
  days: Record<string, ShiftAssignment[]>;
}

// export interface ShiftData {
//   employees: Employee[];
//   shifts: Shift[];
//   weeklyShiftSchedules: WeeklyShiftSchedule[];
// }
