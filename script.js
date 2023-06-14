// Ottenere l'elemento della freccia
var scrollButton = document.getElementById("scroll-top");

// Aggiungere un ascoltatore di evento allo scroll della finestra
window.addEventListener("scroll", function () {
  // Calcolare la distanza dal top della finestra
  var scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  // Calcolare l'altezza della finestra visualizzabile
  var windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight ||
    0;

  // Calcolare l'altezza totale del documento
  var documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  // Verificare se la posizione dello scroll è vicina al fondo della pagina
  if (scrollPosition > documentHeight - windowHeight - 200) {
    scrollButton.style.opacity = "1";
    scrollButton.style.visibility = "visible";
  } else {
    scrollButton.style.opacity = "0";
    scrollButton.style.visibility = "hidden";
  }
});

// Aggiungere un ascoltatore di evento al clic sulla freccia
scrollButton.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
