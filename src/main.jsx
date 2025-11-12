import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import LandingPage from "./pages/LandingPage.jsx";
import CreatorPage from "./pages/CreatorPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/app",
        element: <App />,
        children: [
            {
                path: "create",
                element: <CreatorPage />,
            },
            {
                path: "gallery",
                element: <GalleryPage />,
            },
            {
                path: "settings",
                element: <SettingsPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {}
        <RouterProvider router={router} />
    </StrictMode>,
);
