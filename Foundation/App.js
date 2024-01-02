import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="heading">This is a react element🧀</h1>;

const HeadingArrow = () => {
    return (
        <h1 className="heading">This is a react functional component made from arrow function😶</h1>
    );
};

function HeadingFunctional() {
    return (
        <h1 className="heading">
            This is a react functional component made from normal function😉
        </h1>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// root.render(<HeadingArrow />);
// root.render(<HeadingFunctional />);
