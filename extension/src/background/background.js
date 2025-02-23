//import browser from 'webextension-polyfill';

/*global chrome*/

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "summarizeText") {
        fetch("http://127.0.0.1:5000/api/extract", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: request.url })
        })
        .then(response => response.json())
        .then(data => sendResponse({ summary: data.text }))
        .catch(error => sendResponse({ error: error.message }));
        
        return true;
    }
});
