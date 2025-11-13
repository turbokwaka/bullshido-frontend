import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen dot">
            <div className="navbar">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-2xl font-bold">
                        bullshido.
                    </Link>
                </div>
            </div>

            <div className="hero flex-grow-max">
                <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-none">
                    <div className="hidden lg:block pl-30">
                        <div className="hover-3d">
                            <figure className="rounded-[3rem] shadow-xl">
                                <img
                                    className="max-w-md"
                                    src="/images/video-preview.png"
                                    alt="3D card"
                                />
                            </figure>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-7xl font-bold">
                            Smarter, faster, easier.
                        </h1>
                        <h1 className="text-7xl">AI video creation.</h1>
                        <p className="text-3xl font-light text-base-content/70 py-12">
                            bullshido is the AI plugin you will love!
                            <br />
                            It provides useful tools to turn simple text into
                            viral videos faster.
                        </p>

                        <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
                            <Link
                                to="/app/gallery"
                                className="btn w-full btn-lg lg:btn-wide"
                            >
                                See examples
                            </Link>
                            <Link
                                to="/app/create"
                                className="btn w-full btn-lg lg:btn-wide btn-neutral"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
