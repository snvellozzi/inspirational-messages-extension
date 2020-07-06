//tests button color & functionality
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#6FCBEC'}, function() {
        console.log("hello");
    });

    
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'developer.chrome.com'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
  });