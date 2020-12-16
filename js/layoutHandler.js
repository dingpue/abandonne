function layoutHandler() {
    var styleLink = document.getElementById("pagestyle");
    if(window.innerWidth < 950) {
      // styleLink.setAttribute("href", "mobile.css");
      document.location= "mobile.html";
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
