import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./src/component/home.js";
import Record from "./src/component/record.js";

export default function App() {
    return (
        <>
            <Router>
                <div className="menu">
                    <p>Tester</p>
                    <Link className="link" to="/">
                        Home
                    </Link>
                    <Link className="link" to="/record">
                        Record
                    </Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/record" element={<Record />} />
                </Routes>
            </Router>
        </>
    );
}
