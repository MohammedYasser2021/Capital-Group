let EnglishBtn = document.querySelector(".en_btn");
$(function () {
  // bars in navbar
  let bars = document.querySelector(".bars");
  let closeBtn = document.querySelector(".close");
  let links = document.querySelector(".links");

  bars.addEventListener("click", function () {
    links.style.transform = "scale(1)";
  });

  closeBtn.addEventListener("click", function () {
    links.style.transform = "scale(0)";
  });

  /* type writer */

  let headerTitle = document.querySelector(".header-title");
  let headerTitleText = headerTitle.dataset.heading;
  let headerTitleTextArr = headerTitleText.split("");

  let i = 0;

  const autoWriting = () => {
    headerTitle.innerHTML += headerTitleTextArr[i];
    i++;
    if (i > headerTitleTextArr.length) {
      headerTitle.innerHTML = "";
      i = 0;
    }
  };

  let autoWrite = setInterval(autoWriting, 300);

  // adjust header height
  $("header").height($(window).height() - $("nav").height());

  // scroll to sections
  $("header .icon-down").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(".about").offset().top,
      },
      500
    );
  });
  $(".about-link").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(".about").offset().top,
      },
      500
    );
  });
  $(".portfolio-link").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(".portfolio").offset().top,
      },
      500
    );
  });
  $(".testimonials-link").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(".testimonials").offset().top,
      },
      500
    );
  });
  $(".services-link").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(".tabs").offset().top,
      },
      500
    );
  });

  // testimonials
  let testimonialsItem = $(".testimonials-item");
  let x = 0;

  $(".next").on("click", function () {
    $(".testimonials-item").each(function () {
      $(this).css("display", "none");
    });
    if (x == testimonialsItem.length - 1) {
      x = 0;
    } else {
      x++;
    }

    $(testimonialsItem[x]).fadeIn(1000);
  });

  $(".prev").on("click", function () {
    $(".testimonials-item").each(function () {
      $(this).css("display", "none");
    });
    if (x == 0) {
      x = testimonialsItem.length - 1;
    } else {
      x--;
    }

    $(testimonialsItem[x]).fadeIn(1000);
  });
  // scroll to top
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 500) {
      $(".scroll-to-top").fadeIn(500);
    } else {
      $(".scroll-to-top").fadeOut(500);
    }
  });

  $(".scroll-to-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});

/////

let links = document.querySelectorAll(".nav-content .link span");
let headerP = document.querySelector(".header-content p");
let ParaDesc = document.querySelector(".about-desc");
let aboutHeading = document.querySelector(".about h2");
let portfolioHeading = document.querySelector(".portfolio .special-heading h2");
let tabsHeading = document.querySelector(".tabs .special-heading h2");
let contactHeading = document.querySelector(".contact .special-heading h2");
let contactHeadingLink = document.querySelector(".contact .contact-link");
let contactHeadingdata = document.querySelector(".contact .form-link");
let tabsSwitchLi = document.querySelectorAll(".tabs-switch li");
let tabsh3 = document.querySelectorAll(".tab-content h3");
let tabP = document.querySelectorAll(".tab-content p");
let testimonialsHeading = document.querySelector(
  ".testimonials .special-heading h2"
);
let footerDescOne = document.querySelector("footer .footer-desc-one");
let footerDescTwo = document.querySelector("footer .footer-desc-two");
let portfolioBtns = document.querySelectorAll(
  ".portfolio-overlay-content button"
);
EnglishBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (EnglishBtn.textContent == "EN") {
    EnglishBtn.textContent = "AR";
  } else {
    EnglishBtn.textContent = "EN";
  }

  links.forEach((ele) => {
    if (EnglishBtn.textContent == "EN") {
      ele.textContent = ele.parentElement.dataset.text_en;
      ele.parentElement.classList.add("en_before");
    } else {
      ele.textContent = ele.parentElement.dataset.text;
      ele.parentElement.classList.remove("en_before");
    }
  });
  if (EnglishBtn.textContent == "EN") {
    headerP.textContent = headerP.dataset.para_en;
  } else {
    headerP.textContent = headerP.dataset.para;
  }
  if (EnglishBtn.textContent == "EN") {
    ParaDesc.textContent = ParaDesc.dataset.desc_en;
  } else {
    ParaDesc.textContent = ParaDesc.dataset.desc;
  }
  if (EnglishBtn.textContent == "EN") {
    aboutHeading.textContent = aboutHeading.dataset.about_head_en;
  } else {
    aboutHeading.textContent = aboutHeading.dataset.about_head;
  }
  if (EnglishBtn.textContent == "EN") {
    portfolioHeading.textContent = portfolioHeading.dataset.portfolio_en;
  } else {
    portfolioHeading.textContent = portfolioHeading.dataset.portfolio;
  }
  if (EnglishBtn.textContent == "EN") {
    testimonialsHeading.textContent =
      testimonialsHeading.dataset.testimonials_en;
  } else {
    testimonialsHeading.textContent = testimonialsHeading.dataset.testimonials;
  }
  if (EnglishBtn.textContent == "EN") {
    footerDescOne.textContent = footerDescOne.dataset.footer_one_en;
  } else {
    footerDescOne.textContent = footerDescOne.dataset.footer_one;
  }
  if (EnglishBtn.textContent == "EN") {
    footerDescTwo.textContent = footerDescTwo.dataset.footer_two_en;
  } else {
    footerDescTwo.textContent = footerDescTwo.dataset.footer_two;
  }
  if (EnglishBtn.textContent == "EN") {
    tabsHeading.textContent = tabsHeading.dataset.tabs_en;
  } else {
    tabsHeading.textContent = tabsHeading.dataset.tabs;
  }
  if (EnglishBtn.textContent == "EN") {
    contactHeading.textContent = contactHeading.dataset.contact_en;
  } else {
    contactHeading.textContent = contactHeading.dataset.contact;
  }
  if (EnglishBtn.textContent == "EN") {
    contactHeadingLink.textContent = contactHeadingLink.dataset.contact_link_en;
  } else {
    contactHeadingLink.textContent = contactHeadingLink.dataset.contact_link;
  }
  if (EnglishBtn.textContent == "EN") {
    contactHeadingdata.textContent = contactHeadingdata.dataset.form_link_en;
  } else {
    contactHeadingdata.textContent = contactHeadingdata.dataset.form_link;
  }
  portfolioBtns.forEach((ele) => {
    if (EnglishBtn.textContent == "EN") {
      ele.textContent = ele.dataset.work_en;
    } else {
      ele.textContent = ele.dataset.work;
    }
  });
  tabsSwitchLi.forEach((ele) => {
    if (EnglishBtn.textContent == "EN") {
      ele.textContent = ele.dataset.tab_li_en;
    } else {
      ele.textContent = ele.dataset.tab_li;
    }
  });

  tabsh3.forEach((ele) => {
    if (EnglishBtn.textContent == "EN") {
      ele.textContent = ele.dataset.tab_content_en;
    } else {
      ele.textContent = ele.dataset.tab_content;
    }
  });

  tabP.forEach((ele) => {
    if (EnglishBtn.textContent == "EN") {
      ele.textContent = ele.dataset.tab_p_en;
    } else {
      ele.textContent = ele.dataset.tab_p;
    }
  });
});

/**/
// gallery
// create popup with the image

let ourGallery = document.querySelectorAll(".portfolio .portfolio-item img");
portfolioBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // create overlay element
    let overlay = document.createElement("div");
    // add class to overlay
    overlay.className = "popup-overlay";
    // append the overlay to the body
    document.body.appendChild(overlay);
    // create the popup box
    let popupBox = document.createElement("div");
    // add class to the popup box
    popupBox.className = "popup-box";
    // create the image
    let thePopupImage = document.createElement("img");
    // change src of image to the src of the clicked image

    ourGallery.forEach((img) => {
      if (img.dataset.key_img == btn.dataset.key_btn) {
        thePopupImage.src = img.src;
      }
    });

    // add image to popup box

    popupBox.appendChild(thePopupImage);
    // append the popup box to body
    document.body.appendChild(popupBox);
    // create close span
    let spanClose = document.createElement("span");
    // add classname to close span
    spanClose.className = "popup-close";

    //     // create close icon
    let spanCloseIcon = document.createElement("i");
    spanCloseIcon.className = "fa fa-times";

    // append spanCloseIcon to spanClose
    spanClose.appendChild(spanCloseIcon);

    // append close span to popup box
    popupBox.appendChild(spanClose);

    // on click on span close
    spanClose.addEventListener("click", function () {
      // remove popup box and popup overlay
      popupBox.remove();
      overlay.remove();
    });
    // on click on escape key on keyboard close the popupBox and overlay
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        popupBox.remove();
        overlay.remove();
      }
    });
  });
});

// tabs
$(".tabs-switch li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".tab-content div").hide();
  $("." + $(this).data("class")).fadeIn(500);
});

// whats app icon
$(window).on("scroll", function () {
  if ($(this).scrollTop() >= 500) {
    $(".whats").fadeIn(500);
  } else {
    $(".whats").fadeOut(500);
  }
});
// register icon
$(window).on("scroll", function () {
  if ($(this).scrollTop() >= 500) {
    $(".register").fadeIn(500);
  } else {
    $(".register").fadeOut(500);
  }
});
