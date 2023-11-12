"use client";

import type { Employee } from "@/lib/ScheduleTypes";
import type { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export interface TableShiftData {
  type: string; // Shift type
  days: {
    Monday: Employee[];
    Tuesday: Employee[];
    Wednesday: Employee[];
    Thursday: Employee[];
    Friday: Employee[];
    Saturday: Employee[];
    Sunday: Employee[];
  };
}

type DayOfWeek = keyof TableShiftData["days"];

const daysOfWeek: DayOfWeek[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayColumns: ColumnDef<TableShiftData>[] = daysOfWeek.map((day) => ({
  accessorFn: (row) => row.days[day], // Accessing the day from the 'days' object
  accessorKey: day, // The key should match the property in your data
  header: day,
  cell: (info) => {
    const cellValue = info.getValue() as Employee[]; // Cast to Employee[]
    return cellValue && cellValue.length > 0
      ? cellValue.map((employee) => employee.name).join(", ")
      : "No Employees";
  },
}));

const shiftTypeColumn: ColumnDef<TableShiftData> = {
  accessorKey: "type",
  header: "Shift Type",
};

export const columns: ColumnDef<TableShiftData>[] = [
  shiftTypeColumn,
  ...dayColumns,
];
