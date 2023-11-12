import React from "react";
import { DataTable } from "./data-table";
import { TableShiftData, columns } from "./columns";
import { transformScheduleToTableData } from "./GetColumnsData";
import { employees, shifts, weeklySchedule } from "@/lib/dummyData";

function page() {
  const tableData: TableShiftData[] = transformScheduleToTableData(
    weeklySchedule,
    shifts,
    employees,
  );

  console.log(tableData[0]?.days.Monday);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={tableData} />
    </div>
  );
}

export default page;
