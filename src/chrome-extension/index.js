chrome.tabs.getCurrent((tab) => {
  chrome.tabs.update(tab.id, {
    url: 'https://byweekly.dev/',
    highlighted: true,
  });
});
