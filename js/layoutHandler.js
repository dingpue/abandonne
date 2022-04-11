if (screen.width <= 700){
  // document.location= "mobile.html";
  document.getElementById("pagestyle").setAttribute("href", "/mobile.css");
} else {   
    if (window.innerWidth < 700 ) {
//       document.location= "/desktop.html";
    //   document.getElementById("pagestyle").setAttribute("href", "/desktop.css");
    //   alert("윈도우 크기를 넓히고 감상해주세요.");
    // }
    // else {
    //   document.getElementById("pagestyle").setAttribute("href", "/desktop.css");
     }
} 



// function layoutHandler() {
//   var styleLink = document.getElementById("pagestyle");
//   if (screen.width > 700){  //desktop
//     if(window.innerWidth < 950) {
//       // $(".image").removeAttr("style")
//       // styleLink.setAttribute("href", "mobile.css");
//       // loadScriptFile("/js/app-mobile.js");
//       alert("윈도우 크기를 넓히고 감상해주세요.");
//     // if (window.innerWidth < 950){
//     //   document.location= "mobile.html";
//     } else {
//       // styleLink.setAttribute("href", "desktop.css");
//       // loadScriptFile("/js/app.js");
//     }
//   }
// }


// var doit;
// window.onresize = function() {
//   clearTimeout(doit);
//   doit = setTimeout(function() {
//     layoutHandler(); }, 100);
// };


