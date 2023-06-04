import express from "express";
import creds from "../creds.js";
import mysql from "mysql";
const app = express();
const db=mysql.createConnection({
  host: creds.serverUrl,
  user: creds.userName,
  password: creds.password,

});
app.listen(8800, () => {
  console.log("backend connected");
});
