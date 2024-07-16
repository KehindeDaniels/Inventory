// src/components/stockColumns.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export const stockColumns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "quantity",
    header: "Quantity in Stock",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "reorder_point",
    header: "Reorder Point",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "quantity", // Utilize quantity to determine the status based on reorder point
    header: "Status",
    cell: (info) => {
      const quantity = info.getValue();
      const reorderPoint = info.row.original.reorder_point;
      if (quantity === 0) {
        return (
          <div className="bg-red-500 text-white font-medium p-2 rounded text-center">
            Out of Stock
          </div>
        );
      } else if (quantity <= reorderPoint) {
        return (
          <div className="bg-yellow-500 text-white font-medium p-2 rounded text-center">
            Low Stock
          </div>
        );
      }
      return (
        <div className="bg-green-500 text-white font-medium p-2 rounded text-center">
          In Stock
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: () => (
      <div className="flex justify-evenly">
        <button className="p-2 text-blue-500 hover:text-blue-700">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="p-2 text-red-500 hover:text-red-700">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    ),
  },
];
