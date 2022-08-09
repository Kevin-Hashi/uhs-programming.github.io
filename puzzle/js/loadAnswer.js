document.addEventListener('DOMContentLoaded', function () {
  const answer = document.getElementById('answer_wrapper');
  const DParser = new DOMParser();
  const XSerializer = new XMLSerializer();
  fetch('../answer.html')
    .then((res) => res.text())
    .then((text) => {
      return DParser.parseFromString(text, 'text/html');
    })
    .then((dom) => answer.insertAdjacentHTML('afterbegin', XSerializer.serializeToString(dom.getElementsByTagName('body').item(0)).replace(/<\/?body>/, '')))
});