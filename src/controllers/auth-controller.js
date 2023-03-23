import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup = async (req, res) => {
    try {
        const user = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            data: user,
            success: true,
            message: "Successfully created a new user",
            err: {}
        });

    } catch (error) {
        // console.log(error);
        return res.status(500).json({
            message: 'Unable to create a user',
            data: {},
            success:  false,
            err: error
        });
    }
}