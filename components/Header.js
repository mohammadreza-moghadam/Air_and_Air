import React, {useContext, useState} from "react"
import DataContext from "../context/DataContext";
import {Box, Container} from "@mui/material"
// components
import {flexBetweenCenter, dFlex, displayOnDesktop} from "../themes/commonStyles";
import Logo from "./Logo"
import ProfileSettings from "./ProfileSettings";
import MovieSearch from "./MovieSearch"
import CategoryLogo from "./CategoryLogo";
import UsersLogo from "./UsersLogo";

const Header = ({token}) => {
    const {pathname} = useContext(DataContext)

    return (
        <Box sx={{
            ...dFlex,
            minHeight: 70,
            borderBottom: "1px solid #ddd"
        }}>
            <Container maxWidth={"xl"}>
                <Box sx={{
                    ...flexBetweenCenter,
                    minHeight: 90,
                    px: 4
                }}>
                    <Box sx={{
                        ...displayOnDesktop,
                        display: "flex",
                        flexDirection: "row"
                    }}
                    >
                        <Logo />
                        <CategoryLogo />
                        {token && <UsersLogo />}
                    </Box>
                    {pathname === "/" ? <Box sx={displayOnDesktop}><MovieSearch /></Box> : ""}
                    <Box sx={displayOnDesktop}><ProfileSettings token={token} /></Box>
                    <Box sx={{display: {xs: "flex", md: "none"}}}><MovieSearch /></Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Header