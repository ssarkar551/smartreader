/*global chrome*/

(() => {
    function extractText() {
        let paragraphs = document.querySelectorAll("p");
        return Array.from(paragraphs).map(p => p.innerText).join("\n");
    }

    const text = extractText(); // Extract text

    // Ensure browser compatibility (Chrome and Firefox)
    //const browserAPI = window.chrome ? chrome : browser;

    // Send extracted text and URL to background script
    chrome.runtime.sendMessage({ action: "summarizeText", url: window.location.href, text }, (response) => {
        if (response && response.summary) {
            let div = document.createElement("div");
            div.innerText = response.summary;
            div.style = `
                position: fixed; 
                top: 13px; 
                margin-left: auto; 
                margin-right: auto;
                max-width: 50%; 
                background: rgba(255, 255, 255, 0.9);
                padding: 10px;
                border-radius: 5px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                z-index: 9999;
            `;
            document.body.appendChild(div);
        } else {
            console.error("No summary received.");
        }
    });
})();

