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

function setCookieAccepted() {
  document.cookie = "cookieAccepted=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
  document.body.classList.add('cookie-accepted');
}


var acceptButton = document.querySelector('.cookie-button:nth-of-type(1)');
var rejectButton = document.querySelector('.cookie-button:nth-of-type(2)');

acceptButton.addEventListener('click', function() {
  setCookieAccepted(); 
  document.querySelector('.cookie-banner').style.display = 'none'; 
});

rejectButton.addEventListener('click', function() {
  
  document.querySelector('.cookie-banner').style.display = 'none'; 
});


if (!isCookieAccepted()) {
  document.querySelector('.cookie-banner').style.display = 'block'; 
}

