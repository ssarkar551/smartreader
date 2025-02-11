import browser from 'webextension-polyfill';

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "summarizeText") {
        fetch("http://localhost:5000/api/readability/extract", {
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
