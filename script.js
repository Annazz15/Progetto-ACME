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


if (!isCookieAccepted()) {
  document.querySelector('.cookie-banner').style.display = 'block'; 
}

