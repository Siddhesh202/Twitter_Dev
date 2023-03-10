import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const toggle = async(req, res) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(200).json({
            success: true,
            message: 'Successfully toggled the like',
            data: response,
            err: {}
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong in the controller',
            data: {},
            err: error
        });
    }
}