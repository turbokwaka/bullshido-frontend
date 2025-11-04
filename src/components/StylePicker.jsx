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

    const getPresetStyle = (presetName) => {
        if (presetName === "Difference") return "btn-accent";
        if (presetName === "Outline") return "btn-neutral";
        if (presetName === "Cove") return "btn-outline";

        return "btn-base-100";
    };

    return (
        <div className="card w-full max-w-lg bg-base-100 p-6">
            {}
            <label className="label">
                <span className="label-text">Select a preset</span>
            </label>

            {}
            <div className="grid grid-cols-3 gap-2">
                {presets.map((preset) => (
                    <button
                        key={preset}
                        onClick={() => handlePresetClick(preset)}
                        className={`btn h-16 
                            ${
                                activePreset === preset
                                    ? "btn-primary"
                                    : getPresetStyle(preset)
                            }
                        `}
                    >
                        {preset} {}
                    </button>
                ))}
            </div>

            {}
            <label className="label mt-6">
                <span className="label-text">Alignment</span>
            </label>

            {}
            <div className="grid grid-cols-3 gap-2">
                {alignments.map((align) => (
                    <button
                        key={align}
                        onClick={() => handleAlignClick(align)}
                        className={`btn h-14 
                            ${
                                alignment === align
                                    ? "btn-active"
                                    : "btn-base-100"
                            }
                        `}
                    >
                        {}
                        {align}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default StylePicker;
