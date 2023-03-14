document.addEventListener("mousemove", function(event) {
    const bg = document.querySelector(".bg");
    const xPos = event.clientX;
    const yPos = event.clientY;
    console.log(xPos);console.log(yPos);
    bg.style.marginLeft = "calc("+xPos+"px - 375%)";
    bg.style.marginTop = "calc("+yPos+"px - 205%)";
    
});

const windowHeight = window.innerHeight;

const halfWindowHeight = windowHeight / 2;

// Fonction de redirection vers une autre page

function redirect() {

  window.location.replace("https://dwgs-code.github.io/index.html");

}

// Écouter l'événement de défilement

window.addEventListener("scroll", () => {

  // Récupérer la position de défilement actuelle

  const scrollPosition = window.scrollY;

  

  // Vérifier si la position de défilement est supérieure à la moitié de la hauteur de la fenêtre

  if (scrollPosition > halfWindowHeight) {

    // Si oui, rediriger vers la page spécifiée

    redirect();

  }

});
