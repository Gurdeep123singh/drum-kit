var list=document.querySelectorAll(".drum");

for(var i=0;i<list.length;i++){
  list[i].addEventListener("mouseover", function() {
  var button_name=this.innerHTML;
  makeSound(button_name);

  animateButton(button_name);
});
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);

  animateButton(event.key);
});
function makeSound(button){
  var sound;
 switch(button){
   case "w":
     sound=new Audio("sounds/tom-1.mp3");
     sound.play();
     break;
   case "a":
     sound=new Audio("sounds/tom-2.mp3");
     sound.play();
     break;
   case "s":
     sound=new Audio("sounds/tom-3.mp3");
     sound.play();
     break;
   case "d":
     sound=new Audio("sounds/tom-4.mp3");
     sound.play();
     break;
   case "j":
     sound=new Audio("sounds/snare.mp3");
     sound.play();
     break;
   case "k":
     sound=new Audio("sounds/kick-bass.mp3");
     sound.play();
     break;
   case "l":
     sound=new Audio("sounds/crash.mp3");
     sound.play();
     break;
 }
}


function animateButton(button_name){
  var active_button= document.querySelector("."+button_name);
  active_button.classList.add("pressed");

  setTimeout(function () {
    active_button.classList.remove("pressed");
  }, 100);
}
