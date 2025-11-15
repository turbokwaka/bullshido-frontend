import React from "react";

function SettingsPage() {
    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>
            <div className="divider"></div>

            <div className="w-full space-y-6 mb-6">
                <div className="card w-full border border-base-300 bg-base-100">
                    <div className="card-body">
                        <fieldset>
                            <legend className="fieldset-legend text-xl mb-4">
                                Profile Picture
                            </legend>
                            <div className="flex w-full sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 justify-between">
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img
                                            src="https://i.pravatar.cc/150?u=artem"
                                            alt="Current profile"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <label className="btn btn-neutral">
                                        Upload new Picture
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="image/png, image/jpeg"
                                        />
                                    </label>
                                    <button className="btn">Remove</button>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>

                <div className="card w-full border border-base-300 bg-base-100">
                    <div className="card-body">
                        <fieldset>
                            <legend className="fieldset-legend text-xl mb-4">
                                Account Details
                            </legend>
                            <div className="space-y-4 flex gap-2">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">
                                            Username
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter new username"
                                        className="input input-bordered w-full"
                                        defaultValue="artem_dev"
                                    />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">
                                            Email Address
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter new email"
                                        className="input input-bordered w-full"
                                        defaultValue="artem@example.com"
                                        disabled
                                    />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>

                <div className="card w-full border border-base-300 bg-base-100">
                    <div className="card-body">
                        <fieldset>
                            <legend className="fieldset-legend text-xl mb-4">
                                Change Password
                            </legend>
                            <div className="space-y-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">
                                            Current Password
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="idk your password"
                                        className="input w-full"
                                    />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">
                                            New Password
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter new password"
                                        className="input w-full"
                                    />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">
                                            Confirm New Password
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Confirm new password"
                                        className="input w-full"
                                    />
                                </div>
                                <button className="btn btn-disabled">
                                    Change password
                                </button>
                            </div>
                        </fieldset>
                    </div>
                </div>

                <div className="card w-full border border-base-300 bg-base-100">
                    <div className="card-body">
                        <fieldset>
                            <legend className="fieldset-legend text-xl mb-4">
                                Freaky stuff
                            </legend>
                            <div className="flex flex-col gap-2 items-start">
                                <button className="btn">Log out</button>
                                <button className="btn btn-soft btn-error">
                                    Delete my account
                                </button>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            <div className="card-actions justify-end">
                <button className="btn btn-primary btn-wide">
                    Save Changes
                </button>
            </div>
        </div>
    );
}

export default SettingsPage;
