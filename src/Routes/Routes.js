import React from "react"
import {Switch, Route} from "react-router-dom"
import Erro404 from "../Components/Error/Erro404"
import Login from "../Pages/Login"
import Home from "../Pages/Home"
import GeraTermos from "../Pages/GeraTermos"
import Painel from "../Pages/Painel"
import "../index.css"



export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/geratermos" component={GeraTermos}/>
            <Route exact path="/painel" component={Painel}/>
            <Route exact path="/Login" component={Login} />
            <Route component={Erro404}/> 
        </Switch>
    )
}