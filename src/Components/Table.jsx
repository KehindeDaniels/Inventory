import React, { useMemo, useState, useEffect } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { columnDeff } from "../columnDef/ExpiryColumns";
import mockData from "../json/chemicals.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faCartPlus,
  faCloudDownload,
} from "@fortawesome/free-solid-svg-icons";

const BasicTable = () => {
  const columns = useMemo(() => columnDeff, []);
  const [data, setData] = useState(mockData);
  const [sorting, setSorting] = useState([
    { id: columns[1].accessorKey, desc: true },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = mockData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  }, [searchTerm]);

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
    <div className="p-4 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center bg-blue-100 p-4 rounded-t-lg mb-4">
        <div className="flex items-center text-blue-900 mb-4 md:mb-0">
          <FontAwesomeIcon icon={faCartPlus} size="2x" />
          <h3 className="ml-3 text-xl md:text-2xl font-bold">
            Expiring Inventory
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Search by name..."
            className="flex-grow md:flex-grow-0 px-4 py-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New Items
          </button>
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
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider cursor-pointer"
                    onClick={() =>
                      setSorting([
                        { id: header.id, desc: !header.isSortedDesc },
                      ])
                    }
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.isSorted
                      ? header.isSortedDesc
                        ? " 👇"
                        : " 👆"
                      : null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-300">
            {table.getRowModel().rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
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
    </div>
  );
};

export default BasicTable;
