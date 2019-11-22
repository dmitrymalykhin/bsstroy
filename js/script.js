$(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
        $("header").addClass("scroll-desktop-menu")
      } else {
        $("header").removeClass("scroll-desktop-menu")
      }
});

document.getElementById('hamburger').addEventListener('click', checkNav);
  window.addEventListener("keyup", function(e) {
    if (e.keyCode == 27) closeNav();
  }, false);

  function checkNav() {
    if (document.body.classList.contains('hamburger-active')) {
      closeNav();
    } else {
      openNav();
    }
  }

  function closeNav() {
    document.body.classList.remove('hamburger-active');
  }

  function openNav() {
    document.body.classList.add('hamburger-active');
  }
