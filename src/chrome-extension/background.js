chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://byweekly.dev' });
});
