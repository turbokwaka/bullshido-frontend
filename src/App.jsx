import React from "react";
import SidebarNav from "./components/SidebarNav.jsx";
import CreatorForm from "./components/CreatorForm.jsx";
import VideoPreview from "./components/VideoPreview.jsx";

function App() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            {}
            <div className="drawer-content flex flex-col items-center p-4">
                {}
                <div className="navbar w-full lg:hidden">
                    <div className="flex-none">
                        {}
                        <label
                            htmlFor="my-drawer-2"
                            className="btn btn-square btn-ghost drawer-button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">bullshido.</a>
                    </div>
                </div>

                {}
                <div className="grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:py-8">
                    <CreatorForm />
                    <VideoPreview />
                </div>
            </div>

            {}
            <div className="drawer-side">
                {}
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>

                {}
                <SidebarNav />
            </div>
        </div>
    );
}

export default App;
