document.addEventListener("DOMContentLoaded", function () {
  const getTitleButton = document.getElementById("get-title");
  const titleElement = document.getElementById("title");

  getTitleButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      titleElement.innerText = currentTab.title;
    });
  });
});
