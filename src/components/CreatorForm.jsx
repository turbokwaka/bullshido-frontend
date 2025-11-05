import React, { useState } from "react";
import StylePicker from "./StylePicker.jsx";

function CreatorForm() {
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateClick = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    };

    return (
        <div className="w-full space-y-6 mb-6">
            <div className="card w-full border border-base-300 bg-base-100">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">
                            1. Narator script
                        </legend>
                        <p className="label">
                            💡 Enter your script exactly as you want it spoken
                        </p>
                        <textarea
                            className="textarea h-24 w-full"
                            placeholder="Script"
                        ></textarea>
                    </fieldset>
                </div>
            </div>
            <div className="card w-full border border-base-300 bg-base-100">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">
                            2. Select voice actor
                        </legend>
                        <p className="label">
                            Choose a voice that will read your script
                        </p>
                        <div className="join">
                            <select
                                defaultValue="Pick a browser"
                                className="select join-item"
                            >
                                <option disabled={true}>
                                    Pick a voice actor
                                </option>
                                <option>❤️ Heart</option>
                                <option>🔥 Bella</option>
                                <option>🎧 Nicole</option>
                            </select>
                            <button className="btn join-item">Listen</button>
                        </div>
                    </fieldset>
                </div>
            </div>

            <div className="card w-full border border-base-300 bg-base-100">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">
                            3. Choose subtitles style
                        </legend>
                        <StylePicker />
                    </fieldset>
                </div>
            </div>

            <div className="card-actions">
                {isLoading ? (
                    <button className="btn w-full" disabled={true}>
                        <span className="loading loading-spinner"></span>
                        Casting spells
                    </button>
                ) : (
                    <button
                        className="btn btn-primary w-full"
                        onClick={handleGenerateClick}
                    >
                        Generate video
                    </button>
                )}
            </div>
        </div>
    );
}

export default CreatorForm;
