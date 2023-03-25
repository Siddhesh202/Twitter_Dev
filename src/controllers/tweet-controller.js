import TweetService from "../services/tweet-service.js";
import upload from "../config/file-upload-s3-config.js";
const tweetService = new TweetService();

const singleUploader = upload.single('image');

export const createTweet = async (req, res) => {
    try {
        singleUploader(req, res, async function(err, data){
            if(err){
                return res.status(500).json({
                    error: err
                })
            }

            const payload = {...req.body};
            payload.image = req.file.location;
            const response = await tweetService.create(payload);
            return res.status(201).json({
                success: true,
                message: "Successfully created a new tweet",
                data: response,
                err: {}
            });
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Smething went wrong",
            data: {},
            err: error
        });
    }
}

export const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Successfully fetched a tweet",
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Smething went wrong",
            data: {},
            err: error
        });
    }
}