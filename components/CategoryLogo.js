import React from "react"
import {Box, Typography} from "@mui/material";
import {flexCenter} from "../themes/commonStyles";
import Link from "next/Link";
import {Search} from "@mui/icons-material";
import styles from "../styles/Logo.module.css"

const CategoryLogo = () => {
    return (
        <Box sx={flexCenter}>
            <Link href={"/category"}>
                <a className={styles.icon}>
                    <Search size={50} />
                    <Typography className={styles.users}>دسته بندی</Typography>
                </a>
            </Link>
        </Box>
    )
}

export default CategoryLogo