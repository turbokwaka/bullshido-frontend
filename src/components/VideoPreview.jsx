import React from "react";

function VideoPreview() {
    return (
        <div className="flex items-start justify-center">
            <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        <img
                            src="https://i.imgur.com/g8G5P5A.png"
                            alt="Video preview"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPreview;
