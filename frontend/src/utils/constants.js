export const FETCH_INVERVAL_MS = 1 * 1000; // original: 10 * 1000

export const CPU_LOAD_WINDOW = 10 * 60 * 1000; // 10 minutes window

export const MAX_DATA_POINTS = CPU_LOAD_WINDOW / FETCH_INVERVAL_MS; // 60 data points

export const CPU_OVERLOAD_TRESHOLD_TIME_MS = 30 * 1000; // 2 minutes original: 2 * 60 * 1000

export const CPU_OVERLOAD_TRESHOLD_COUNT =
  CPU_OVERLOAD_TRESHOLD_TIME_MS / FETCH_INVERVAL_MS + 1; // 13 data points - 12 interval

export const CPU_OVERLOAD_TRESHOLD_VALUE = 100;

export const DATASET_OPTIONS = {
  borderWidth: 2,
  borderColor: "green",
};

export const CHART_OPTIONS = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "CPU Load Average Over Time",
      color: "black",
      font: {
        size: 26,
      },
      padding: {
        top: 30,
        bottom: 30,
      },
    },
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return " " + context.raw + " %";
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return value + "%";
        },
      },
    },
  },
};
