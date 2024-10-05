import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import { ref } from "vue";
import { describe, it, expect, beforeEach, vi } from "vitest";
import CurrentCpuCard from "@/components/CurrentCpuCard.vue";
import { useCpuLoad } from "@/utils/helpers";

vi.mock("@/utils/helpers", () => ({
  useCpuLoad: vi.fn(),
}));

const vuetify = createVuetify();

describe("CurrentCpuCard", () => {
  let currentCpuLoad, underHighLoad;

  beforeEach(() => {
    currentCpuLoad = ref(0);
    underHighLoad = ref(false);
    useCpuLoad.mockReturnValue({ currentCpuLoad, underHighLoad });
  });

  it("should render current CPU load", () => {
    const wrapper = mount(CurrentCpuCard, {
      global: {
        plugins: [vuetify],
      },
    });

    currentCpuLoad.value = 50;
    expect(wrapper.text()).toContain("Not Under High Load");
  });

  it('should display "Under High Load" when underHighLoad is true', async () => {
    const wrapper = mount(CurrentCpuCard, {
      global: {
        plugins: [vuetify],
      },
    });

    underHighLoad.value = true;
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("Under High Load");
    expect(wrapper.find(".text-h6").element.style.color).toBe("red");
  });

  it('should display "Not Under High Load" when underHighLoad is false', async () => {
    const wrapper = mount(CurrentCpuCard, {
      global: {
        plugins: [vuetify],
      },
    });

    underHighLoad.value = false;
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("Not Under High Load");
    expect(wrapper.find(".text-h6").element.style.color).toBe("green");
  });
});
