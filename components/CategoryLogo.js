import React from "react"
import {Box, Typography} from "@mui/material";
import Link from "next/Link";
import {Category} from "@mui/icons-material";
import styles from "../styles/Logo.module.css"

const CategoryLogo = () => {
    return (
        <Box>
            <Link href={"/category"}>
                <a className={styles.icon}>
                    <Category size={50} />
                    <Box sx={{display: {xs: "none", md: "flex"}}}>
                        <Typography className={styles.users}>دسته بندی</Typography>
                    </Box>
                </a>
            </Link>
        </Box>
    )
}

export default CategoryLogo