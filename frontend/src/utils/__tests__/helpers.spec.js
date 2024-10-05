import { fetchCpuLoadAverageAndDate } from "../../services/cpuLoadAverageService";
import { useCpuLoad, fetchCpuLoad } from "../helpers";
import {
  CPU_OVERLOAD_TRESHOLD_COUNT,
  CPU_OVERLOAD_TRESHOLD_VALUE,
} from "../constants";
import { vi, beforeEach, it, expect, describe } from "vitest";

vi.mock("../../services/cpuLoadAverageService", () => ({
  fetchCpuLoadAverageAndDate: vi.fn(),
}));

describe("useCpuLoad", () => {
  let cpuLoad;

  beforeEach(() => {
    vi.clearAllMocks();
    cpuLoad = useCpuLoad();
    cpuLoad.currentCpuLoad.value = 0;
    cpuLoad.cpuLoadValueHistory.value = [];
    cpuLoad.cpuLoadDateHistory.value = [];
    cpuLoad.underHighLoad.value = false;
    cpuLoad.cpuTresholdHistory.value = [];
    cpuLoad.resetThresholdCounters();
  });

  it("should fetch CPU load and updates currentCpuLoad and history", async () => {
    fetchCpuLoadAverageAndDate.mockResolvedValueOnce({
      load: 75,
      date: "20:00:00",
    });
    await fetchCpuLoad();
    expect(cpuLoad.currentCpuLoad.value).toBe(75);
    expect(cpuLoad.cpuLoadValueHistory.value).toEqual([75]);
    expect(cpuLoad.cpuLoadDateHistory.value).toEqual(["20:00:00"]);
  });

  it("should update history with subsequent CPU load fetches", async () => {
    fetchCpuLoadAverageAndDate.mockResolvedValueOnce({
      load: 75,
      date: "20:00:00",
    });
    await fetchCpuLoad();

    fetchCpuLoadAverageAndDate.mockResolvedValueOnce({
      load: 80,
      date: "20:00:10",
    });

    await fetchCpuLoad();

    expect(cpuLoad.currentCpuLoad.value).toBe(80);
    expect(cpuLoad.cpuLoadValueHistory.value).toEqual([75, 80]);
    expect(cpuLoad.cpuLoadDateHistory.value).toEqual(["20:00:00", "20:00:10"]);
  });

  it("should update underHighLoad when current cpu level is above treshold for CPU_OVERLOAD_TRESHOLD_COUNT times", async () => {
    for (let i = 0; i < CPU_OVERLOAD_TRESHOLD_COUNT; i++) {
      fetchCpuLoadAverageAndDate.mockResolvedValueOnce({
        load: CPU_OVERLOAD_TRESHOLD_VALUE + 1,
        date: "",
      });

      await fetchCpuLoad();
    }

    expect(cpuLoad.currentCpuLoad.value).toBe(CPU_OVERLOAD_TRESHOLD_VALUE + 1);
    expect(cpuLoad.underHighLoad.value).toBe(true);
  });

  it("should recover from high load state after getting lower values for CPU_OVERLOAD_TRESHOLD_COUNT times and updates cpuTresholdHistory correctly ", async () => {
    for (let i = 0; i < CPU_OVERLOAD_TRESHOLD_COUNT; i++) {
      fetchCpuLoadAverageAndDate.mockResolvedValueOnce({
        load: CPU_OVERLOAD_TRESHOLD_VALUE + 1,
        date: "20:00:00",
      });
      await fetchCpuLoad();
    }
    expect(cpuLoad.underHighLoad.value).toBe(true);

    for (let i = 0; i < CPU_OVERLOAD_TRESHOLD_COUNT - 1; i++) {
      fetchCpuLoadAverageAndDate.mockResolvedValueOnce({
        load: CPU_OVERLOAD_TRESHOLD_VALUE - 1,
        date: "",
      });
      await fetchCpuLoad();
      expect(cpuLoad.underHighLoad.value).toBe(true);
    }

    // last call should recover it

    fetchCpuLoadAverageAndDate.mockResolvedValueOnce({
      load: CPU_OVERLOAD_TRESHOLD_VALUE - 1,
      date: "21:00:00",
    });
    await fetchCpuLoad();
    expect(cpuLoad.underHighLoad.value).toBe(false);

    expect(cpuLoad.cpuTresholdHistory.value).toStrictEqual([
      { start: "20:00:00", end: "21:00:00" },
    ]);
  });
});
