<script>
import { ref, watch } from "vue";
import { useCpuLoad } from "@/utils/helpers";
import { FETCH_INVERVAL_MS } from "@/utils/constants";

export default {
  name: "CpuSnackbar",
  setup() {
    const { underHighLoad } = useCpuLoad();
    const snackbar = ref(false);
    const snackbarText = ref("");
    const snackbarColor = ref("");

    watch(underHighLoad, (newVal) => {
      if (newVal) {
        snackbarText.value = "Your computer is under high load!";
        snackbarColor.value = "red";
      } else {
        snackbarText.value = "Your computer has recovered from high load!";
        snackbarColor.value = "green";
      }
      window.alert(snackbarText.value);
      snackbar.value = true;
    });

    return {
      snackbar,
      snackbarText,
      snackbarColor,
      FETCH_INVERVAL_MS,
    };
  },
};
</script>

<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="FETCH_INVERVAL_MS"
    :color="snackbarColor"
    top
  >
    {{ snackbarText }}
  </v-snackbar>
</template>
