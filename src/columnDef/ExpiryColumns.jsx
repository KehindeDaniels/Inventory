// src/components/columns.js
import { differenceInCalendarDays, parseISO } from "date-fns";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export const columnDeff = [
  {
    accessorKey: "name",
    header: "Product",
    cell: (info) =>
      `${info.row.original.name} (${info.row.original.batch_number})`,
  },
  {
    accessorKey: "expiry_date",
    header: "Exp. Date",
  },
  {
    accessorKey: "expiry_date",
    header: "Days to Expiration",
    cell: (info) => {
      const days = differenceInCalendarDays(
        parseISO(info.getValue()),
        new Date()
      );
      if (days < 0) {
        return `${Math.abs(days)} days ago`;
      }
      return `${days} days`;
    },
  },
  {
    accessorKey: "expiry_date",
    header: "Status",
    cell: (info) => {
      const days = differenceInCalendarDays(
        parseISO(info.getValue()),
        new Date()
      );
      if (days < 0) {
        return (
          <div className="bg-red-500 text-white font-medium p-2 rounded text-center">
            Expired
          </div>
        );
      }
      if (days < 5) {
        return (
          <div className="bg-yellow-500 text-white font-medium p-2 rounded text-center">
            Expiring soon
          </div>
        );
      }
      return (
        <div className="bg-green-500 text-white font-medium p-2 rounded text-center">
          Expires
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
