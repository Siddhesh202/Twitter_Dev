import express from 'express'
const app = express();
import {connect} from './config/database.js'

import TweetService from './services/tweet-service.js';
app.listen(5000,async () => {
    console.log(`Server is up and running on PORT : 5000`);
    await connect();
    console.log("Mongo db connected");

    const service = new TweetService();
    const tweet = await service.create({
        content: 'Done with #refactor ?'
    })
    console.log(tweet);
})