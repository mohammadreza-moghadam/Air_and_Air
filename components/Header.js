import React from "react"
import {Box, Container} from "@mui/material"
// components
import {flexBetweenCenter, dFlex, displayOnDesktop} from "../themes/commonStyles";
import Logo from "./Logo"
import ProfileSettings from "./ProfileSettings";
import MovieSearch from "./MovieSearch"

const Header = ({disable}) => {
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
                    <Box sx={displayOnDesktop}><Logo /></Box>
                    <Box sx={displayOnDesktop}><MovieSearch /></Box>
                    <Box sx={displayOnDesktop}><ProfileSettings /></Box>
                    <Box sx={{display: {xs: "flex", md: "none"}}}><MovieSearch /></Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Header