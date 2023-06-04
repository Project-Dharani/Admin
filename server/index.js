import express from "express";
import creds from "../creds.js";
import mysql from "mysql";
const app = express();
<<<<<<< HEAD

const db = mysql.createConnection({
  host: creds.serverUrl,
  user: creds.userName,
  password: creds.password,
  database: "test",
});

app.listen(8800, () => {
  console.log(creds.userName);
=======
const db=mysql.createConnection({
  host: creds.serverUrl,
  user: creds.userName,
  password: creds.password,
  database:"test",
>>>>>>> 624376731b7b661705e11cc4b8ed737dcb6fdb30
});
app.listen(8800, () => {
  console.log("backend connected1");
});