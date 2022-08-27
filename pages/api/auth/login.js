import {sign} from "jsonwebtoken"
import {serialize} from "cookie"

export default async function (req, res) {
    const secret = process.env.SECRET
    const {username, email, password} = req.body

    // check in the db if the user exists

    if (username === "admin" && email==="admin" && password === "admin") {
        const token = sign(
            {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,  // valid for30 days
            username: username,
            email: email
            },
            secret
        )

        const serialized = serialize("token", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/"
        })

        res.setHeader("Set-Cookie", serialized)
        res.status(200).json({message: "success!"})
    } else {
        res.status(401).json({message: "invalid credentials"})
    }
}