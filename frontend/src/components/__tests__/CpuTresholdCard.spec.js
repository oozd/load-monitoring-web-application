import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import { ref } from "vue";
import { describe, it, expect, beforeEach, vi } from "vitest";
import CpuTresholdCard from "@/components/CpuTresholdCard.vue";
import { useCpuLoad } from "@/utils/helpers";

vi.mock("@/utils/helpers", () => ({
  useCpuLoad: vi.fn(),
}));

const vuetify = createVuetify();

describe("CpuTresholdCard", () => {
  let cpuTresholdHistory;

  beforeEach(() => {
    cpuTresholdHistory = ref([]);
    useCpuLoad.mockReturnValue({ cpuTresholdHistory });
  });

  it("it should render the threshold information table", async () => {
    const wrapper = mount(CpuTresholdCard, {
      global: {
        plugins: [vuetify],
      },
    });

    cpuTresholdHistory.value = [
      { start: "10:00", end: "10:30" },
      { start: "11:00", end: null },
    ];

    await wrapper.vm.$nextTick();

    expect(wrapper.findAll("tbody tr")).toHaveLength(2);
    expect(wrapper.text()).toContain("10:00");
    expect(wrapper.text()).toContain("10:30");
    expect(wrapper.text()).toContain("11:00");
    expect(wrapper.text()).toContain("In Progress");
  });

  it('should display "In Progress" when end is null', async () => {
    const wrapper = mount(CpuTresholdCard, {
      global: {
        plugins: [vuetify],
      },
    });

    cpuTresholdHistory.value = [{ start: "12:00", end: null }];

    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("In Progress");
  });
});
