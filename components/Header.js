import React, {useContext} from "react"
import DataContext from "../context/DataContext";
import {Box, Container} from "@mui/material"
import {flexBetweenCenter, dFlex, displayOnDesktop} from "../themes/commonStyles";
import Logo from "./Logo"
import ProfileSettings from "./ProfileSettings";
import MovieSearch from "./MovieSearch"
import CategoryLogo from "./CategoryLogo";
import UsersLogo from "./UsersLogo";

const Header = ({token}) => {
    const {pathname} = useContext(DataContext)

    return (
        <Box sx={{...dFlex, minHeight: 70, borderBottom: "1px solid #ddd"}}>
            <Container maxWidth={"xl"}>
                <Box sx={{...flexBetweenCenter, minHeight: 90, px: 4}}>
                    {pathname === "/" ? <Box sx={{display: {xs: "flex", md: "none"}, width: "200px", marginRight: "10px"}}><MovieSearch /></Box> : ""}
                    <Box sx={{...displayOnDesktop, display: "flex", flexDirection: "row"}}>
                        <Box sx={pathname === "/" ? {display: {xs: "none", md: "flex"}} : ""}><Logo /></Box>
                        <Box><CategoryLogo /></Box>
                        {token && <Box><UsersLogo /></Box>}
                    </Box>
                    {pathname === "/" ? <Box sx={{ display: { xs: 'none', md: 'block' } }}><MovieSearch /></Box> : ""}
                    <Box><ProfileSettings token={token} /></Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Header