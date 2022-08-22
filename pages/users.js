import React from "react"
import Header from "../components/Header";
import Paper from "@mui/material/Paper";
import {Person} from "@mui/icons-material";
import {Box, Grid, Typography} from "@mui/material";
import styles from "../styles/users.module.css"

const Users = ({users}) => {
    return (
        <>
            <Header />
            <Box sx={{mx: 2, mt: 2}}>
                <Grid container rowSpacing={4} columnSpacing={5}>
                    {
                        users.map(user => {
                            return (
                                <Grid item xs={12} sm={4} lg={3} key={user.id}>
                                    <Paper elevation={3} sx={{pb: "10px"}}>
                                        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                                            <Person className={styles.user_icon}/>
                                            <Typography>{user.name} <span className={styles.user_info_title}>: نام</span></Typography>
                                            <Typography>{user.email} <span className={styles.user_info_title}>: ایمیل</span></Typography>
                                            <Typography>{user.address.city} <span className={styles.user_info_title}>: شهر</span></Typography>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json()

    return {
        props: {
            users
        }
    }
}


export default Users