import React from "react";
import { useState, useEffect } from "react";

const writeRecords = (props) => {
    <div>
        <p>title: {props.title}</p>
        <p>rate: {props.imdb.rating}</p>
        <p>vote: {props.imdb.votes}</p>
    </div>;
};

export default function Record() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        async function run() {
            await fetch("http://localhost:3000/record")
                .then((res) => res.json())
                .then((result) => setRecords(result));
        }
        run();
    }, []);

    return (
        <div>
            <p>Here is Record!</p>
            <div>
                {records.map((el) => (
                    <div className="movie_box">
                        <p>title: {el.title}</p>
                        <p>rate: {el.imdb.rating}</p>
                        <p>vote: {el.imdb.votes}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
