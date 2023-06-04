import express from "express";
import creds from "../creds";

const app = express();

const db = mysql.createConnection({
  host: creds.serverUrl,
  user: creds.userName,
  password: creds.password,
  database: "test",
});

app.listen(8800, () => {
  console.log(creds.serverUrl);
});
