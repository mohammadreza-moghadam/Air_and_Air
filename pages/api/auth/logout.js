import {serialize} from "cookie";

export default async function (req, res) {
    const {cookies} = req
    const jwt = cookies.token

    if (!jwt) {
        res.json({message: "You are already logged in"})
    } else {
        const serialized = serialize("token", null, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: -1,
            path: "/"
        })

        res.setHeader(
            "Set-Cookie",
            serialized
        )
        res.status(200).json({message: "successfully logged out!"})
    }
}