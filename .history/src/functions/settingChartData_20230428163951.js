import { convertDate } from "./convertDate";
export const settingChartData = (setChartData, prices1, prices2) => {
  if (prices1) {
    setChartData({
    labels: prices.map((price) => convertDate(price[0])),
    datasets: [
      {
        data: prices1.map((price) => price[1]),
        borderWidth: 2,
        fill: true,
        tension: 0.25,
        backgroundColor: "rgba(58,128,233,0.1)",
        borderColor: "#3a80e9",
        pointRadius: 0,
      },
    ],
  });
  } else {
  }
  
};