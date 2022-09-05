import React, {useContext} from "react"
import {Grid, Box, CardMedia, CardContent, Typography, Card} from '@mui/material';
import ReadMoreAndLess from 'react-read-more-less';
import DataContext from "../context/DataContext";
import Link from "next/Link";
import styles from "../styles/ResultCards.module.css"
import Image from "next/image";
import Logo from "../static/images/Logo.png"

const ResultCards = () => {
    const {results} = useContext(DataContext)

    return (
        results.length === 0 ?
            <Box className={styles.loading}>
                <Image src={Logo} alt={"logo"} width={"300px"} height={"300px"} />
            </Box>
            :
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
                                        </Card>
                                    </a>
                                </Link>
                                <CardContent className={styles.movie_info}>
                                    <Typography gutterBottom className={styles.movie_title}>
                                        {movie.original_title}
                                    </Typography>
                                    <Typography className={styles.movie_desc}>
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
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
    );
};

export default ResultCards;