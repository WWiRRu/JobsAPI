import {StatusCodes} from "http-status-codes";
import * as authService from "./authService.js";
import { comparePwd, hashPwd } from "../../utils/password.js";
import {createToken} from "../../utils/jsonWebToken.js";
import {UnauthorizedError} from "../../errors/index.js";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Controller for login endpoint
export const login = async (req, res) => {
    const { email, password } = req.body;
    // Verify for all inputs are provided
    if(!password) return res.status(StatusCodes.BAD_REQUEST).json({error: "Password is required"});
    if(!email) return res.status(StatusCodes.BAD_REQUEST).json({error: "Email is required"});
    if(emailRegex.test(email) === false) return res.status(StatusCodes.BAD_REQUEST).json({error: "Invalid email format"});
    if(password.length < 8) return res.status(StatusCodes.BAD_REQUEST).json({error: "Password must be at least 8 characters long"});

    const user = await authService.login(email);
    if(!user) throw new UnauthorizedError("Invalid creditentials");
    if(!await comparePwd(user.password, password)) throw new UnauthorizedError("Invalid creditentials");

    const token = createToken({ id: user.id });
    res.cookie("authToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        signed: true,
        expires: new Date(Date.now() + 24*60*60*1000),
    });
    res.status(StatusCodes.OK).json({token, user: { userId: user.id }});
}

// Controller for dashboard endpoint
export const register = async (req, res) => {
    const { name, email, password  } = req.body;
    //Verify for all inputs are provided
    if(!password)return res.status(StatusCodes.BAD_REQUEST).json({error: "Password is required"});
    if(!email) return res.status(StatusCodes.BAD_REQUEST).json({error: "Email is required"});
    if(password.length < 8) return res.status(StatusCodes.BAD_REQUEST).json({error: "Password must be at least 8 characters long"});
    if(!name) return res.status(StatusCodes.BAD_REQUEST).json({error: "Name is required"});
    if(emailRegex.test(email) === false) return res.status(StatusCodes.BAD_REQUEST).json({error: "Invalid email format"});
    try {
        const hashedPassword = await hashPwd(password);

        let data = {
            name,
            email,
            password: hashedPassword
        };

        const user = await authService.create(data);

        const token = createToken({ id: user.id });
        console.log(token)
        res.status(StatusCodes.OK).json({user});
    }catch (err){
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: "An error occurred while registering user."});
    }
}
