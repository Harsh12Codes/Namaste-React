import React from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/body/Body";
import { Header } from "./components/header/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <Shimmer />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
