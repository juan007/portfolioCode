// importing the sass stylesheet for bundling
import "./../sass/styles.scss";

let slideIndex = 1;

function plusSlides(n) 
{
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1;}    
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function onPrev(e)
{
    plusSlides(-1);
}

function onNext(e)
{
    plusSlides(1);
}

function onDot1(e)
{
    currentSlide(1);
}

function onDot2(e)
{
    currentSlide(2);
}

function onDot3(e)
{
    currentSlide(3);
}

function onDot4(e)
{
    currentSlide(4);
}

function onDot5(e)
{
    currentSlide(5);
}

function main()
{
    showSlides(slideIndex);
    document.getElementById("btnPrev").addEventListener("click",onPrev);
    document.getElementById("btnNext").addEventListener("click",onNext);
    document.getElementById("btnDot1").addEventListener("click",onDot1);
    document.getElementById("btnDot2").addEventListener("click",onDot2);
    document.getElementById("btnDot3").addEventListener("click",onDot3);
    document.getElementById("btnDot4").addEventListener("click",onDot4);
    document.getElementById("btnDot5").addEventListener("click",onDot5);
}

main();