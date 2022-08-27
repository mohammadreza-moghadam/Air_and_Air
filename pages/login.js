import React, {useState} from "react"
import {Alert, Avatar, Checkbox, FormControlLabel, Grid, Snackbar, TextField, Typography, Stack} from "@mui/material";
import Paper from "@mui/material/Paper";
import Link from "next/Link";
import {LockOutlined} from "@mui/icons-material";
import {useForm, Controller} from "react-hook-form";
import Header from "../components/Header";
import {useRouter} from "next/router"
import axios from "axios";
import styles from "../styles/login.module.css"

const Login=({token})=>{
    const [error, setError] = useState(false)
    const router = useRouter()
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async ({username, email, password}) => {
        try {
            const credentials = {username, email, password}
            await axios.post("/api/auth/login", credentials)
            await router.push("/")
        } catch (err) {
            setError(true)
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return
        }
        setError(false)
    }

    return(
        <>
            <Header searchBox={"disable"} token={token} />
            <Snackbar onClose={handleClose} autoHideDuration={4000} open={error} anchorOrigin={{vertical: "top", horizontal: "right"}}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    اطلاعات وارد شده اشتباه است
                </Alert>
            </Snackbar>
            <Grid container direction={"column"} spacing={0} justifyContent={"center"} alignItems={"center"} style={{ minHeight: '80vh' }}>
                <Paper elevation={3} className={styles.paperStyle}>
                    <Grid align='center'>
                        <Avatar className={styles.avatarStyle}><LockOutlined /></Avatar>
                        <h2 style={{textAlign: "center"}}>ورود</h2>
                    </Grid>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            render={({field}) => <TextField {...field} label='نام کاربری' fullWidth required className={styles.inputStyle}/>}
                            name={"username"}
                            control={control}
                            defaultValue={""}
                        />
                        <Controller
                            render={({field}) => <TextField {...field} label='ایمیل' fullWidth required className={styles.inputStyle}/>}
                            name={"email"}
                            control={control}
                            defaultValue={""}
                        />
                        <Controller
                            render={({field}) => <TextField {...field} label='رمز عبور' fullWidth required className={styles.inputStyle}/>}
                            name={"password"}
                            control={control}
                            defaultValue={""}
                        />
                        <Controller
                            render={({field}) => <FormControlLabel {...field} control={<Checkbox name="checkedB" color="primary"/>} label="مرا به خاطر بسپار"/>}
                            name={"remember-me"}
                            control={control}
                            defaultValue={""}
                        />
                        <input type='submit' className={styles.buttonStyle} value={"ورود"}/>
                    </form>
                    <Typography >
                        <Link href="#" >
                            <a>
                                رمز خود را فراموش کردید؟
                            </a>
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </>
    )
}

export async function getServerSideProps({req, res}) {
    return {
        props: {token: req.cookies.token || ""}
    }
}


export default Login