function yellow(color){
  document.body.style.background = color;
  document.getElementsByClassName("main").style.color = "black";
}


function blue(color){
  document.body.style.background = color;
}

function pink(color){
  document.body.style.background = color;
}

function white(color){
  document.body.style.background = color;
}

function black(color){
  document.body.style.color = color;
}

function yellowColor(){
  document.querySelectorAll("p").style.colour = 'black';
}

var  ylw = document.getElementsByClassName('yellow');

ylw.addEventListener("click", yellowColor);
