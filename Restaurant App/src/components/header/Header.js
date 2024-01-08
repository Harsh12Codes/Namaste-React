import "./header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [loginBtn, setLoginBtn] = useState("Login");

    const handleLogin = () => {
        if (loginBtn === "Login") {
            setLoginBtn("Logout");
        } else {
            setLoginBtn("Login");
        }
    };

    return (
        <div className="header">
            <div className="logo">
                <span>Restro</span>
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
                        {loginBtn}
                    </button>
                </ul>
            </div>
        </div>
    );
}
