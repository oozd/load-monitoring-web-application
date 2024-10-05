const express = require('express');
const os = require('node:os');

const app = express();
app.use(express.json());

app.get('/api/cpu-load-average', (_req, res) => {
  const cpuCount = os.cpus().length;
  const load = ((os.loadavg()[0] / cpuCount) * 100).toFixed(2);
  const date = new Date().toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  res.json({ load, date });
});


app.listen(3000);

module.exports = app;