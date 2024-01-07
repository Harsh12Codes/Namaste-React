import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
    const [logbtn, setLogbtn] = useState("Login");

    const handleLogin = () => {
        if (logbtn === "Login") {
            setLogbtn("Logout");
        } else {
            setLogbtn("Login");
        }
    };

    return (
        <div className="header">
            <div className="logo">
                <span>Restaur</span>
            </div>
            <div className="nav-items">
                <ul>
                    <li className="list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="list-item">Cart</li>
                    <button className="nav-btn" onClick={handleLogin}>
                        {logbtn}
                    </button>
                </ul>
            </div>
        </div>
    );
};
