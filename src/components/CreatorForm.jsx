import React from "react";
// import { useState } from "react";
import StylePicker from "./StylePicker.jsx";

function CreatorForm() {
    return (
        <div className="card w-full border border-base-300 bg-base-100 shadow-xl">
            <div className="card-body space-y-6">
                {/* Step 1: Narrator Script */}
                <div className="fieldset">
                    <legend className="fieldset-legend">
                        1. Narator script
                    </legend>
                    <textarea
                        className="textarea h-24 w-full"
                        placeholder="Script"
                    ></textarea>
                </div>

                {/* Step 2: Voice Actor */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">
                        2. Select voice actor
                    </legend>
                    <select defaultValue="Pick a browser" className="select">
                        <option disabled={true}>Pick a voice actor</option>
                        <option>Chrome</option>
                        <option>FireFox</option>
                        <option>Safari</option>
                    </select>
                </fieldset>

                {/* Step 3: Subtitles Style */}
                <StylePicker />

                {/* Step 4: Generation button*/}
                <div className="card-actions pt-4">
                    <button className="btn btn-primary w-full">
                        Generate video
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreatorForm;
