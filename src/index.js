const express = require('express');
const app = express();
const connect = require('./config/database');

const TweetService = require('./services/tweet-service');

app.listen(5000,async () => {
    console.log(`Server is up and running on PORT : 5000`);
    await connect();
    console.log("Mongo db connected");

    
})