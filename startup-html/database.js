const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const groupCollection = db.collection('group');
const userCollection = db.collection('user');
// const hourDayCollection = db.collection('hourDay');
// const timeCollection = db.collection('time');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  console.log("connected to mongo")
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
    return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}
  
async function createUser(email, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    await userCollection.insertOne(user);
    return user;
}
  
async function addGroup(group){
    console.log("addGroup before");
    const result = await groupCollection.insertOne(group);
    console.log("addGroup after");
    return result;
}
// async function addHourDay(hourDay){
//     console.log("addHourDay before");
//     const result = await hourDayCollection.insertOne(hourDay);
//     console.log("addHourDay after");
//     return result;
// }
// async function addTime(time){
//     console.log("addTime before")
//     console.log(time)
//     const result = await timeCollection.insertOne(time);
//     console.log("addTime after")
//     return result;
// }

async function getGroup(code) {
    console.log("getGroup before")
    const query = {"code": code };
    
    const options = {
        sort: { timeStamp: -1 },
        limit: 1,
    };
    console.log(code)
    const cursor = await groupCollection.find();
    console.log("getGroup after")
    //console.log(cursor)
    return cursor.toArray();
    
}

// async function getHourDay(user){
//     console.log("getHourDay before")
//     console.log(user)
//     const query = {'id': '123', 'user': user};
//     const options = {
//         sort: { timeStamp: -1 },
//         limit: 1,
//     };
//     const cursor =  await hourDayCollection.findOne(query);
//     console.log("getHourDay after")
//     return cursor;   
// }

//  async function getTime(user){
//     console.log("getTime before")
//     console.log(user)
//     const query = {'id': '123', 'user': user};
//     const options = {
//         sort: { timeStamp: -1 },
//         limit: 1,
//     };
//     const cursor = await timeCollection.findOne(query);
//     console.log("getTime after")
//     return cursor;
// }
/*
async function addScore(score) {
  const result = await scoreCollection.insertOne(score);
  return result;
}

function getHighScores() {
  const query = { score: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}
*/
module.exports = { addGroup, getGroup, getUser, getUserByToken, createUser, };