var file;
var takePicture = document.querySelector("#take-picture");
var showPicture = document.querySelector("#show-picture");

takePicture.onchange = function (event) {
  // Get a reference to the taken picture or chosen file
  var files = event.target.files,
  file;
  if (files && files.length > 0) {
    file = files[0];
    try{
      var URL = window.URL || window.webkitURL;
      var imgURL = URL.createObjectURL(file);
      showPicture.src = imgURL;
      URL.revokeObjectURL(imgURL);
    } catch(e){
      alert("Error");
    }
  }
};
