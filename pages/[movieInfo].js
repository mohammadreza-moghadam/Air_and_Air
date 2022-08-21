import React, {useContext, useEffect, useState} from "react"
import axios from "axios";
import DataContext from "../context/DataContext";
import {Box, Grid} from "@mui/material";
import Header from "../components/Header";

const MovieInfo = () => {
    const [movie, setMovie] = useState([])
    const [trailers, setTrailers] = useState([])
    const {movieId} = useContext(DataContext)

    console.log(trailers[0]?.key);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
            .then((res) => setMovie(res.data))

        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
            .then(res => setTrailers(res.data.results))
    }, [movieId])

    return (
        <Box>
            <Header />
            <Box sx={{
                width: "80%",
                margin: "0 auto",
            }}>
                <h1>{movie.original_title}</h1>
                <span>Release Date: {movie.release_date} • </span>
                <span>{movie.runtime}m</span>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} mt={2}>
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} style={{
                            height: "400px",
                            width: "300px",
                            borderRadius: "10px"
                        }}/>
                    </Grid>
                    <Grid item xs={12} sm={8} mt={2}>
                        <iframe
                            style={{borderRadius: "10px"}}
                            width="700"
                            height="400"
                            src={`https://www.youtube.com/embed/${trailers[0]?.key}`}>
                        </iframe>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default MovieInfo