AOS.init();




document.addEventListener('DOMContentLoaded', (event) => {
    const li1 = document.getElementById('li1');
    const d1 = document.getElementById('d-1');

    li1.addEventListener('mouseenter', () => {
        d1.style.display = 'block';
    });

    li1.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!d1.matches(':hover')) {
                d1.style.display = 'none';
            }
        }, 200);
    });

    d1.addEventListener('mouseleave', () => {
        d1.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const li2=document.getElementById("li2");
    const d2=document.getElementById("d-2");

    li2.addEventListener("mouseenter", () =>{
        d2.style.display = "block";
    });

    li2.addEventListener("mouseleave", () => {
            setTimeout(() =>{
                if (!d2.matches(":hover")) {
                    d2.style.display = "none";
                }
            },200)
        }); 

        d2.addEventListener("mouseleave", () =>{
            d2.style.display = "none";
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const li3=document.getElementById("li3");
    const d3=document.getElementById("d-3");

    li3.addEventListener("mouseenter", () =>{
        d3.style.display = "block";
    });

    li3.addEventListener("mouseleave", () => {
            setTimeout(() =>{
                if (!d3.matches(":hover")) {
                    d3.style.display = "none";
                }
            },200)
        }); 

        d3.addEventListener("mouseleave", () =>{
            d3.style.display = "none";
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const li5=document.getElementById("li5");
    const d5=document.getElementById("d-5");

    li5.addEventListener("mouseenter", () =>{
        d5.style.display = "block";
    });

    li5.addEventListener("mouseleave", () => {
            setTimeout(() =>{
                if (!d5.matches(":hover")) {
                    d5.style.display = "none";
                }
            },200)
        }); 

        d5.addEventListener("mouseleave", () =>{
            d5.style.display = "none";
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const li6=document.getElementById("li6");
    const d6=document.getElementById("d-6");

    li6.addEventListener("mouseenter", () =>{
        d6.style.display = "block";
    });

    li6.addEventListener("mouseleave", () => {
            setTimeout(() =>{
                if (!d6.matches(":hover")) {
                    d6.style.display = "none";
                }
            },200)
        }); 

        d6.addEventListener("mouseleave", () =>{
            d6.style.display = "none";
    });
});


// todo  
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
