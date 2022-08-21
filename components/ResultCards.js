import React, {useContext} from "react"
import {Grid, Box, CardMedia, CardContent, Typography, Card, Skeleton} from '@mui/material';
import ReadMoreAndLess from 'react-read-more-less';
import DataContext from "../context/DataContext";
import Link from "next/Link";

const ResultCards = () => {
    const {results} = useContext(DataContext)

    console.log(results);

    return (
        <Box sx={{ mx: 2 }}>
            <Grid container rowSpacing={4} columnSpacing={5}>
                    {results && results.map(movie => {
                        return (
                            <Grid item xs={12} sm={4} md={4} lg={3} key={movie.id}>
                                <Link href={`/movieInfo?id=${movie.id}`}>
                                    <a>
                                        <Card>
                                            <CardMedia
                                                component="img"
                                                height="300"
                                                image= {`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                                alt={`${movie.id}`}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {movie.original_title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <ReadMoreAndLess
                                                        className="read-more-content"
                                                        charLimit={50}
                                                        readMoreText="بیشتز"
                                                        readLessText="کمتر"
                                                    >
                                                        {movie.overview}
                                                    </ReadMoreAndLess>
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </a>
                                </Link>
                            </Grid>
                        )
                    })}
            </Grid>
        </Box>
    );
};

export default ResultCards;