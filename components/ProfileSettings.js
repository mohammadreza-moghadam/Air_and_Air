import React, {useState} from "react";
import {Box, Typography, Modal} from "@mui/material";
import Link from "next/Link"
import styles from "../styles/ProfileSettings.module.css"
import {Login, Settings} from "@mui/icons-material";
import axios from "axios";

const ProfileSettings = ({token}) => {
    const [myToken, setMyToken] = useState(!!token)

    const handleLogout =async () => {
        await axios.get("/api/auth/logout")
        setMyToken(false)
    }

    return (
            !myToken ? (
                <Box>
                    <Link href={"/login"}>
                        <a className={styles.login}>
                            <Box sx={{display: {sm: "none", md: "flex"}}}>
                                <Typography sx={{ml: 1, mr: 0.5, color: theme => theme.palette.secondary.main, fontSize: "15px", fontWeight: "bold",}} component="h3">
                                    ورود / ثبت نام
                                </Typography>
                            </Box>
                            <Login size={50} />
                        </a>
                    </Link>
                </Box>
            ) : (
                <Box>
                    <Link href={"/profile"}>
                        <a className={styles.profile}>
                            <Box sx={{display: {xs: "none", md: "flex"}}}>
                                <Typography sx={{ml: 1, mr: 0.5, color: theme => theme.palette.secondary.main, fontSize: "15px", fontWeight: "bold",}} component="h3">
                                    حساب کاربری
                                </Typography>
                            </Box>
                            <Settings size={50}/>
                        </a>
                    </Link>
                </Box>
            )
    );
};

export default ProfileSettings;