<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { Line } from "vue-chartjs";
import { useCpuLoad } from "@/utils/helpers";
import { computed } from "vue";
import { cloneDeep } from "lodash";
import { CHART_OPTIONS, DATASET_OPTIONS } from "@/utils/constants";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "CpuChart",
  components: {
    Line,
  },
  setup() {
    const { cpuLoadValueHistory, cpuLoadDateHistory } = useCpuLoad();

    const graphData = computed(() => ({
      labels: cloneDeep(cpuLoadDateHistory.value),
      datasets: [
        {
          data: cloneDeep(cpuLoadValueHistory.value),
          ...DATASET_OPTIONS,
          pointBackgroundColor: cpuLoadValueHistory.value.map((value) =>
            value > 100 ? "red" : "green"
          ),
          pointBorderColor: cpuLoadValueHistory.value.map((value) =>
            value > 100 ? "red" : "green"
          ),
        },
      ],
    }));

    return {
      graphData,
      CHART_OPTIONS,
    };
  },
};
</script>

<template>
  <v-container>
    <Line :data="graphData" :options="CHART_OPTIONS" />
  </v-container>
</template>
