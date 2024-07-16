import React from "react";
import OverviewCard from "../../Components/OverviewCard";
import Table from "../../Components/Table";
import StockTable from "../../Components/StockTable ";

const Overview = () => {
  return (
    <div className="flex-1 bg-white p-4 sm:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <OverviewCard />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3 overflow-x-auto">
          <Table />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3 overflow-x-auto">
          <StockTable />
        </div>
      </div>
    </div>
  );
};

export default Overview;
