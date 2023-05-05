import { convertDate } from "./convertDate";
export const settingChartData = (setChartData, prices1, prices2) => {
  console.log()
  if (prices2) {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label: "crypto1",
          data: prices1.map((price) => price[1]),
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          // backgroundColor: "rgba(58,128,233,0.1)",
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        {
          label: "crypto2",
          data: prices2.map((price) => price[1]),
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          // backgroundColor: "rgba(58,128,233,0.1)",
          borderColor: "green",
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          data: prices1.map((price) => price[1]),
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgba(58,128,233,0.1)",
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
  }
  
};