function search() {
  var word = document.getElementById('lookup-term').value;
  
  // Clean current messages
  var ul = document.getElementById('results');
  ul.innerHTML = '';
  statusMsg('');

  if (word in data) {
    statusMsg(data[word].length+' words found within one edit of '+word+'.');

    for (var i = 0; i < data[word].length; i++) {
      var w = data[word][i];
      appendToUl(ul, w);
    }
  } else {
    statusMsg('No words within one edit of '+word+'. Word does not exist or is not similar to other words.');
  }
}

function linkSearch(word) {
  var lookupBox = document.getElementById('lookup-term');
  lookupBox.value = word;
  search();
}

function appendToUl(ul, toAppend) {
  var li = document.createElement('li');

  a = document.createElement('a');
  a.href = '#';
  a.setAttribute('onClick', 'linkSearch("'+toAppend+'")');
  li.appendChild(a);
    
  a.appendChild(document.createTextNode(toAppend));
  ul.appendChild(li);
}

function statusMsg(msg) {
  var stat = document.getElementById('status');
  stat.innerHTML = msg;
}
