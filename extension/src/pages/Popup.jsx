import { useState } from "react";
/*global chrome*/

const Popup = () => {
    const [summary, setSummary] = useState("");

    const handleSummarize = async () => {
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            const response = await chrome.runtime.sendMessage({
                action: "summarizeText",
                url: tab.url
            });
            setSummary(response.summary || "No summary available.");
        } catch (error) {
            console.error("Error:", error);
            setSummary("Failed to summarize.");
        }
    };

    return (
        <div style={{ width: 300, padding: 20 }}>
            <h2>Smart Reading Mode</h2>
            <button onClick={handleSummarize}>Summarize Page</button>
            <p>{summary}</p>
        </div>
    );
};

export default Popup;
