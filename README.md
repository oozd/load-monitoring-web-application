# load-monitoring-web-application

This web application communicates with a local back-end service at 10-second intervals to retrieve CPU load average information. <br /> It displays the CPU load data for the last 10 minutes on a graph and shows the current CPU load on a card. <br /> The application also indicates the start and end times of high average load periods and provides alerts for high load conditions or recovery from high load.
Thresholds for high load and recovery:

- A CPU is considered under high average load when it has exceeded 1 for 2 minutes or more.
- A CPU is considered recovered from high average load when it drops below 1 for 2 minutes or more.


## How to run

Install dependencies in both the backend and frontend directories using:
`npm install`

### Start the backend server by running:

`node server.js`

### Start the frontend by running:

`npm run serve`

## Technical Details

The application is developed and tested on MacOS and Chrome.
Run frontend tests by **cd frontend** and then **npm run test**
Run backend tests by **cd backend** and then **npm run test** backend should not be running while running tests.

### Backend

The backend is built using Node.js.
Jest is used for backend testing.

### Frontend

The frontend is developed with **Vue.js 3** and **Vuetify**. <br /> <br />
**Chart.js** is utilized for graphing the historic CPU load data. <br /> <br />
**VDataTable** is used for displaying the Threshold information. Where users can see how many times high load and recovery states happened. <br /> <br />
**VSnackbar** is used for alerting the user kindly, but window.alert is also used to trigger native alerting logic. (Tested on the CpuSnackbar.spec.js) <br /> <br />
**Vitest** is used for frontend testing, including: <br /> <br />
Component tests to verify the basic functionality of components. <br /> <br />
Unit tests to test **alert logic**, **CPU data history logic** and **threshold logic** etc. <br /> <br />
To maintain a simple UI, the application does not display how many times the computer was under high load or recovered; users can see this information in the data table. <br /> <br />
Data points exceeding the threshold value are highlighted in red. <br /> <br/>
Divided the app into 4 components, one for the chart, one for displaying current CPU, one for displaying threshold information and one for snackbar and alerting logic. <br/> <br/>
Used constants to apply interval, threshold, etc. logics so that by altering constants.ts file developers can easily test the logic in a quicker way. <br/>

## Improvement Points

The UI could be even simpler. Chart.js has a feature called segments that can be used to paint line segments, allowing for a more efficient use of space by eliminating the data table and painting high load lines in red instead of green. <br /> <br />
I returned the time information from the backend alongside the CPU information to ensure that delays do not affect the (load - time) information pair. However, if the time information is sensitive, this may still not be an ideal solution for production. <br /> <br />
When there is a problem on the backend communication, frontend does nothing but waits. We could notify the user in such cases that the connection has lost. <br /> <br />
Only time is used instead of date since the cpu time frame was small enough but no internationalization is applied. This is a must for production <br /> <br />
No mobile version is provided. Not tested with different devices and OS. <br /> <br />
Not needed with the current specs, but if the dataset was larger, we might think clearing the dataset or keep the relevant data points only after they are mounted. <br /> <br />
