function layoutHandler() {
    var styleLink = document.getElementById("pagestyle");
    if(window.innerWidth < 950) {
      // styleLink.setAttribute("href", "mobile.css");
      alert("데스크탑으로 방문해주세요. 데스크탑이셨다면 윈도우 크기를 넓혀주세요.");
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
