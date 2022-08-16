import React from "react"
import {Stack, Divider, Paper, Link} from "@mui/material"
import {IoSearchCircleSharp} from "react-icons/io5";
import {pink} from "@mui/material/colors"

const LocationSearch = () => {
    const choices = [
        {id: 1, text: "Anywhere"},
        {id: 2, text: "Any Week"},
        {id: 3, text: "Add Guest", withIcon: true}
    ]

    return (
        <Paper sx={{
            borderRadius: 20,
            ml: 15,
        }} elevation={3}>
            <Stack
                sx={{
                borderRadius: 20,
                pl: 2, pt:2, pb: 2
            }} divider={<Divider orientation={"vertical"} flexItem />}>
                {choices.map((choice) => {
                    return (
                        <Link href={"#"} key={choice.id} style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer"
                        }}>
                                {choice.text}
                            {choice.withIcon && (
                                    <IoSearchCircleSharp color={pink[500]} size={23} style={{marginLeft: "5px"}} />
                            )}
                        </Link>
                    );
                })}
            </Stack>
        </Paper>
    )
}

export default LocationSearch