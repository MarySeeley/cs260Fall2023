
const express = require('express');
const app = express();
const DB = require('./database.js')

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Get Group
apiRouter.get('/group/:parameter', async(req, res) => {
    const user = req.params.parameter;
    const group = await DB.getGroup(user);
    console.log("requested group fetch")
    res.status(202).send(group);
});

// Send Group
apiRouter.post('/group', async(req, res) => {
  DB.addGroup(req.body);
  const group = await DB.getGroup();  
  res.send(group);
});

// Get Hour Day
apiRouter.get('/hourDay/:parameter', async(req, res) => {
    const user = req.params.parameter;
    const hourDay = await DB.getHourDay(user);
    res.send(hourDay);
});
  
  // Send HourDay
apiRouter.post('/hourDay', async(req, res) => {
//time = updateScores(req.body, time);
    DB.addHourDay(req.body);
    const hourDay = await DB.getHourDay();
    res.send(hourDay);
});

// Get time
apiRouter.get('/time/:parameter', async(req, res) => {
    const user = req.params.parameter;
    const time = await DB.getTime(user);
    res.send(time);
});
  
  // Send time
apiRouter.post('/time', async(req, res) => {
    //time = updateScores(req.body, time);
    DB.addTime(req.body);
    const time = await DB.getTime();
    res.send(time);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
/*
let scores = [];
function updateScores(newScore, scores) {
  let found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.score > prevScore.score) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    scores.push(newScore);
  }

  if (scores.length > 10) {
    scores.length = 10;
  }

  return scores;
*/