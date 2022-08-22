import React from "react"
import {Avatar, Checkbox, FormControlLabel, Grid, TextField, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import Link from "next/Link";
import {LockOutlined} from "@mui/icons-material";
import {useForm, Controller} from "react-hook-form";
import Header from "../components/Header";

const Login=()=>{
    const paperStyle={padding :20,height:'70%',width:350, margin:"10px auto"}
    const avatarStyle={backgroundColor:'#e91e63'}
    const buttonStyle={textAlign: "center" ,margin:'8px 0', width: "100%", backgroundColor: "#e91e63", border: "none", color: "#ffffff", padding: "10px 0", cursor: "pointer"}
    const inputStyle = {margin: "10px 0"}
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return(
        <>
            <Header searchBox={"disable"} />
            <Grid container direction={"column"} spacing={0} justifyContent={"center"} alignItems={"center"} style={{ minHeight: '80vh' }}>
                <Paper elevation={3} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlined /></Avatar>
                        <h2 style={{textAlign: "center"}}>ثبت نام</h2>
                    </Grid>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            render={({field}) => <TextField {...field} label='نام کاربری' fullWidth required style={inputStyle}/>}
                            name={"username"}
                            control={control}
                            defaultValue={""}
                        />
                        <Controller
                            render={({field}) => <TextField {...field} label='ایمیل' fullWidth required style={inputStyle}/>}
                            name={"email"}
                            control={control}
                            defaultValue={""}
                        />
                        <Controller
                            render={({field}) => <TextField {...field} label='رمز عبور' fullWidth required style={inputStyle}/>}
                            name={"password"}
                            control={control}
                            defaultValue={""}
                        />
                        <Controller
                            render={({field}) => <TextField {...field} label='تکرار رمز عبور' fullWidth required style={inputStyle}/>}
                            name={"confirm-password"}
                            control={control}
                            defaultValue={""}
                        />
                        <Controller
                            render={({field}) => <FormControlLabel {...field} control={<Checkbox name="checkedB" color="primary"/>} label="مرا به خاطر بسپار"/>}
                            name={"remember-me"}
                            control={control}
                            defaultValue={""}
                        />
                        <input type='submit' style={buttonStyle} value={"ثبت نام"}/>
                    </form>
                    <Typography >
                        <Link href="#" >
                            <a>
                                رمز خود را فراموش کردید؟
                            </a>
                        </Link>
                    </Typography>
                    <Typography >  آیا اکانت دارید؟
                        <Link href="#" >
                            <a>
                                ورود
                            </a>
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </>
    )
}

export default Login