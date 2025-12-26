chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.url && changeInfo.url.includes("youtube.com/shorts/")) {
    chrome.tabs.update(tabId, {
      url: `https://www.youtube.com/`,
    });
  }
});
