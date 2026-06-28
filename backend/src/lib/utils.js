import jwt from "jsonwebtoken"
export const generateToken = (userId,res)=>{
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        throw new Error("JWT_SECRET is not configured.");
    }
    const token = jwt.sign({userId}, jwtSecret, {
        expiresIn: "7d",
    });
    const isProduction = process.env.NODE_ENV === "production";
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: isProduction ? "none" : "lax",
        secure: isProduction,
    });
    return token;
};