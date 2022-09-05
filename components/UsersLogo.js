import React from "react"
import {Box, Typography} from "@mui/material";
import {flexCenter} from "../themes/commonStyles";
import Link from "next/Link";
import {Group} from "@mui/icons-material";
import styles from "../styles/Logo.module.css"

const UsersLogo = () => {
    return (
        <Box sx={flexCenter}>
            <Link href={"/users"}>
                <a className={styles.icon}>
                    <Group size={50} />
                    <Box sx={{display: {xs: "none", md: "flex"}}}>
                        <Typography className={styles.users}>کاربران</Typography>
                    </Box>
                </a>
            </Link>
        </Box>
    )
}

export default UsersLogo