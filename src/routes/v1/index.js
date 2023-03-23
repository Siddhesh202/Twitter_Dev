import express from 'express';

import { createTweet, getTweet } from '../../controllers/tweet-controller.js'
import { toggle } from '../../controllers/like-controller.js'
import { createComment } from '../../controllers/comment-controller.js'
import { signup } from '../../controllers/auth-controller.js'

const router = express.Router();

router.post('/tweets', createTweet);
router.get('/tweets/:id', getTweet);

router.post('/likes/toggle', toggle);

router.post('/comments', createComment);

router.post('/signup', signup)

export default router;