function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
};

function increaseRankBy(n) {
  var lists = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (var i = 0; i < lists.length; i++) {
    lists[i].innerHTML = (parseInt(lists[i].innerHTML, 10) + parseInt(n, 10))
  }
};

function deepestChild() {
  var list = document.querySelector('div#grand-node').querySelectorAll('div');

  return list[list.length - 1];
};
