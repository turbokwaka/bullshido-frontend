import React, { useState } from "react";

function StylePicker() {
    const [activePreset, setActivePreset] = useState("Outline");

    const [alignment, setAlignment] = useState("Bottom");

    const presets = [
        "Basic",
        "Revid",
        "Hormoz",
        "Ali",
        "Wrap 1",
        "Wrap 2",
        "Faceless",
        "Elegant",
        "Difference",
        "Opacity",
        "Playful",
        "Bold Punch",
        "Movie",
        "Outline",
        "Cove",
    ];

    const alignments = ["Top", "Middle", "Bottom"];

    const handlePresetClick = (presetName) => {
        setActivePreset(presetName);
    };

    const handleAlignClick = (alignName) => {
        setAlignment(alignName);
    };

    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">
                3. Choose subtitles style
            </legend>
            <div className="card w-full max-w-lg bg-base-100">
                <div className="grid grid-cols-3 gap-2">
                    {presets.map((preset) => (
                        <button
                            key={preset}
                            onClick={() => handlePresetClick(preset)}
                            className={`btn h-16 
                            ${
                                activePreset === preset
                                    ? "btn-soft btn-secondary btn-active"
                                    : "btn-soft"
                            }
                        `}
                        >
                            {preset} {}
                        </button>
                    ))}
                </div>

                <label className="label mt-6">
                    <span className="label-text">Alignment</span>
                </label>

                <div className="grid grid-cols-3 gap-2">
                    {alignments.map((align) => (
                        <button
                            key={align}
                            onClick={() => handleAlignClick(align)}
                            className={`btn h-14 
                            ${
                                alignment === align
                                    ? "btn-soft btn-secondary btn-active"
                                    : "btn-soft"
                            }
                        `}
                        >
                            {align}
                        </button>
                    ))}
                </div>
            </div>
        </fieldset>
    );
}

export default StylePicker;
