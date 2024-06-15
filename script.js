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
// todo
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
// todo
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
// todo
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
// todo
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

// ?
const i2=document.querySelector("#cup2");
const choseImage1=document.querySelector(".chose-image1");
i2.onclick=function() {
    choseImage1.style.display="none";
}
const i1=document.querySelector("#cup1");
const choseImage2=document.querySelector(".chose-image2");
i1.onclick=function() {
    choseImage2.style.display="none";
}

// * =============================
const wrapper=document.querySelector(".wrapper");
const carousel=document.querySelector(".carousel");
const arrowBtns=document.querySelectorAll(".wrapper i");
const firstCardWidth=carousel.querySelector(".card").offsetWidth;
const carouselChildrens=[...carousel.children];
let isDragging = false, startX, startScrollLeft, timeoutId;
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
});
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
});
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? - firstCardWidth : firstCardWidth;
    })
})
const dragStart = (e) =>{
    isDragging = true;
    carousel.classList.add("dragging");  
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;           
}
const dragging= (e)=>{
    if(!isDragging) return;
    carousel.scrollLeft =startScrollLeft - (e.pageX-startX);
}
const dragStop= ()=>{
    isDragging=false;
    carousel.classList.remove("dragging")
}
const autoPlay = () =>{
    if(window.innerWidth < 800) return;
    timeoutId = setTimeout(()=>carousel.scrollLeft += firstCardWidth, 2000)
}
autoPlay();
const infiniteScroll= ()=> {
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add("no-transition");
        carousel.scrollLeft= carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", ()=> clearTimeout (timeoutId));
carousel.addEventListener("mouseleave", autoPlay);