<script>
import { useCpuLoad } from "@/utils/helpers";

export default {
  name: "CpuTresholdCard",
  setup() {
    const { cpuTresholdHistory } = useCpuLoad();

    return {
      cpuTresholdHistory,
    };
  },
};
</script>

<template>
  <v-card variant="outlined" max-height="250px" min-height="250px">
    <v-card-title class="text-center">
      <span>High Load History</span>
    </v-card-title>

    <v-card-text>
      <div class="table-wrapper">
        <v-data-table
          :items="cpuTresholdHistory"
          fixed-header
          hide-default-footer
          dense
          items-per-page="-1"
        >
          <template v-slot:[`item.start`]="{ item }">
            {{ item.start }}
          </template>

          <template v-slot:[`item.end`]="{ item }">
            {{ item.end || "In Progress" }}
          </template>
        </v-data-table>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.table-wrapper {
  max-height: 200px;
  overflow-y: auto;
}
</style>
