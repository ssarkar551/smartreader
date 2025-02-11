import browser from 'webextension-polyfill';

(() => {
    function extractText() {
        let paragraphs = document.querySelectorAll("p");
        return Array.from(paragraphs).map(p => p.innerText).join("\n");
    }

    browser.runtime.sendMessage({ action: "summarizeText", url: window.location.href }, (response) => {
        if (response.summary) {
            let div = document.createElement("div");
            div.innerText = response.summary;
            div.style = "position:fixed; top:10px; left:10px; width:300px; background:#fff; padding:10px; border-radius:5px;";
            document.body.appendChild(div);
        }
    });
})();
