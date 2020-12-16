if (screen.width <= 700){
  document.location= "mobile.html";
} 

function layoutHandler() {
    var styleLink = document.getElementById("pagestyle");
    if(window.innerWidth < 950) {
      // styleLink.setAttribute("href", "mobile.css");
      alert("윈도우 크기를 넓히고 감상해주.");
    } else {
      styleLink.setAttribute("href", "desktop.css");
    }
  }
// window.onresize = layoutHandler;
// layoutHandler();

var doit;
window.onresize = function() {
  clearTimeout(doit);
  doit = setTimeout(function() {
    layoutHandler(); }, 100);
};
