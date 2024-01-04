import "./header.css";

export const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};
