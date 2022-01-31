if (screen.width <= 700){
  // document.location= "mobile.html";
  document.getElementById("pagestyle").setAttribute("href", "mobile.css");
} else {   
    if (window.innerWidth < 700 ) {
      document.getElementById("pagestyle").setAttribute("href", "desktop.css");
      alert("윈도우 크기를 넓히고 감상해주세요.");
    }
    else {
      document.getElementById("pagestyle").setAttribute("href", "desktop.css");
    }
} 

// // && window.innerHeight < 600
// if (window.innerWidth < 700 ) {   
//   document.getElementById("pagestyle").setAttribute("href", "mobile.css");
//   alert("윈도우 크기를 넓히고 감상해주세요.");
//   // loadScriptFile("/js/app-mobile.js");
// } else {   
//   document.getElementById("pagestyle").setAttribute("href", "desktop.css");
//   // loadScriptFile("/js/app.js");
// }


  // loadScriptFile func
  // function loadScriptFile(src){
  //   const $script = $('<script>');
  //   $script.attr('type', 'text/javascript');
  //   $script.attr('src', src);
  //   // append the <script> element to <head>
  //   $script.appendTo('head');
  // }


// function layoutHandler() {
//     var styleLink = document.getElementById("pagestyle");
//     if (screen.width > 700){
//       if(window.innerWidth < 950) {
//         // $(".image").removeAttr("style")
//         // styleLink.setAttribute("href", "mobile.css");
//         // loadScriptFile("/js/app-mobile.js");
//         alert("윈도우 크기를 넓히고 감상해주세요.");
//       // if (window.innerWidth < 950){
//       //   document.location= "mobile.html";
//       } else {
//         // styleLink.setAttribute("href", "desktop.css");
//         // loadScriptFile("/js/app.js");
//       }
//     }
//   }
// // window.onresize = layoutHandler;
// // layoutHandler();



function layoutHandler() {
  var styleLink = document.getElementById("pagestyle");
  if (screen.width > 700){  //desktop
    if(window.innerWidth < 950) {
      // $(".image").removeAttr("style")
      // styleLink.setAttribute("href", "mobile.css");
      // loadScriptFile("/js/app-mobile.js");
      alert("윈도우 크기를 넓히고 감상해주세요.");
    // if (window.innerWidth < 950){
    //   document.location= "mobile.html";
    } else {
      // styleLink.setAttribute("href", "desktop.css");
      // loadScriptFile("/js/app.js");
    }
  }
}


var doit;
window.onresize = function() {
  clearTimeout(doit);
  doit = setTimeout(function() {
    layoutHandler(); }, 100);
};




// var something = (function() {
//   var executed = false;
//   return function() {
//       if (!executed) {
//           executed = true;
//           // do something
//           if (screen.width < 1300){
//             document.location= "mobile.html";
//           } else {
//             document.location= "index.html";
//           };
//       };
//   };
// })();

// something(); // "do something" happens
// something(); // nothing happens



