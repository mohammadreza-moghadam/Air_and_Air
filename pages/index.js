import React from "react"
import {Box, CssBaseline, Container} from "@mui/material"
import {useRouter} from "next/router";
import Header from "../components/Header";
import ResultCards from "../components/ResultCards";
import Footer from "../components/Footer";
import {displayOnDesktop} from "../themes/commonStyles";
import styles from "../styles/Home.module.css"

export default function Home({token}) {
    return (
    <>
        <CssBaseline />
        <Box className={styles.homeContainer}>
            <Box>
                <Header searchBox={"enable"} token={token}/>
            </Box>
            <Box className={styles.resultsContainer}>
                <Container maxWidth="xl" sx={{ mb: 3 }}>
                    <ResultCards />
                </Container>
            </Box>
            <Box sx={displayOnDesktop}>
                <Footer />
            </Box>
        </Box>
    </>
  )
}

export async function getServerSideProps({req, res}) {
    return {
        props: {token: req.cookies.token || ""}
    }
}