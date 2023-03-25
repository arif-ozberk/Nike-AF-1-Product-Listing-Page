
//NAVBAR ACTIVE
let hamburgerButton = document.querySelector(".hamburger-btn");
let navbarLinks = document.querySelector(".nav-links");
let links = document.querySelectorAll(".nav-links li");

hamburgerButton.addEventListener("click", ()=> {
    navbarLinks.classList.toggle("navbar-active");

    links.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = "";
        }
        else {
            link.style.animation = `link-slide 0.5s forwards ${index / 7 + 0.22}s`;
        }
    })
});


//MOCKUP CLICK
let smallImages = document.querySelectorAll(".small-images img");
let mainMockup = document.querySelector(".main-mockup");

smallImages.forEach((image, index) => {
    image.addEventListener("click", ()=> {

        mockupActiveClear();
        image.classList.add("small-mockup-active");

        if(index == 0){
            mainMockup.setAttribute("src", "images/mockup-img-1.jpg")
        }
        else if(index == 1){
            mainMockup.setAttribute("src", "images/mockup-img-2.jpg")
        }
        else if(index == 2){
            mainMockup.setAttribute("src", "images/mockup-img-3.jpg")
        }
        else if(index == 3){
            mainMockup.setAttribute("src", "images/mockup-img-4.jpg")
        }
    });
});


function mockupActiveClear() {         // This func removes active states form small mockups
    smallImages.forEach(img => img.classList.remove("small-mockup-active"));
};


//CART COUNT
let cartCountPlus = document.querySelector(".cart-count-plus");
let cartCountMinus = document.querySelector(".cart-count-minus");
let cartCountDisplay = document.querySelector(".cart-count");

let cartCount = 0;

cartCountPlus.addEventListener("click", ()=> {
    cartCount ++;
    cartCountDisplay.textContent = cartCount;
});

cartCountMinus.addEventListener("click", ()=> {
    if(cartCount == 0) return;
    cartCount --;
    cartCountDisplay.textContent = cartCount;
});
