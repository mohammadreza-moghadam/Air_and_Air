import React, {useEffect, useState} from 'react';
import Link from "next/Link";
import {Box, Card, CardContent, CardMedia, Container, Tab, Typography} from '@mui/material';
import {TabContext, TabList} from "@mui/lab"
import axios from "axios";
import {SwiperSlide, Swiper} from "swiper/react";
import { Pagination } from "swiper";
import ReadMoreAndLess from "react-read-more-less";
import styles from "../styles/OptionsTab.module.css"
import 'swiper/css';

const OptionsTab = () => {
    const [trending, setTrending] = useState([])
    const [movieAndSeries, setMovieAndSeries] = useState([])
    const [trendingTabValue, setTrendingTabValue] = useState("theaters");
    const [freeToWatchTabValue, setFreeToWatchTabValue] = useState("movies")

    const handleTrending = (event, newValue) => {
        setTrendingTabValue(newValue);
    };

    const handleFreeToWatch = (event, newValue) => {
        setFreeToWatchTabValue(newValue)
    }

    useEffect(() => {
        if(trendingTabValue === "streaming") {
            axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
                .then(res => {
                    if (trending.length === 0) {
                        setTrending(res.data.results)
                    } else {
                        setTrending([])
                        setTrending(res.data.results)
                    }
                })
        } else if (trendingTabValue === "rent") {
            axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`)
                .then(res => {
                    if (trending.length === 0) {
                        setTrending(res.data.results)
                    } else {
                        setTrending([])
                        setTrending(res.data.results)
                    }
                })
        } else if (trendingTabValue === "theaters") {
            axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`)
                .then(res => {
                    if (trending.length === 0) {
                        setTrending(res.data.results)
                    } else {
                        setTrending([])
                        setTrending(res.data.results)
                    }
                })
        }
    }, [trendingTabValue])

    useEffect(() => {
        if (freeToWatchTabValue === "movies") {
            axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
                .then(res => {
                    if (movieAndSeries.length === 0) {
                        setMovieAndSeries(res.data.results)
                    } else {
                        setMovieAndSeries([])
                        setMovieAndSeries(res.data.results)
                    }
                })
        } else if (freeToWatchTabValue === "series") {
            axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
                .then(res => {
                    if (movieAndSeries.length === 0) {
                        setMovieAndSeries(res.data.results)
                    } else {
                        setMovieAndSeries([])
                        setMovieAndSeries(res.data.results)
                    }
                })
        }
    }, [freeToWatchTabValue])

    return (
        <Container maxWidth="xl">
            <Box className={styles.trending_container}>
                <TabContext value={trendingTabValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleTrending}
                            textColor="secondary"
                            indicatorColor="secondary"
                            scrollButtons={"auto"}
                            variant={"scrollable"}
                        >
                            <p className={styles.optionTitle}>پربیننده ترین برنامه ها</p>
                            <Tab label="تئاتر" value="theaters" className={styles.tab} />
                            <Tab label="در حال پخش" value="streaming" className={styles.tab} />
                            <Tab label="اجاره" value="rent" className={styles.tab} />
                        </TabList>
                    </Box>
                    <Box style={{marginTop: "20px"}}>
                        <Swiper
                            spaceBetween={30}
                            pagination={{clickable: true,}}
                            modules={[Pagination]}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 7,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                100: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                }
                            }}
                        >
                            {trending && trending.map(trend => {
                                return (
                                    <SwiperSlide key={trend.id}>
                                        <Link href={`/movieInfo?id=${trend.id}`}>
                                            <a>
                                                <Card sx={{ maxWidth: 250 }}>
                                                    <CardMedia
                                                        component="img"
                                                        height="250"
                                                        image= {`https://image.tmdb.org/t/p/w300${trend.poster_path}`}
                                                        alt="Paella dish"
                                                    />
                                                    <CardContent>
                                                        <Typography variant="body2" color="text.secondary">
                                                            <ReadMoreAndLess
                                                                className="read-more-content"
                                                                charLimit={50}
                                                                readMoreText="بیشتز"
                                                                readLessText="کمتر"
                                                            >
                                                                {trend.overview}
                                                            </ReadMoreAndLess>
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </a>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Box>
                </TabContext>
            </Box>
            <Box className={styles.trending_container}>
                <TabContext value={freeToWatchTabValue}>
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
                    <Box style={{marginTop: "20px"}}>
                        <Swiper
                            slidesPerView={7}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 7,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                100: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                }
                            }}
                        >
                            {movieAndSeries && movieAndSeries.map(ms => {
                                return (
                                    <SwiperSlide key={ms.id}>
                                        <Card sx={{ maxWidth: 250 }}>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image= {`https://image.tmdb.org/t/p/w300${ms.poster_path}`}
                                                alt="Paella dish"
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    <ReadMoreAndLess
                                                        className="read-more-content"
                                                        charLimit={50}
                                                        readMoreText="بیشتز"
                                                        readLessText="کمتر"
                                                    >
                                                        {ms.overview}
                                                    </ReadMoreAndLess>
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Box>
                </TabContext>
            </Box>
        </Container>
    );
};

export default OptionsTab;