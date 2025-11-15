import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const EyeIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="18181BFF"
    >
        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
    </svg>
);

const EyeOffIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="18181BFF"
    >
        <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
    </svg>
);

function LandingPage() {
    const [nextPath, setNextPath] = useState(null);
    const navigate = useNavigate();

    const [rememberMe, setRememberMe] = useState(false);

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [signupUsername, setSignupUsername] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");

    const [isLoginValid, setIsLoginValid] = useState(false);
    const [isSignupValid, setIsSignupValid] = useState(false);

    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showSignupPassword, setShowSignupPassword] = useState(false);

    const loginFormRef = useRef(null);
    const signupFormRef = useRef(null);

    const validateLoginForm = () => {
        setIsLoginValid(loginFormRef.current?.checkValidity() ?? false);
    };

    const validateSignupForm = () => {
        setIsSignupValid(signupFormRef.current?.checkValidity() ?? false);
    };

    const resetLoginForm = () => {
        setLoginUsername("");
        setLoginPassword("");
        setShowLoginPassword(false);
        setIsLoginValid(false);
    };

    const resetSignupForm = () => {
        setSignupUsername("");
        setSignupEmail("");
        setSignupPassword("");
        setShowSignupPassword(false);
        setIsSignupValid(false);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Login attempt. Remember me:", rememberMe);
        document.getElementById("login_modal").close();
        if (nextPath) {
            navigate(nextPath);
        }
        resetLoginForm();
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        console.log("Signup attempt.");
        document.getElementById("signup_modal").close();
        if (nextPath) {
            navigate(nextPath);
        }
        resetSignupForm();
    };

    const openLoginModal = (path) => {
        setNextPath(path);
        resetLoginForm();
        resetSignupForm();
        document.getElementById("login_modal").showModal();
    };

    const handleSwitchToSignup = () => {
        document.getElementById("login_modal").close();
        resetLoginForm();
        resetSignupForm();
        document.getElementById("signup_modal").showModal();
    };

    const handleSwitchToLogin = () => {
        document.getElementById("signup_modal").close();
        resetLoginForm();
        resetSignupForm();
        document.getElementById("login_modal").showModal();
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
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            "https://placehold.co/512x288/1a1a1a/ffffff?text=Video+Preview";
                                    }}
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

            <dialog id="login_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-3xl text-center mb-4">
                        Log in
                    </h3>
                    <form
                        ref={loginFormRef}
                        onSubmit={handleLoginSubmit}
                        onChange={validateLoginForm}
                        onKeyUp={validateLoginForm}
                        className="flex flex-col gap-4"
                    >
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Username
                            </legend>
                            <label className="input validator w-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20px"
                                    viewBox="0 -960 960 960"
                                    width="20px"
                                    fill="18181BFF"
                                >
                                    <path d="M480-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.29-49 61.29-17 124.5-17t124.71 17Q666-398 721-366q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.18-3.03-9.41-3.02-4.24-7.97-6.59-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.72-3 3.73-3 8.28v24Zm216.21-288Q510-552 531-573.21t21-51Q552-654 530.79-675t-51-21Q450-696 429-674.79t-21 51Q408-594 429.21-573t51 21Zm-.21-72Zm0 360Z" />
                                </svg>
                                <input
                                    type="text"
                                    required
                                    placeholder="Username"
                                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                                    minLength="3"
                                    maxLength="30"
                                    title="Only letters, numbers or dash"
                                    value={loginUsername}
                                    onChange={(e) =>
                                        setLoginUsername(e.target.value)
                                    }
                                />
                            </label>
                            <p className="validator-hint hidden">
                                Must be 3 to 30 characters containing only
                                letters, numbers or dash
                            </p>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Password
                            </legend>
                            <label className="input validator w-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20px"
                                    viewBox="0 -960 960 960"
                                    width="20px"
                                    fill="18181BFF"
                                >
                                    <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                                </svg>
                                <input
                                    type={
                                        showLoginPassword ? "text" : "password"
                                    }
                                    required
                                    placeholder="Password"
                                    pattern=".{8,}"
                                    title="Must be more than 8 characters"
                                    value={loginPassword}
                                    onChange={(e) =>
                                        setLoginPassword(e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    className="btn btn-ghost btn-sm btn-circle"
                                    onClick={() =>
                                        setShowLoginPassword((p) => !p)
                                    }
                                >
                                    {showLoginPassword ? (
                                        <EyeOffIcon />
                                    ) : (
                                        <EyeIcon />
                                    )}
                                </button>
                            </label>
                            <p className="validator-hint hidden">
                                Must be more than 8 characters
                            </p>
                        </fieldset>

                        <div className="flex justify-between items-center -mt-2 mb-0">
                            <div className="form-control">
                                <label className="label cursor-pointer gap-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-primary checkbox-sm"
                                        checked={rememberMe}
                                        onChange={(e) =>
                                            setRememberMe(e.target.checked)
                                        }
                                    />
                                    <span className="label-text text-sm">
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            <a className="link link-hover text-primary text-sm font-semibold">
                                Forgot your password?
                            </a>
                        </div>

                        <div className="modal-action justify-center mt-0">
                            <button
                                type="submit"
                                className="btn btn-primary w-full btn-md"
                                disabled={!isLoginValid}
                            >
                                Log in
                            </button>
                        </div>
                    </form>

                    <div className="divider"></div>
                    <div className="text-center">
                        <button
                            type="button"
                            className="link link-hover text-primary text-sm font-semibold"
                            onClick={handleSwitchToSignup}
                        >
                            Don't have an account yet?
                        </button>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button onClick={resetLoginForm}>close</button>
                </form>
            </dialog>

            <dialog id="signup_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-3xl text-center mb-4">
                        Sign up
                    </h3>

                    <form
                        ref={signupFormRef}
                        onSubmit={handleSignupSubmit}
                        onChange={validateSignupForm}
                        onKeyUp={validateSignupForm}
                        className="flex flex-col gap-4"
                    >
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Username
                            </legend>
                            <label className="input validator w-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20px"
                                    viewBox="0 -960 960 960"
                                    width="20px"
                                    fill="18181BFF"
                                >
                                    <path d="M480-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.29-49 61.29-17 124.5-17t124.71 17Q666-398 721-366q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.18-3.03-9.41-3.02-4.24-7.97-6.59-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.72-3 3.73-3 8.28v24Zm216.21-288Q510-552 531-573.21t21-51Q552-654 530.79-675t-51-21Q450-696 429-674.79t-21 51Q408-594 429.21-573t51 21Zm-.21-72Zm0 360Z" />
                                </svg>
                                <input
                                    type="text"
                                    required
                                    placeholder="Username"
                                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                                    minLength="3"
                                    maxLength="30"
                                    title="Only letters, numbers or dash"
                                    value={signupUsername}
                                    onChange={(e) =>
                                        setSignupUsername(e.target.value)
                                    }
                                />
                            </label>
                            <p className="validator-hint hidden">
                                Must be 3 to 30 characters containing only
                                letters, numbers or dash
                            </p>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email</legend>
                            <label className="input validator w-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20px"
                                    viewBox="0 -960 960 960"
                                    width="20px"
                                    fill="18181BFF"
                                >
                                    <path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm312-240L168-611v347h624v-347L480-432Zm0-85 312-179H168l312 179Zm-312-94v-85 432-347Z" />
                                </svg>
                                <input
                                    type="email"
                                    required
                                    placeholder="Email"
                                    title="Please enter a valid email address"
                                    value={signupEmail}
                                    onChange={(e) =>
                                        setSignupEmail(e.target.value)
                                    }
                                />
                            </label>
                            <p className="validator-hint hidden">
                                Must be a real Email adress.
                            </p>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Password
                            </legend>
                            <label className="input validator w-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20px"
                                    viewBox="0 -960 960 960"
                                    width="20px"
                                    fill="18181BFF"
                                >
                                    <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                                </svg>
                                <input
                                    type={
                                        showSignupPassword ? "text" : "password"
                                    }
                                    required
                                    placeholder="Password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                    value={signupPassword}
                                    onChange={(e) =>
                                        setSignupPassword(e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    className="btn btn-ghost btn-sm btn-circle"
                                    onClick={() =>
                                        setShowSignupPassword((p) => !p)
                                    }
                                >
                                    {showSignupPassword ? (
                                        <EyeOffIcon />
                                    ) : (
                                        <EyeIcon />
                                    )}
                                </button>
                            </label>
                            <p className="validator-hint hidden">
                                Must be more than 8 characters, including
                                <br />
                                At least one number <br />
                                At least one lowercase letter <br />
                                At least one uppercase letter
                            </p>
                        </fieldset>

                        <div className="modal-action justify-center mt-4">
                            <button
                                type="submit"
                                className="btn btn-primary w-full btn-md"
                                disabled={!isSignupValid}
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <div className="divider"></div>
                    <div className="text-center">
                        <button
                            type="button"
                            className="link link-hover text-primary text-sm font-semibold"
                            onClick={handleSwitchToLogin}
                        >
                            Already have an account?
                        </button>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button onClick={resetSignupForm}>close</button>
                </form>
            </dialog>
        </div>
    );
}

export default LandingPage;
