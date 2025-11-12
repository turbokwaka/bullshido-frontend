import React from "react";
import CreatorForm from "../components/CreatorForm.jsx";
import VideoPreview from "../components/VideoPreview.jsx";

function CreatorPage() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-6">Create video</h1>
            <div className="divider"></div>

            <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <CreatorForm />
                </div>
                <VideoPreview />
            </div>
        </>
    );
}

export default CreatorPage;
