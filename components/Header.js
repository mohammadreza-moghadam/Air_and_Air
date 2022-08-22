import React, {useContext} from "react"
import DataContext from "../context/DataContext";
import {Box, Container} from "@mui/material"
// components
import {flexBetweenCenter, dFlex, displayOnDesktop} from "../themes/commonStyles";
import Logo from "./Logo"
import ProfileSettings from "./ProfileSettings";
import MovieSearch from "./MovieSearch"
import UsersLogo from "./UsersLogo";

const Header = () => {
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
                        <UsersLogo/>
                    </Box>
                    {pathname === "/" ? <Box sx={displayOnDesktop}><MovieSearch /></Box> : ""}
                    <Box sx={displayOnDesktop}><ProfileSettings /></Box>
                    <Box sx={{display: {xs: "flex", md: "none"}}}><MovieSearch /></Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Header