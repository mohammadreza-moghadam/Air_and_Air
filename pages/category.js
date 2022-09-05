import React from "react"
import Header from "../components/Header";
import OptionsTab from "../components/OptionsTab";

const Category = ({token}) => {
    return (
        <>
            <Header token={token} />
            <OptionsTab />
        </>
    )
}

export async function getServerSideProps({req, res}) {
    return {
        props: {token: req.cookies.token || ""}
    }
}

export default Category