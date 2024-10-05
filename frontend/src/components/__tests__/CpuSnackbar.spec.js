import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import { ref } from "vue";
import { describe, it, expect, beforeEach, vi, beforeAll } from "vitest";
import CpuSnackbar from "@/components/CpuSnackbar.vue";
import { useCpuLoad } from "@/utils/helpers";

vi.mock("@/utils/helpers", () => ({
  useCpuLoad: vi.fn(),
}));

const vuetify = createVuetify();

describe("CpuSnackbar", () => {
  let underHighLoad;

  beforeAll(() => {
    window.alert = vi.fn();
  });

  beforeEach(() => {
    underHighLoad = ref(false);
    useCpuLoad.mockReturnValue({ underHighLoad });
    vi.clearAllMocks();
  });

  it("should display the snackbar with high load message when underHighLoad is true", async () => {
    const wrapper = mount(CpuSnackbar, {
      global: {
        plugins: [vuetify],
      },
    });

    underHighLoad.value = true;
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.snackbar).toBe(true);
    expect(wrapper.vm.snackbarText).toBe("Your computer is under high load!");
    expect(wrapper.vm.snackbarColor).toBe("red");
  });

  it("should display the snackbar with recovery message when underHighLoad is false", async () => {
    const wrapper = mount(CpuSnackbar, {
      global: {
        plugins: [vuetify],
      },
    });

    underHighLoad.value = true;
    await wrapper.vm.$nextTick();

    underHighLoad.value = false;
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.snackbar).toBe(true);
    expect(wrapper.vm.snackbarText).toBe(
      "Your computer has recovered from high load!"
    );
    expect(wrapper.vm.snackbarColor).toBe("green");
  });

  it("should not show the snackbar if there is no change to underHighLoad", async () => {
    const wrapper = mount(CpuSnackbar, {
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.vm.snackbar).toBe(false);
  });

  it("should call window.alert with the correct message when underHighLoad changes", async () => {
    const wrapper = mount(CpuSnackbar, {
      global: {
        plugins: [vuetify],
      },
    });

    underHighLoad.value = true;
    await wrapper.vm.$nextTick();
    expect(window.alert).toHaveBeenCalledWith(
      "Your computer is under high load!"
    );

    underHighLoad.value = false;
    await wrapper.vm.$nextTick();
    expect(window.alert).toHaveBeenCalledWith(
      "Your computer has recovered from high load!"
    );
  });
});
