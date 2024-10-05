<script>
import CpuChart from "@/components/CpuChart.vue";
import CpuTresholdCard from "@/components/CpuTresholdCard.vue";
import CurrentCpuCard from "@/components/CurrentCpuCard.vue";
import CpuSnackbar from "@/components/CpuSnackbar.vue";
import { useCpuLoad } from "@/utils/helpers";
import { onMounted } from "vue";

export default {
  name: "App",
  components: {
    CpuSnackbar,
    CpuChart,
    CpuTresholdCard,
    CurrentCpuCard,
  },
  setup() {
    const { startFetchingCpuLoad } = useCpuLoad();

    onMounted(() => {
      startFetchingCpuLoad();
    });
  },
};
</script>

<template>
  <cpu-snackbar />
  <v-row>
    <cpu-chart />
  </v-row>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" class="d-flex">
        <v-col cols="4">
          <CurrentCpuCard />
        </v-col>
        <v-col></v-col>
        <v-col cols="5">
          <CpuTresholdCard />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
