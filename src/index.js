const express = require('express');
const app = express();
const connect = require('./config/database');

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(5000,async () => {
    console.log(`Server is up and running on PORT : 5000`);
    await connect();
    console.log("Mongo db connected");

    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.getAll(0,5);
    // console.log(tweet[0].contentWithEmail);
})