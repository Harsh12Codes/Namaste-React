import "./shimmerCard.css";

export default function ShimmerCard() {
    return (
        <div className="shim-card">
            <div className="shim-img"></div>
            <div className="shim-details">
                <span className="shim-name"></span>
                <span className="shim-cuisine"></span>
            </div>
            <div className="shim-features">
                <div className="shim-rating"></div>
                <div className="shim-delivery-time"></div>
            </div>
        </div>
    );
}
