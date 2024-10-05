import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import { ref } from "vue";
import { describe, it, expect, beforeEach, vi } from "vitest";
import CpuChart from "@/components/CpuChart.vue";
import { useCpuLoad } from "@/utils/helpers";

vi.mock("@/utils/helpers", () => ({
  useCpuLoad: vi.fn(),
}));

const vuetify = createVuetify();

describe("CpuChart", () => {
  let cpuLoadValueHistory, cpuLoadDateHistory;

  beforeEach(() => {
    cpuLoadValueHistory = ref([]);
    cpuLoadDateHistory = ref([]);
    useCpuLoad.mockReturnValue({ cpuLoadValueHistory, cpuLoadDateHistory });
  });

  it("should render the line graph with correct data", async () => {
    const wrapper = mount(CpuChart, {
      global: {
        plugins: [vuetify],
        stubs: {
          Line: true,
        },
      },
    });

    cpuLoadValueHistory.value = [50, 75, 120];
    cpuLoadDateHistory.value = ["10:00", "10:05", "10:10"];

    await wrapper.vm.$nextTick();

    const chartData = wrapper.vm.graphData;

    expect(chartData.labels).toEqual(["10:00", "10:05", "10:10"]);
    expect(chartData.datasets[0].data).toEqual([50, 75, 120]);
    expect(chartData.datasets[0].pointBackgroundColor).toEqual([
      "green",
      "green",
      "red",
    ]);
  });
});
