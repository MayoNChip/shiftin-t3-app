import { Employee, Shift, WeeklySchedule } from "@/lib/ScheduleTypes";
import { TableShiftData } from "./columns";

export function transformScheduleToTableData(
  weeklySchedule: WeeklySchedule,
  shifts: Shift[],
  employees: Employee[],
): TableShiftData[] {
  const result = shifts.map((shift) => {
    // Create an object for each shift with an empty array for each day
    const shiftRow: TableShiftData = {
      type: shift.type,
      days: {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: [],
      },
    };

    // For each day, find the employees assigned to this shift
    for (const day in weeklySchedule.days) {
      const assignments = weeklySchedule.days[day];
      if (!assignments) return;
      const assignedEmployees = assignments
        .filter((assignment) => assignment.shiftId === shift.id)
        .flatMap((assignment) => assignment.employeeIds)
        .map((empId) => employees.find((emp) => emp.id === empId))
        .filter((emp): emp is Employee => !!emp); // Filter out undefined values

      shiftRow.days[day as keyof TableShiftData["days"]] = assignedEmployees;
    }

    return shiftRow;
  });
  return result.filter((item): item is TableShiftData => item !== undefined);
}
