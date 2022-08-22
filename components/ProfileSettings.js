import {Box, Typography} from "@mui/material";
import Link from "next/Link"
import {flexCenter} from "../themes/commonStyles";
import styles from "../styles/ProfileSettings.module.css"
import {Login} from "@mui/icons-material";
import React from "react";

const ProfileSettings = () => {
    return (
        <Box sx={flexCenter}>
            <Link href={"/login"}>
                <a className={styles.login}>
                    <Typography sx={{
                        ml: 1,
                        mr: 0.5,
                        color: theme => theme.palette.secondary.main,
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}
                                component="h3"
                    >
                         ورود / ثبت نام
                    </Typography>
                    <Login size={50} />
                </a>
            </Link>
        </Box>
    );
};

export default ProfileSettings;