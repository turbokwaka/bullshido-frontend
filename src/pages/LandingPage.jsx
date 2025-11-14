import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LandingPage() {
    const [nextPath, setNextPath] = useState(null);
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        document.getElementById("my_modal_2").close();

        if (nextPath) {
            navigate(nextPath);
        }
    };

    const openLoginModal = (path) => {
        setNextPath(path);
        document.getElementById("my_modal_2").showModal();
    };

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
                            <button
                                onClick={() => openLoginModal("/app/gallery")}
                                className="btn w-full btn-lg lg:btn-wide"
                            >
                                See examples
                            </button>
                            <button
                                onClick={() => openLoginModal("/app/create")}
                                className="btn w-full btn-lg lg:btn-wide btn-neutral"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-center">Login</h3>
                    <div className="divider"></div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Username</legend>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="cooluser2008"
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="qwerty123"
                        />
                    </fieldset>
                    <a className="link link-hover text-primary text-sm font-semibold">
                        Forgot your password?
                    </a>

                    <div className="modal-action justify-center">
                        <button
                            className="btn btn-primary w-full btn-md"
                            onClick={handleLoginSuccess}
                        >
                            Sign up
                        </button>
                    </div>
                    <div className="divider"></div>
                    <a className="flex justify-center link link-hover text-primary text-sm font-semibold">
                        Don't have an account yet?
                    </a>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}

export default LandingPage;
