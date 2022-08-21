import React, {useState, useContext} from "react"
import {Paper, InputBase, IconButton} from "@mui/material";
import {FaSearch} from "react-icons/fa";
import {VscSettings} from "react-icons/vsc";
import axios from "axios"
import DataContext from "../context/DataContext";

const MobileSearchComponent = () => {
    const {onChange} = useContext(DataContext)

    return (
        <Paper
            component={"form"}
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                border: "1px solid #ccc",
                borderRadius: 20,
                textAlign: "right"
            }}
        >
            <IconButton>
                <VscSettings />
            </IconButton>
            <InputBase
                onChange={onChange}
                sx={{ml: 1, flex: 1}}
                placeholder={"جست و جوی فیلم"}
            />
            <IconButton sx={{p: "10px"}}>
                {" "}
                <FaSearch />
            </IconButton>
        </Paper>
    )
}

export default MobileSearchComponent