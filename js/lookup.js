function search() {
  var origWord = document.getElementById('lookup-term').value;
  var word = origWord.toLowerCase()
  var ul = document.getElementById('results');
  
  // Clean current messages
  ul.innerHTML = '';
  statusMsg('');

  if (word in data) {
    statusMsg(data[word].length+' words one edit from '+bold(origWord)+'.');

    data[word].forEach(function(w) {
      appendToUl(ul, w);
    });
  } else {
    statusMsg('No words within one edit of '+bold(origWord)+'.');
    var explanation = words.indexOf(word) > -1 ? 'Word is not similar to other words.' : 'Word is not known.'
    explanation += ' <a href="about.html#why-no-words">Why?</a>';
    statusMsg(explanation, true);
  }
}

function linkSearch(word) {
  document.getElementById('lookup-term').value = word;
  search();
}

function appendToUl(ul, toAppend) {
  // Create list item
  var li = document.createElement('li');

  // Create link
  a = document.createElement('a');
  a.href = '#';
  a.setAttribute('onClick', 'linkSearch("'+toAppend+'")');

  // Create text
  var text = document.createTextNode(toAppend);

  a.appendChild(text);
  li.appendChild(a);
  ul.appendChild(li);
}

function statusMsg(msg, append = false) {
  var stat = document.getElementById('status');
  msg = append ? stat.innerHTML + '<br>' + msg : msg;
  stat.innerHTML = msg;
}

function bold(word) {
  return '<strong>'+word+'</strong>';
}
