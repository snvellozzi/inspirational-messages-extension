//sets color of button on popup
let colorChange = document.getElementById('colorChange');


chrome.storage.sync.get('color', function(data) {
  colorChange.style.backgroundColor = data.color;
  colorChange.setAttribute('value', data.color);

});

colorChange.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };

