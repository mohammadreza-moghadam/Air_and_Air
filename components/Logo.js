import React from "react"
import {Box, Typography} from "@mui/material";
import {flexCenter} from "../themes/commonStyles";
import Link from "next/Link";
import {LiveTv} from "@mui/icons-material";
import  styles from "../styles/Logo.module.css"

const Logo = () => {
    return (
        <Box sx={flexCenter}>
                <Link href={"/"}>
                    <a className={styles.icon}>
                        <LiveTv size={50} />
                        <Typography className={styles.filmyab}>فیلم یاب</Typography>
                    </a>
                </Link>
        </Box>
    )
}

export default Logo