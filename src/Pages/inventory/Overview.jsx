import React from "react";
import OverviewCard from "../../Components/OverviewCard";
import Table from "../../Components/Table";
import StockTable from "../../Components/StockTable ";

const Overview = () => {
  return (
    <div className="flex-1 bg-white p-4 sm:p-8">
      <div className="cards">
        <OverviewCard />
        <Table />
        <StockTable />
      </div>
    </div>
  );
};

export default Overview;
