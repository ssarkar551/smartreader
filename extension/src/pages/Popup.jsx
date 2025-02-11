import { useState } from "react";
import browser from "webextension-polyfill";

export default function Popup() {
    const [summary, setSummary] = useState("");

    const summarizePage = () => {
        browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            browser.runtime.sendMessage({ action: "summarizeText", url: tabs[0].url }, (response) => {
                if (response.summary) setSummary(response.summary);
            });
        });
    };

    return (
        <div style={{ padding: "10px", width: "300px" }}>
            <h3>Smart Reading Mode</h3>
            <button onClick={summarizePage}>Summarize Page</button>
            <p>{summary}</p>
        </div>
    );
}
