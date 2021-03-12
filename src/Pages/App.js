import React from "react"
import {BrowserRouter} from "react-router-dom"

import Header from "../Components/DefaultComponents/Header"
import Routes from "../Routes/Routes"
import SideBar from "../Components/DefaultComponents/SideBar"

export default function App(){
    return(
            <BrowserRouter> 
                <Header/>
                <Routes/>
            </BrowserRouter>
    )
}