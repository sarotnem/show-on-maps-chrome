const createContextMenu = (id, title, context) => {
    chrome.runtime.onInstalled.addListener(function () {
        chrome.contextMenus.create({
            "id": id,
            "title": title,
            "contexts": [context]
        });
    });

    chrome.contextMenus.onClicked.addListener(handleClick);
}

const handleClick = (info) => {
    const text = info.selectionText;
    const url = "http://maps.google.com/?q=" + text;
    chrome.tabs.create({ url: url });
}

const id = "show-on-maps-context-menu"
const title = "Show on Google Maps"
const context = "selection"

createContextMenu(id, title, context)