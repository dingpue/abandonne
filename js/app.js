// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const navIntro = document.querySelector('.nav-intro');
//     const navWay = document.querySelector('.nav-way');

//     burger.addEventListener('click', () => {
//         navIntro.classList.toggle('nav-active');
//     });
// }
// navSlide();




var Homepage = Barba.BaseView.extend({
  namespace: 'homepage',
  onEnter: function() {
  // The new Container is ready and attached to the DOM.
  },
  onEnterCompleted: function() {
  // The Transition has just finished.
  console.log('e');

  if (typeof window.myMap === 'function') {
    window.myMap();
    console.log('aa');
  } 
  else {
    console.log('bb');
    window.myMap = () => {
      // create your map here using the Map API
      // Map, LatLng, InfoWindow, etc.
      var lat = document.getElementById("lat").innerHTML;
      var lng = document.getElementById("lng").innerHTML;
      var location = new google.maps.LatLng(lat, lng);
      var clat = document.getElementById("clat").innerHTML;
      var clng = document.getElementById("clng").innerHTML;
      var center = new google.maps.LatLng(clat, clng);
      var zm = parseInt(document.getElementById("zoom").innerHTML);
      var cS = parseInt(document.getElementById("cS").innerHTML);
      var map = new google.maps.Map(document.getElementsByClassName("tooltipmap")[0], {
        center: center,
        zoom: zm,
        controlSize: cS,
      });
      var marker = new google.maps.Marker({
        position: location,
        map: map,
      });
    };
  }

  let script1 = document.createElement('script');
  let script2 = document.createElement('script');
  var att1 = document.createAttribute('class'); 
  att1.value = "map-api";     
  var att2 = document.createAttribute('class'); 
  att2.value = "map-api";                           // Set the value of the class attribute
  script1.setAttributeNode(att1);  
  script2.setAttributeNode(att2);   
  script1.src = '/js/map.js';

  if ( document.documentElement.lang.toLowerCase() === "fr" || document.documentElement.lang.toLowerCase() === "en") {
     script2.src = '';
  } else if ( document.documentElement.lang.toLowerCase() === "kr" ) {
     script2.src = '';
  }
  document.getElementsByClassName('barba-container')[0].appendChild(script1);  //map button
  document.getElementsByClassName('barba-container')[0].appendChild(script2);  //api
  
  },
  onLeave: function() {
  // A new Transition toward a new page has just started.
    // let script = document.getElementsByClassName('map-api');
    // var script1 = script[0];
    // var script2 = script[1];
    // script1.remove();
    // script2.remove();
    // console.log('d');
  },
  onLeaveCompleted: function() {
  // The Container has just been removed from the DOM.
  }
});
// Don't forget to init the view!
Homepage.init();


Barba.Pjax.start();

// Barba.Dispatcher.on('newPageReady', function(currentStatus) {
//   const link = currentStatus.url.split(window.location.origin)[1].substring(1); // get path of current page

//   const navigation             = document.querySelector('.navigation');
//   const navigationLinks        = navigation.querySelectorAll('.navigation__link');
//   const navigationLinkIsActive = navigation.querySelector(`[href="${link}"]`);

//   Array.prototype.forEach.call(navigationLinks, (navigationLink) => navigationLink.classList.remove('is-active')); // remove CSS class 'is-active' from all .navigation__links

//   navigationLinkIsActive.classList.add('is-active'); // add CSS class to current .navigation__link

// });

Barba.Dispatcher.on('newPageReady', function(newStatus, oldStatus, container, html) {
  if (screen.width <= 700){
    document.getElementById("pagestyle").setAttribute("href", "mobile.css"); 
  }  else {
    document.getElementById("pagestyle").setAttribute("href", "desktop.css"); 
  }

  if (lastClickEl.getAttribute('id') === 'lang-kr') {
    document.documentElement.lang = 'kr';
  } else if (lastClickEl.getAttribute('id') === 'lang-fr') {
    document.documentElement.lang = 'fr';
  } else if (lastClickEl.getAttribute('id') === 'lang-en') {
    document.documentElement.lang = 'en';
  }
  
  
  const navs = $(html).find('[name="data-barba-update"]') // New ones
  $('[name="data-barba-update"]').each((i,el) => $(el).html($(navs[i]).html())) // Replace each old ones
});


let lastClickEl;
Barba.Dispatcher.on('linkClicked', (el) => {
  lastClickEl = el;
});



function moveToPage() {

  var keymap = {};

  keymap[37] = "#prev";
  keymap[39] = "#next"; 

  $(document).on("keyup", function(event) {
      var href;
      var selector = keymap[event.which];
      lastClickEl = document.createElement('a');

      // if the key pressed was in our map, check for the href
      if (selector == "#prev") {
          href = $(selector).attr("href");
          lastClickEl.setAttribute('id', 'prev');
          if (href) {
            Barba.Pjax.goTo(href);
          }

      } else if (selector == "#next") {
          href = $(selector).attr("href");
          lastClickEl.setAttribute('id', 'next');
          if (href) {
              // navigate where the link points
              // window.location = href;
              Barba.Pjax.goTo(href);
          }
      }
  });
}

moveToPage();




var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */

    return $(this.oldContainer).css({
      position: 'absolute',
      top: '45',
      left: '0'}).animate({ opacity: 0 }, 600 ).promise();
  },

  fadeIn: function() {

    $(window).scrollTop(0);

    this.newContainer.classList.add("slide-in");

    var that = this;
    
    this.newContainer.addEventListener('animationend', function() {
      that.newContainer.classList.remove('slide-in');
      that.done();
    });
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */

    // var _this = this;
    // var $el = $(this.newContainer);

    // $(this.oldContainer).hide();

    // $el.css({
    //   visibility : 'visible',
    //   opacity : 0
    // });

    // $el.animate({ opacity: 1 }, 400, function() {
    //   /**
    //    * Do not forget to call .done() as soon your transition is finished!
    //    * .done() will automatically remove from the DOM the old Container
    //    */

    //   _this.done();
    // });
  },

  valid: function() {
    let next = lastClickEl.getAttribute('id');
    return next === 'next';
  }
});

var NormalTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
  },

  fadeOut: function() {

    return $(this.oldContainer).css({
      position: 'absolute',
      top: '45',
      left: '0'}).promise();
  },

  fadeIn: function() {
    $(window).scrollTop(0);
    var that = this;
    that.done();
  },

  valid: function() {
    // let prev = Barba.HistoryManager.prevStatus();
    let next = lastClickEl.getAttribute('id');
    return next === 'prev';
  //   return prev.namespace === 'about' || next === 'about.html'
  //  || prev.url === 'http://127.0.0.1:5500/contact.html' || next === 'contact.html';
  }
});


/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */
  if (FadeTransition.valid()) {
    return FadeTransition;
  }
  else { 
    return NormalTransition;
  }
};



//bullets 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.innerWidth < 700) {  
    // // var dh = document.body.scrollHeight; //2118
    // var thr1 = document.body.scrollHeight * 0.5 ;  
    // var thr2 = document.body.scrollHeight * 0.9 ; 
    // if ( (document.body.scrollTop < thr2 && document.body.scrollTop > thr1) || (document.documentElement.scrollTop < thr2 && document.documentElement.scrollTop > thr1) ) {
    // // if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
    //   document.getElementsByClassName("bullets")[0].style.opacity = "1" ;  //color
    // } else {
    //   document.getElementsByClassName("bullets")[0].style.opacity = "0";
    // }
  }
  else {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementsByClassName("bullets")[0].style.opacity = "0" ;
    } else {
      document.getElementsByClassName("bullets")[0].style.opacity = "1";
    }
  }

 }


// encadre
function on() {
  if (window.innerWidth < 700) {  
    document.getElementsByClassName("overlay")[0].style.display = "flex";
    // document.getElementsByClassName("content")[0].style.position = "fixed";
    // document.getElementsByClassName("bullets")[0].style.position = "fixed";
    window.onscroll = function() {};
    $(document).off(moveToPage());
  }
  else {
    document.getElementsByClassName("overlay")[0].style.display = "flex";
    document.getElementsByClassName("content")[0].style.position = "fixed";
    document.getElementsByClassName("bullets")[0].style.position = "fixed";
    window.onscroll = function() {};
    $(document).off(moveToPage());
  }
}

function off() {
  if (window.innerWidth < 700) {  
    document.getElementsByClassName("overlay")[0].style.display = "none";
    document.getElementsByClassName("content")[0].style.position = "relative";
    document.getElementsByClassName("bullets")[0].style.position = "relative";
    window.onscroll = function() {scrollFunction()};
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    $(document).on(moveToPage());
  }
  else {
    document.getElementsByClassName("overlay")[0].style.display = "none";
    document.getElementsByClassName("content")[0].style.position = "relative";
    document.getElementsByClassName("bullets")[0].style.position = "absolute";
    window.onscroll = function() {scrollFunction()};
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $(document).on(moveToPage());
  }
}


function burger(x) {
  x.classList.toggle("change");
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function regionsInCity(x) {
  var x = document.getElementsByClassName("footer-regions")[0];
  var y = document.querySelector("h2");
  // if (x.style.display === "flex" && y.style.display === "block") {   
  //   x.style.display = "none";
  //   y.style.display = "none";
  // } else {
  //   x.style.display = "flex";
  //   y.style.display = "block";
  // }
  if (x.style.display === "block" && y.style.display === "block") {   
    x.style.display = "none";
    y.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "block";
  }
}


// /* 새로고침 */ 
// window.onbeforeunload = function () {
//   window.scrollTo(0,0);
// };
