import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import { describe, it, expect, beforeEach, vi } from "vitest";
import App from "@/App.vue";

const vuetify = createVuetify();
import { useCpuLoad } from "@/utils/helpers";

vi.mock("@/utils/helpers", () => ({
  useCpuLoad: vi.fn(),
}));

describe("App.vue", () => {
  beforeEach(() => {
    useCpuLoad.mockReturnValue({
      startFetchingCpuLoad: vi.fn(),
    });
  });
  it("should render all child components", async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [vuetify],
        stubs: {
          CpuSnackbar: true,
          CpuChart: true,
          CpuTresholdCard: true,
          CurrentCpuCard: true,
        },
      },
    });

    expect(wrapper.findComponent({ name: "CpuSnackbar" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "CpuChart" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "CurrentCpuCard" }).exists()).toBe(
      true
    );
    expect(wrapper.findComponent({ name: "CpuTresholdCard" }).exists()).toBe(
      true
    );
  });
});
