// function myMap() {
//     var lat = document.getElementById("lat").innerHTML;
//     var lng = document.getElementById("lng").innerHTML;
//     var location = new google.maps.LatLng(lat, lng);
//     var map = new google.maps.Map(document.getElementsByClassName("tooltipmap")[0], {
//       center: new google.maps.LatLng(48.816800112516816, 2.4031037906076076),
//       zoom: 11,
//       controlSize: 22,
//     });
//     var marker = new google.maps.Marker({
//       position: location,
//       map: map,
//     });
//   }

var mapButton = document.querySelector('.map-button');
var map = document.querySelector('.pin-tooltip');

mapButton.addEventListener('click', function() {
    console.log('a');
    if (map.classList.contains('active')) {
      map.classList.remove('active');
    } else {
      map.classList.add('active');
    }
});


$(document).keyup( function(e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
        map.classList.remove('active');
   }
});

  
  // function myMap() {
  //   var mapProp= {
  //     center:new google.maps.LatLng(51.508742,-0.120850),
  //     zoom:5,
  //   };
  //   var map = new google.maps.Map(document.getElementsByClassName("tooltipmap")[0],mapProp);
  //   }
  
  