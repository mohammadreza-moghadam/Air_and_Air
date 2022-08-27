import React, {useEffect, useState} from 'react';
import {Box, Container, Tab, Tabs, tabsClasses} from '@mui/material';
import {TabContext, TabList, TabPanel} from "@mui/lab"
import styles from "../styles/OptionsTab.module.css"
import axios from "axios";

const OptionsTab = () => {
    const [trendingValue, setTrendingValue] = useState("streaming");
    const [freeToWatch, setFreeToWatch] = useState("movies")

    const handleTrending = (event, newValue) => {
        setTrendingValue(newValue);
    };

    const handleFreeToWatch = (event, newValue) => {
        setFreeToWatch(newValue)
    }

    useEffect(() => {
        if(trendingValue === "streaming") {
            axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
                .then(res => console.log(res))
        } else if(trendingValue === "tv") {
            axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`)
                .then(res => console.log(res))
        } else if (trendingValue === "rent") {
            axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`)
                .then(res => console.log(res))
        } else if (trendingValue === "theaters") {
            axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`)
                .then(res => console.log(res))
        }
    }, [trendingValue])

    useEffect(() => {
        if (freeToWatch === "movies") {
            axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
                .then(res => console.log(res))
        } else if (freeToWatch === "series") {
            axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
                .then(res => console.log(res))
        }
    }, [freeToWatch])

    return (
        <Container maxWidth="xl">
            <Box className={styles.trending_container}>
                <TabContext value={trendingValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleTrending}
                            textColor="secondary"
                            indicatorColor="secondary"
                            scrollButtons={"auto"}
                            variant={"scrollable"}
                        >
                            <p className={styles.optionTitle}>پربیننده ترین برنامه ها</p>
                            <Tab label="در حال پخش" value="streaming" className={styles.tab} />
                            <Tab label="تلوزیون" value="tv" className={styles.tab} />
                            <Tab label="اجاره" value="rent" className={styles.tab} />
                            <Tab label="تئاتر" value="theaters" className={styles.tab} />
                        </TabList>
                    </Box>
                    <Box>
                        <TabPanel value="streaming">streaming</TabPanel>
                        <TabPanel value="tv">tv</TabPanel>
                        <TabPanel value="rent">rent</TabPanel>
                        <TabPanel value="theaters">theaters</TabPanel>
                    </Box>
                </TabContext>
            </Box>
            <Box className={styles.trending_container}>
                <TabContext value={freeToWatch}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleFreeToWatch}
                            textColor="secondary"
                            indicatorColor="secondary"
                            scrollButtons={"auto"}
                            variant={"scrollable"}
                        >
                            <p className={styles.optionTitle}>سریال و فیلم</p>
                            <Tab label="فیلم" value="movies" className={styles.tab} />
                            <Tab label="سریال" value="series" className={styles.tab} />
                        </TabList>
                    </Box>
                    <Box>
                        <TabPanel value="movies">Movies</TabPanel>
                        <TabPanel value="series">Series</TabPanel>
                    </Box>
                </TabContext>
            </Box>
        </Container>
    );
};

export default OptionsTab;