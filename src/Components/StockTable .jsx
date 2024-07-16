import React, { useMemo, useState, useEffect } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { stockColumns } from "../columnDef/StockColumns ";
import mockStockData from "../json/count.json";

const StockTable = () => {
  const columns = useMemo(() => stockColumns, []);
  const [data, setData] = useState(mockStockData);
  const [searchText, setSearchText] = useState("");
  const [sorting, setSorting] = useState([
    { id: columns[1].accessorKey, desc: true },
  ]);

  useEffect(() => {
    if (searchText === "") {
      setData(mockStockData);
    } else {
      const filteredData = mockStockData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setData(filteredData);
    }
  }, [searchText]);

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
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search product..."
          className="px-4 py-2 border rounded flex-grow"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add New Items
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((headerColumn) => (
                  <th
                    key={headerColumn.id}
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider cursor-pointer"
                    onClick={headerColumn.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      headerColumn.column.columnDef.header,
                      headerColumn.getContext()
                    )}
                    {headerColumn.column.getIsSorted() === "asc"
                      ? " 👆"
                      : headerColumn.column.getIsSorted() === "desc"
                      ? " 👇"
                      : null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-300">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-100">
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

export default StockTable;
