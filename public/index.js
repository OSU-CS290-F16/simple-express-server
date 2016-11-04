var theButton = document.getElementById('the-button');
var theDiv = document.querySelector('.the-div');

theButton.addEventListener('click', function () {
  theDiv.classList.toggle('with-color');
})
