$(function () {
  $(".menu a, .header__scroll-icon, .logo, .footer__link").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор блока с атрибута href
    let id = $(this).attr("href");
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    let top = null;
    if (id === "#home") {
      // не делает отступ при скроле на хедер
      top = $(id).offset().top;
    } else {
      top = $(id).offset().top - 50;
    }

    //анимируем переход на расстояние - top за 1000 мс
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  // Активация бургер меню
  $(".menu__btn, .menu a").on("click", function () {
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".menu__list").toggleClass("menu__list--active");
  });

  // слайдер
  $(".blog__slider").slick({
    arrows: false,
    dots: true,
  });

  // галерея
  const mixer = mixitup(".portfolio__gallery");

  // волшебное плавное меню
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".header__top").addClass("fixed");
    } else {
      $(".header__top").removeClass("fixed");
    }
  });
});
