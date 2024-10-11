import { useEffect } from "react";
import ApexCharts from "apexcharts";

const PieChart = () => {
  // Random data generator for pie chart (you can replace this with actual data)
  const getRandomData = () => {
    return [
      35, // Restaurants
      15, // Cafes
      30, // Homes
      20, // Shops
    ];
  };

  // Chart options configuration
  const getChartOptions = (data) => {
    return {
      series: data,
      colors: ["#F87171", "#FBBF24", "#34D399", "#60A5FA"], // Color palette representing each source
      chart: {
        height: 400,
        width: "100%",
        type: "pie",
      },
      stroke: {
        colors: ["white"],
      },
      plotOptions: {
        pie: {
          labels: {
            show: true,
          },
          size: "100%",
          dataLabels: {
            offset: -25,
          },
        },
      },
      labels: ["Restaurants", "Cafes", "Homes", "Shops"], // Custom labels to match the sources
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
        labels: {
          colors: "white",
        },
      },
    };
  };

  // Initialize chart on component mount
  useEffect(() => {
    const chartElement = document.getElementById("pie-chart");

    if (chartElement) {
      const chart = new ApexCharts(
        chartElement,
        getChartOptions(getRandomData())
      );
      chart.render();

      return () => {
        chart.destroy(); // Cleanup the chart on component unmount
      };
    }
  }, []);

  return (
    <div className="max-w-sm w-full rounded-lg shadow bg-gray-900 p-6">
      <div className="flex justify-between items-start w-full">
        <div className="flex-col items-center">
          <div className="flex items-center mb-1">
            <h5 className="text-xl font-bold leading-none text-white me-1">
              Food Source Contributions
            </h5>
            {/* Info Tooltip */}
            <svg
              data-popover-target="chart-info"
              data-popover-placement="bottom"
              className="w-3.5 h-3.5 text-gray-400 hover:text-white cursor-pointer ms-1 mt-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="py-6" id="pie-chart"></div>

      {/* Impact Footer Section */}
      <div className="border-t border-gray-700 pt-4">
        <div className="text-white text-sm">
          This chart represents the percentage of food contributions from
          different sources—restaurants, cafes, homes, and shops—that are
          redistributed to poor children and people in need.
        </div>
      </div>
    </div>
  );
};

export default PieChart;
