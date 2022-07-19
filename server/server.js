import express from "express";
import cors from "cors";
import { ConnectDB } from "./db/connect.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    ConnectDB(function (err) {
        if (err) console.error(err);
    });
    console.log(`서버연결 성공적 연결port는 : ${port}`);
});
