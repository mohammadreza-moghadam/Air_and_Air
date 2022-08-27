import {NextResponse} from "next/server";
import {verify} from "jsonwebtoken"
import qs from "query-string"

const secret = process.env.SECRET

export default function middleware(req) {
    const {pathname, origin} = req.nextUrl
    let verify = req.cookies.get("token")
    const url = req.url

    if (url.includes("/profile") && !verify) {
        NextResponse.redirect(`${origin}/login`)

        try {
            verify(verify, secret)
            return NextResponse.next()
        } catch (err) {
            return NextResponse.redirect(`${origin}/login`)
        }
    }

    if (url.includes("/users") && !verify) {
        NextResponse.redirect(`${origin}/login`)

        try {
            verify(verify, secret)
            return NextResponse.next()
        } catch (err) {
            return NextResponse.redirect(`${origin}/login`)
        }
    }

    return NextResponse.next()
}