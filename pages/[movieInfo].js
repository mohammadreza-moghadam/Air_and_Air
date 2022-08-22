import React, {useContext, useEffect, useState} from "react"
import axios from "axios";
import DataContext from "../context/DataContext";
import {Box, Grid} from "@mui/material";
import Header from "../components/Header";
import {InsertLink, Slideshow} from "@mui/icons-material";
import Link from "next/Link";
// styles
import styles from "../styles/movieInfo.module.css"

const MovieInfo = () => {
    const [movie, setMovie] = useState([])
    const [trailers, setTrailers] = useState([])
    const [loading, setIsLoading] = useState(true)
    const {movieId} = useContext(DataContext)

    const homePage = movie.homepage
    const imdbPage = movie.imdb_id

    // client side fetching
    useEffect(() => {
        (async () => {
           try {
               axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
                   .then((res) => setMovie(res.data))

               axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
                   .then(res => setTrailers(res.data.results))
           }  catch (err) {
                console.log(err)
           } finally {
               setIsLoading(false)
           }
        })()
    }, [movieId])

    return (
        <Box>
            <Header searchBox={"disable"} />
            <Box sx={{
                width: "70%",
                margin: "0 auto",
            }}>
                <h1 className={styles.movie_title}>{movie.original_title}</h1>
                <span>{movie.release_date} • </span>
                <span>{movie.runtime}m</span>
                <Grid container>
                    <Grid xs={12} sm={8} mt={2} mb={0}>
                        <Box className={styles.iframe_container}>
                            <iframe
                                className={styles.iframe_content}
                                src={`https://www.youtube.com/embed/${trailers[0]?.key}`}
                                allowFullScreen
                            >
                            </iframe>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={4} mt={2} mb={0} sx={{display: {xs: "none", md: "block"}}}>
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} className={"poster"}/>
                    </Grid>
                    <Box>
                        <h3 className={styles.overview_title}>: خلاصه</h3>
                        <p className={"overview"}>{movie.overview}</p>
                        <p className={styles.links_title}>: لینک به صفحات مریوط به فیلم</p>
                        <Box sx={{float: "right"}}>
                            <Link  href={`${homePage}`}>
                                <a target={"_blank"} rel={"noopener noreferrer"} className={styles.movie_page}>
                                    <InsertLink className={styles.icon} />
                                </a>
                            </Link>
                            <Link href={`https://www.imdb.com/title/${imdbPage}/`}>
                                <a target={"_blank"} rel={"noopener noreferrer"} className={styles.movie_page}>
                                    <Slideshow className={styles.icon}/>
                                </a>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </Box>
    )
}

export default MovieInfo