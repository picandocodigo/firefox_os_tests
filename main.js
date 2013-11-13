var event = document.getElementById("vibrate");
event.addEventListener("click", function(){
  vibrate = window.navigator.vibrate(200);
  if (!vibrate){
    alert("false");
  }
}, false);