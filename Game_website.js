let accq = document.getElementsByClassName("faq_btn");
    let q;
    
    for (q = 0; q < accq.length; q++) {
        accq[q].addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }


var acc = document.getElementsByClassName("button-content1");
var i;

for (i = 0; i < acc.length; i++) 
  {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      panel.style.justifycontent="center"
    }
  });
}

const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;

for(let test=0; test<indicatorImages.length; test++){
  indicatorImages[test].addEventListener("click", function(){

    for(let monials=0; monials<indicatorImages.length; monials++){
      indicatorImages[monials].classList.remove("active");
    }
    this.classList.add("active");
    const id=this.getAttribute("data-id");
    for(let z=0; z<slides.length; z++){
      slides[z].classList.remove("active");
    }

    slides[id].classList.add("active");
  })
}