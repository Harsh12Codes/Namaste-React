//React.createElement return a object
const heading = React.createElement("h1", { id: "heading" }, "Hello world from React");
const description = React.createElement(
    "p",
    { id: "description" },
    "This is pure react we are not using HTMX,we are using javascript to create all these tags",
);
const child = React.createElement("div", { id: "child" }, [heading, description]);
const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));
//This render function take the object and convert it into a HTML tag
root.render(parent);
