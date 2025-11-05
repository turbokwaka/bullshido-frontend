import React, { useState } from "react";

function StylePicker() {
    const [activePreset, setActivePreset] = useState("Outline");
    const [alignment, setAlignment] = useState("Bottom");

    const presets = [
        { name: "1", imageUrl: "/images/presets/1.png" },
        { name: "2", imageUrl: "/images/presets/2.png" },
        { name: "3", imageUrl: "/images/presets/3.png" },
        { name: "4", imageUrl: "/images/presets/4.png" },
        { name: "5", imageUrl: "/images/presets/5.png" },
        { name: "6", imageUrl: "/images/presets/6.png" },
    ];

    const alignments = ["Top", "Middle", "Bottom"];

    const handlePresetClick = (presetName) => {
        setActivePreset(presetName);
    };

    const handleAlignClick = (alignName) => {
        setAlignment(alignName);
    };

    return (
        <>
            <div className="grid grid-cols-3 gap-2">
                {presets.map((preset) => (
                    <button
                        key={preset.name}
                        onClick={() => handlePresetClick(preset.name)}
                        className={`btn h-16 
                        ${
                            activePreset === preset.name
                                ? "btn btn-active"
                                : "btn"
                        }
                    `}
                    >
                        <img
                            src={preset.imageUrl}
                            alt={preset.name}
                            className="h-20 w-20 object-contain p-1"
                        />
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
                        ${alignment === align ? "btn btn-active" : "btn"}
                    `}
                    >
                        {align}
                    </button>
                ))}
            </div>
        </>
    );
}

export default StylePicker;
