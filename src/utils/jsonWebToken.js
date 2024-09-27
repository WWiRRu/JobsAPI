import jwt from "jsonwebtoken";

export const createToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET);
}
export const comparePwd = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}