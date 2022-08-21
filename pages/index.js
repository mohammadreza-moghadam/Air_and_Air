import React from "react"
import {Box, CssBaseline, Container} from "@mui/material"
// components
import Header from "../components/Header";
import OptionsTab from "../components/OptionsTab";
import ResultCards from "../components/ResultCards";
import Footer from "../components/Footer";
import {displayOnDesktop} from "../themes/commonStyles";

export default function Home() {
  return (
    <>
        <CssBaseline />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
            }}
        >
            <Box>
                <Header />
                <OptionsTab />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    height: 100,
                    overflowY: 'scroll',
                }}
            >
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
