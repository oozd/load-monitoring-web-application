import { ref } from "vue";
import { fetchCpuLoadAverageAndDate } from "../services/cpuLoadAverageService";
import {
  FETCH_INVERVAL_MS,
  MAX_DATA_POINTS,
  CPU_OVERLOAD_TRESHOLD_COUNT,
  CPU_OVERLOAD_TRESHOLD_VALUE,
} from "./constants";

const currentCpuLoad = ref(0);
const cpuLoadValueHistory = ref([]);
const cpuLoadDateHistory = ref([]);
const cpuTresholdHistory = ref([]);
const underHighLoad = ref(false);

let aboveTresholdCount = 0;
let belowTresholdCount = 0;

export async function fetchCpuLoad() {
  try {
    const { load, date } = await fetchCpuLoadAverageAndDate();
    currentCpuLoad.value = load;
    updateCpuHistoryData(load, date);
    updateCpuTresholdData(load, date);
  } catch (error) {
    console.error("Error fetching CPU average load:", error);
  }
}

function updateCpuHistoryData(load, date) {
  if (cpuLoadValueHistory.value.length >= MAX_DATA_POINTS) {
    cpuLoadValueHistory.value.shift();
    cpuLoadDateHistory.value.shift();
  }
  cpuLoadValueHistory.value.push(load);
  cpuLoadDateHistory.value.push(date);
}

function updateCpuTresholdData(load) {
  if (load > CPU_OVERLOAD_TRESHOLD_VALUE) {
    aboveTresholdCount++;
    belowTresholdCount = 0;
    if (
      aboveTresholdCount === CPU_OVERLOAD_TRESHOLD_COUNT &&
      !underHighLoad.value
    ) {
      const startTime = cpuLoadDateHistory.value.at(
        -CPU_OVERLOAD_TRESHOLD_COUNT
      );
      cpuTresholdHistory.value.push({ start: startTime, end: "" });
      underHighLoad.value = true;
    }
  } else {
    belowTresholdCount++;
    aboveTresholdCount = 0;
    if (belowTresholdCount === CPU_OVERLOAD_TRESHOLD_COUNT) {
      const endTime = cpuLoadDateHistory.value.at(-1);
      cpuTresholdHistory.value.at(-1).end = endTime;
      underHighLoad.value = false;
    }
  }
}

export const startFetchingCpuLoad = () => {
  fetchCpuLoad();
  setInterval(fetchCpuLoad, FETCH_INVERVAL_MS);
};

// for testing purposes
function resetThresholdCounters() {
  aboveTresholdCount = 0;
  belowTresholdCount = 0;
}

export const useCpuLoad = () => ({
  currentCpuLoad,
  underHighLoad,
  cpuLoadValueHistory,
  cpuLoadDateHistory,
  cpuTresholdHistory,
  startFetchingCpuLoad,
  resetThresholdCounters,
});
