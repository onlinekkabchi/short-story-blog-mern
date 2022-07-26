import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import { ConnectDB } from "./db/connect.js";
import { mongouri } from "./db/url.js";
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

const client = new MongoClient(mongouri);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return;
});

app.get("/record", (req, res) => {
    const movies = client.db("sample_mflix").collection("movies");
    const query = { runtime: { $lt: 150 } };

    const options = {
        sort: { title: 1 },
        projection: { _id: 0, title: 1, imdb: 1 },
    };
    movies
        .find(query, options)
        .limit(5)
        .toArray(function (err, result) {
            if (err) throw err;
            console.dir(result);
            res.send(result);
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
