import React, { useMemo, useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { columnDeff } from "../columnDef/ExpiryColumns"; // Ensure path is correct
import mockData from "../json/chemicals.json"; // Ensure path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faCartPlus,
  faCloudDownload,
} from "@fortawesome/free-solid-svg-icons";

const BasicTable = () => {
  const columns = useMemo(() => columnDeff, []);
  const data = useMemo(() => mockData, []);
  const [sorting, setSorting] = useState([
    { id: columns[1].accessorKey, desc: true },
  ]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center bg-blue-100 p-4 rounded-t-lg mb-4">
        <div className="flex items-center text-blue-900">
          <FontAwesomeIcon icon={faCartPlus} size="2x" />
          <h3 className="ml-3 text-2xl font-bold">Expiring Inventory</h3>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-200">
            <FontAwesomeIcon icon={faPrint} className="mr-2" />
            Print
          </button>
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-200">
            <FontAwesomeIcon icon={faCloudDownload} className="mr-2" />
            Export
          </button>
        </div>
      </div>

      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((headerColumn) => (
                <th
                  key={headerColumn.id}
                  className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => setDropdownOpen(headerColumn.id)}
                >
                  {flexRender(
                    headerColumn.column.columnDef.header,
                    headerColumn.getContext()
                  )}
                  {headerColumn.column.getIsSorted() === "asc"
                    ? " 👆"
                    : headerColumn.column.getIsSorted() === "desc"
                    ? " 👇"
                    : ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={`${row.id}_${cell.column.id}`}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
