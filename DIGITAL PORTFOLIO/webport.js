document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById("mainImage");
    
    mainImage.addEventListener("mouseover", function() {
      mainImage.style.transition = "opacity 0.5s ease-in-out";
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.src = "CAI2.png";
        mainImage.style.opacity = 1;
      }, 500);
    });
    
    mainImage.addEventListener("mouseout", function() {
      mainImage.style.transition = "opacity 0.5s ease-in-out";
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.src = "CAI1.png";
        mainImage.style.opacity = 1;
      }, 500);
    });
  
    const texts = ["Cai", "Caliley", "Cali", "Caicai"];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const newTextDelay = 2000; 
    const rotatingTextElement = document.getElementById("rotating-text");
  
    function type() {
      if (charIndex < texts[index].length) {
        rotatingTextElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        rotatingTextElement.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        index = (index + 1) % texts.length;
        setTimeout(type, typingSpeed);
      }
    }
  
    setTimeout(type, newTextDelay + 250);
  });
  
  const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

  
