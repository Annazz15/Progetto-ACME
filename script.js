var scrollButton = document.getElementById("scroll-top");

window.addEventListener("scroll", function () {
  var scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  var windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight ||
    0;

  var documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  if (scrollPosition > documentHeight - windowHeight - 200) {
    scrollButton.style.opacity = "1";
    scrollButton.style.visibility = "visible";
  } else {
    scrollButton.style.opacity = "0";
    scrollButton.style.visibility = "hidden";
  }
});

scrollButton.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Funzione per nascondere la finestra dei cookie
function hideCookieWindow() {
  var cookieWindow = document.getElementById("cookie-window");
  cookieWindow.style.display = "none";
}

// Funzione per gestire il click sul pulsante "Accetta"
function handleAccept() {
  // Puoi eseguire altre azioni qui, come impostare i cookie o eseguire azioni personalizzate
  hideCookieWindow();
}

// Funzione per gestire il click sul pulsante "Rifiuta"
function handleReject() {
  // Puoi eseguire altre azioni qui, come bloccare i cookie o eseguire azioni personalizzate
  hideCookieWindow();
}

// Aggiungi gli event listener ai pulsanti
document
  .getElementById("accept-button")
  .addEventListener("click", handleAccept);
document
  .getElementById("reject-button")
  .addEventListener("click", handleReject);
