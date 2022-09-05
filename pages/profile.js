import React from "react"
import Header from "../components/Header";
import {Avatar, Box, Container, Divider, Grid, List, ListItem, ListItemText, Modal, Paper, Typography} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import styles from "../styles/profile.module.css"
import axios from "axios";
import {useRouter} from "next/router";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Profile = ({token}) => {
    const router = useRouter()
    const [open, setOpen] = React.useState(false);

    const logout =async () => {
        await axios.get("/api/auth/logout")
            .then(() => {
                try {
                    router.push("/login")
                } catch (err) {
                    console.log(err);
                }
            })
    }

    return (
        <>
            <Header token={token}/>
            <Container maxWidth={"xl"}>
                <Grid container margin={"0 auto"}>
                    <Grid xs={12} md={8}>
                        <Paper elevation={3} sx={{height: "450px", margin: "10px"}} >
                            <List
                                sx={{
                                    width: '100%',
                                    bgcolor: 'background.paper',
                                }}
                            >
                                <ListItem className={styles.list_item_style}>
                                    <ListItemText primary="۱۵ مرداد ۱۴۰۱ | ۱۰:۳۲"/>
                                    <ListItemText primary="آخرین فعالیت شما" sx={{textAlign: "right"}}/>
                                </ListItem>
                                <Divider variant="middle" />
                                <ListItem className={styles.list_item_style}>
                                    <ListItemText primary="۱۵ مرداد ۱۴۰۱ | ۱۰:۳۲"/>
                                    <ListItemText primary="تاریخ عضویت" sx={{textAlign: "right"}}/>
                                </ListItem>
                                <Divider variant="middle" />
                                <ListItem className={styles.list_item_style}>
                                    <ListItemText primary="mohammadreza.gmail.com"/>
                                    <ListItemText primary="ایمیل" sx={{textAlign: "right"}}/>
                                </ListItem>
                                <Divider variant="middle" />
                                <ListItem className={styles.list_item_style}>
                                    <ListItemText primary="mohammad___"/>
                                    <ListItemText primary="نام نمایشی" sx={{textAlign: "right"}}/>
                                </ListItem>
                                <Divider variant="middle" />
                                <ListItem className={styles.list_item_style}>
                                    <button className={styles.your_comments} onClick={() => setOpen(true)}>خروج</button>
                                    <ListItemText primary="خروج از حساب کاربری" sx={{textAlign: "right"}}/>
                                </ListItem>
                                <Modal
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            آیا مطمین هستید؟
                                        </Typography>
                                        <button onClick={logout} className={styles.modal_yes_button} style={{marginRight: "10px"}}>بله</button>
                                        <button onClick={() => setOpen(false)} className={styles.modal_no_button}>خیر</button>
                                    </Box>
                                </Modal>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid xs={12} md={4}>
                        <Paper elevation={3} sx={{height: "300px", margin: "10px"}}>
                            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                                <Avatar sx={{ width: 70, height: 70, mt: 5, bgcolor: deepOrange[500]}}>M</Avatar>
                                <h2>کاربر گرامی خوش آمدید</h2>
                                <h3 style={{margin: "0px"}}>محمد رضا مقدم</h3>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export async function getServerSideProps({req, res}) {
    return {
        props: {token: req.cookies.token || ""}
    }
}

export default Profile