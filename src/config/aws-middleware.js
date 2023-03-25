import upload from "../config/file-upload-s3-config.js";
const singleUploader = upload.single('image');

export const awsMiddleware = (req, res, next) => {
    singleUploader(req, res, async (err, data) => {
        if(err){
            return res.status(500).json({
                success: false,
                message: "Smething went wrong while uploading the image",
                data: {},
                err: error
            });
        }

        req.body.image = req.file.location;
        next();
    })
}