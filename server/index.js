const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mysql = require("mysql")
const cors = require("cors")

const db = mysql.createPool({
    host:"31.220.104.197",
    user: "u104395534_ti",
    password: "#Vivacomenergia30",
    database: "u104395534_Termos"
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/get", (req,res)=>{
    const sqlSelect = "SELECT * FROM TermUsers"
    db.query(sqlSelect ,(err,result)=>{
        res.send(result)
    }) 
})

app.post("/api/insert", (req,res)=>{ 

    const name = req.body.nameUser
    const reg = req.body.regUser
    const sector = req.body.sectorUser
    const team = req.body.teamUser

    const sqlInsert = "INSERT INTO TermUsers (name, reg, sector, team) VALUES (?,?,?,?)"
    db.query(sqlInsert, [name,reg,sector,team],(err,result)=>{
        console.log(err)
    })  
})

app.listen(3001,()=>{
    console.log("run on port 3001")
})