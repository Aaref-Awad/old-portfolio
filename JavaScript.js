// Aaref Awad
// 041099060

var divIndex = 0;

function changeDiv(n) {
  showDivs(divIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("project-slid");
  if (n >= x.length) {
    divIndex = 0
  } 
  if (n < 0){
    divIndex = x.length-1
  }
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
  }
  x[divIndex].style.display = "flex";  
}

window.onload = function() {
  showDivs(divIndex);

  document.getElementById('next-button').addEventListener('click', function() {
    changeDiv(1); // for next button, index should increase
  });

  document.getElementById('previous-button').addEventListener('click', function() {
    changeDiv(-1); // for previous button, index should decrease
  });
};