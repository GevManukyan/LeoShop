////////ANIMATIONS//////////////////////////
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  
}


//////////////////////////////////////////////////////////////////////////


let plus = document.querySelectorAll(".buyPlus")
let cart = document.getElementById("cart")
let inp = document.querySelectorAll(".buyinput")
let piece = document.querySelectorAll(".piece")
let num = 0
let num2 = 0
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function() {
    for (let j = 0; j < inp.length; j++) {
      if(inp[j].value!=" " && inp[j].value>0){

        let a = Number(inp[j].value)
        num = num + a
        cart.innerText = `CART(${num})`
        inp[j].value= " "

        num2 = j
        for (let index = 0; index < piece.length; index++) {
          if(num2 === index){
          const element = piece[index].innerText;
          let num3 = element.slice(0,2)
          num3= num3-a
         piece[index].innerText=`${num3} Pieces`
        }
        }
       
    }}
  });
}

console.clear()