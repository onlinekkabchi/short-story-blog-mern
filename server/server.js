import express from "express";
import cors from "cors";
import { ConnectDB } from "./db/connect.js";
import { CURSOR_FLAGS } from "mongodb";
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("get started:>");
    // console.log(req);
});

app.get("/record", (req, res) => {
    const movies = ConnectDB();
    const query = { runtime: { $lt: 150 } };

    const options = {
        sort: { title: 1 },
        projection: { _id: 0, title: 1, imdb: 1 },
    };

    movies.findOne(query, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

app.use((err, req, res, next) => {
    console.log("error 발생!");
    res.status(400).send(err.message);
});

app.listen(port, () => {
    ConnectDB(function (err) {
        if (err) console.error(err);
    });
    console.log(`서버연결 성공적, 연결port는 : ${port}`);
});
