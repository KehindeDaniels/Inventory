import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faWarehouse,
  faExclamationTriangle,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";

const OverviewCard = () => {
  const cards = [
    {
      title: "Total Items",
      count: "1,256",
      trend: "+3.2%",
      description: "Items ready for use",
      icon: faWarehouse,
      bgColor: "bg-blue-800",
    },
    {
      title: "Low Stock",
      count: "110",
      //   trend: "Needs replenishing",
      description: "Including 30 nearly finished",
      icon: faShoppingCart,
      bgColor: "bg-white",
    },
    {
      title: "Expiring Items",
      count: "16",
      //   trend: "Monitor closely",
      description: "Expiring this quarter",
      icon: faExclamationTriangle,
      bgColor: "bg-white",
    },
    {
      title: "Recent Orders",
      count: "321",
      //   trend: "Updated daily",
      description: "Orders this month",
      icon: faHistory,
      bgColor: "bg-white",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
      {cards.map((card, index) => (
        <div
          key={index}
          //   className={` py-4 px-8 rounded-lg flex flex-col items-start gap-2 shadow-md m-2 ${
          //     card.bgColor
          //   } ${index === 0 ? "text-white" : "text-gray-600"}`}
          className={`flex flex-col items-start p-4 font-normal rounded-md justify-center  ${
            index === 0
              ? "bg-[#045CF4] text-white"
              : "bg-transparent text-gray-500 border border-gray-50`"
          }`}
        >
          <FontAwesomeIcon icon={card.icon} size="xl" />
          <h3 className="text-lg font-bold ">{card.title}</h3>
          <div className="count-trend flex flex-col sm:flex-row items-baseline gap-1">
            <p
              className={`text-3xl font-bold ${
                index === 0 ? "text-white" : "text-[#045CF4]"
              }`}
            >
              {card.count}
            </p>
            <p className="text-sm">{card.trend}</p>
          </div>
          <p className="text-xs mt-1">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewCard;
