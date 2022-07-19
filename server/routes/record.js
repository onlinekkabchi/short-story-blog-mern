import express from "express";
import mongodb from "mongodb";
import { ConnectDB } from "../db/connect.js";

const ObjectId = mongodb.ObjectId;

const app = express();

app.get("/comment", (req, res) => {
    const IgotData = ConnectDB();
    IgotData.collection("comments")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

app.post("/comment/add", (req, response) => {
    let IwillpostData = ConnectDB();
    let myobj = {
        name: req.body.name,
        email: req.body.email,
        movie_id: req.body.movie_id,
        text: req.body.text,
        date: req.body.date,
    };
    IwillpostData.collection("comments").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

export default app;
