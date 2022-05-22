require('dotenv').config()
const express = require('express')
const mysql = require("mysql")
const cors = require('cors')
const {ER_DUP_ENTRY} = require("mysql/lib/protocol/constants/errors");

const app = express()
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.json());

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
    });

app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
)

app.post("/register", async (req, res)=>{
    const email = req.body.email
    const username = req.body.username
    const passwrd = req.body.passwrd

    await db.query("INSERT INTO users (email, username, passwrd) VALUES (?, ?, ?)", [email, username, passwrd], (err) => {
        if (err) {
            if (err.errno === ER_DUP_ENTRY) {
                res.status(400).send({error: 'Duplicate username or email'})
            } else res.status(400).send({error: 'SQL Error'})
        } else {
            res.sendStatus(200)
        }
    })
});

app.post("/login", (req, res)=> {
    const username = req.body.username;
    const passwrd = req.body.passwrd;

    db.query("SELECT * FROM users WHERE username = ? AND passwrd = ?", [username, passwrd], (err, result)=>{
        if (err) {
            res.send({err: err})
        }

        if (result) {
            res.send(result)
        } else {
            res.send({message: "Wrong username or password "})
        }
    })
});


