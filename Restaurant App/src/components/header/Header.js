import { useState } from "react";
import "./header.css";

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
                    <li className="list-item">Home</li>
                    <li className="list-item">About</li>
                    <li className="list-item">Contact</li>
                    <li className="list-item">Cart</li>
                    <button className="nav-btn" onClick={handleLogin}>
                        {logbtn}
                    </button>
                </ul>
            </div>
        </div>
    );
};
