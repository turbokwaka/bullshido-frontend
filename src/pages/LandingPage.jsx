import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="navbar bg-base-200">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl font-bold">
                        bullshido.
                    </a>
                </div>
            </div>

            <div className="hero bg-base-200 flex-grow">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://pngimg.com/uploads/cat/cat_PNG50488.png"
                        className="max-w-sm"
                        alt="A cat"
                    />
                    <div>
                        <h1 className="text-6xl font-bold">
                            Shitload the whole tiktok!
                        </h1>
                        <p className="text-3xl py-6">
                            Stop editing, start shitloading.
                        </p>
                        <Link
                            to="/app/create"
                            className="btn btn-wide btn-primary"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
