function search() {
  var word = document.getElementById('lookup-term').value;
  var ul = document.getElementById('results');
  ul.innerHTML = '';

  if (word in data) {
    for (var i = 0; i < data[word].length; i++) {
      var w = data[word][i];
      appendToUl(ul, w);
    }
  } else {
    appendToUl(ul, 'No words within one edit of '+word+'.');
    appendToUl(ul, 'Word does not exist or is not similar to other words.');
  }
}

function appendToUl(ul, toAppend) {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(toAppend));
  ul.appendChild(li);
}
