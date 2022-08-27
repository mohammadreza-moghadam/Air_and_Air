import React, {useState} from "react";
import {Box, Typography, Modal} from "@mui/material";
import Link from "next/Link"
import {flexCenter} from "../themes/commonStyles";
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
                <Box sx={flexCenter}>
                    <Link href={"/login"}>
                        <a className={styles.login}>
                            <Typography sx={{
                                ml: 1,
                                mr: 0.5,
                                color: theme => theme.palette.secondary.main,
                                fontSize: "15px",
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
            ) : (
                <Box sx={flexCenter}>
                    <Link href={"/profile"}>
                        <a className={styles.profile}>
                            <Typography sx={{
                                ml: 1,
                                mr: 0.5,
                                color: theme => theme.palette.secondary.main,
                                fontSize: "15px",
                                fontWeight: "bold",
                            }}
                                        component="h3"
                            >
                                حساب کاربری
                            </Typography>
                            <Settings size={50}/>
                        </a>
                    </Link>
                </Box>
            )
    );
};

export default ProfileSettings;