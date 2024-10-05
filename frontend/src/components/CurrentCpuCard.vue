<script>
import { useCpuLoad } from "@/utils/helpers";
import { computed } from "vue";

export default {
  name: "CurrentCpuCard",
  setup() {
    const { currentCpuLoad, underHighLoad } = useCpuLoad();

    const highLoadText = computed(() =>
      underHighLoad.value ? "Under High Load" : "Not Under High Load"
    );

    return {
      currentCpuLoad,
      underHighLoad,
      highLoadText,
    };
  },
};
</script>

<template>
  <v-card height="250px" variant="outlined">
    <v-card-title class="text-center">
      <span>Current CPU Load</span>
    </v-card-title>
    <v-card-text class="text-center mt-3">
      <div class="text-h4">{{ currentCpuLoad }} %</div>
    </v-card-text>
    <v-card-text class="text-center">
      <div class="text-h6" :style="{ color: underHighLoad ? 'red' : 'green' }">
        {{ highLoadText }}
      </div>
    </v-card-text>
  </v-card>
</template>
