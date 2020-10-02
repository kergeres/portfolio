 function parallax(item, distance, speed) {
     const elem = document.querySelector(item);

     elem.style.transform = `translateY(${distance * speed}px)`;
     //  elem.style.transform = ` rotate(${distance * speed/2}deg)`;
 }

 window.addEventListener("scroll", function () {
     parallax(".negyvenegy", window.scrollY, 0.8);
     parallax(".negyven", window.scrollY, 0.3);
     parallax(".het", window.scrollY, 0.4);
     parallax(".ten", window.scrollY, 0.2);
     parallax(".twelve", window.scrollY, 0.9);
     parallax(".thirteen", window.scrollY, 0.8);
     parallax(".seventeen", window.scrollY, 0.6);

 });






 //  function proba() {
 //      let iti = document.querySelector(".hexagon");
 //      let append = "";
 //      for (let i = 0; i < 30; i++) {
 //          append += `
 //          ${iti}
 //          `;
 //          document.querySelector(".hexagn").innerHTML = append;
 //      }


 //  }

 //  proba()