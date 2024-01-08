import { useState } from "react";
import "./header.css";
import { ChevronUpSquare, MenuSquare } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav>
            <div className="header-logo">
                <NavLink to="/home">KhanaKhoj</NavLink>
            </div>
            <div
                className="header-hamburger"
                onClick={() => {
                    setToggle(!toggle);
                    console.log(toggle);
                }}
            >
                {toggle ? (
                    <ChevronUpSquare className="icon-size" />
                ) : (
                    <MenuSquare className="icon-size" />
                )}
            </div>
            <div className={`header-menu ${toggle ? "open" : ""}`}>
                <ul>
                    <li>
                        <NavLink to="/restaurant">Restaurants</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
