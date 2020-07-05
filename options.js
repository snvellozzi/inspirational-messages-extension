let page = document.getElementById('buttonDiv');
const kButtonColors = ['#6FCBEC', '#b19cd9', '#FFB6C1', '#FFFF99'];
function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let colorChange = document.createElement('button');
    colorChange.style.backgroundColor = item;
    colorChange.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      })
    });
    page.appendChild(colorChange);
  }
}
constructOptions(kButtonColors);

function save_options() {
  var color = document.getElementById('buttonDiv').value;
  chrome.storage.sync.set({
    choosenColor: color,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}
document.getElementById('save').addEventListener('click',
    save_options);