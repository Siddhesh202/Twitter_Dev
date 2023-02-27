import express from 'express';

import { createTweet } from '../../controllers/tweet-controller.js'
import { toggle } from '../../controllers/like-controller.js'

const router = express.Router();

router.post('/tweets', createTweet);

router.post('/likes', toggle);

export default router;