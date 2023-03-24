import UserService from "../services/user-service.js";
import bcrypt from "bcrypt";
const userService = new UserService()

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

export const login = async (req, res) => {
    try {
        const token = await userService.signin(req.body);
        
        return res.status(200).json({
            message: "Successfully logged in",
            success: true,
            data: token,
            err: {}
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success:  false,
            err: error
        });
    }
}