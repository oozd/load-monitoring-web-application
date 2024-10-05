export async function fetchCpuLoadAverageAndDate() {
  try {
    // const response = await fetch("api/cpu-load-average");
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }

    /* Mock the data to serve on githubio */
    const date = new Date().toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const load = Math.floor(Math.random() * 251);

    return { load, date };
    /* Mock the data to serve on githubio */

    //return { load: data.load, date: data.date };
  } catch (error) {
    console.error("Error fetching CPU load average:", error);
    throw error;
  }
}
