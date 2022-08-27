import React from "react"
import Header from "../components/Header";

const Profile = ({token}) => {
    console.log(token);
    return (
        <>
            <Header token={token}/>
            <h1>Profile</h1>
        </>
    )
}

export async function getServerSideProps({req, res}) {
    return {
        props: {token: req.cookies.token || ""}
    }
}

export default Profile