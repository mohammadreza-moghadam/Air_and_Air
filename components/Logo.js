import React from "react"
import {Box, Typography} from "@mui/material";
import {flexCenter} from "../themes/commonStyles";
import {pink} from "@mui/material/colors";
import Link from "next/Link";
import {LiveTv} from "@mui/icons-material";

const Logo = () => {
    return (
        <Box sx={flexCenter}>
                <Link href={"/"}>
                    <a style={{display: "flex", alignItems:"center"}}>
                        <LiveTv size={50} />
                        <Typography sx={{
                            ml: 1,
                            color: theme => theme.palette.secondary.main,
                            fontSize: "20px",
                            fontWeight: "bold",
                        }}
                                    component="h3"
                        >
                        فیلم یاب
                        </Typography>
                    </a>
                </Link>
        </Box>
    )
}

export default Logo