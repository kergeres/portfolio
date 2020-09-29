 function parallax(item, distance, speed) {
     const elem = document.querySelector(item);

     elem.style.transform = `translateY(${distance * speed}px)`;
 }

 window.addEventListener("scroll", function () {
     parallax(".eleven", window.scrollY, 0.5);
     parallax(".fourteen", window.scrollY, 0.4);
     parallax(".sixteen", window.scrollY, 1.5);
     parallax(".ten", window.scrollY, 0.2);
     parallax(".twelve", window.scrollY, 0.9);
     parallax(".thirteen", window.scrollY, 0.8);
     parallax(".seventeen", window.scrollY, 0.6);

 });

 console.log("sega");