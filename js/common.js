document.addEventListener("DOMContentLoaded", function() {
    // ! Gallery slider
let mySwiper1 = new Swiper('.gallery__container', {
    slidesPerView: 2,
    slidesPerColumnFill: 'row',
    slidesPerColumn: 2,
    spaceBetween: 25,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swip__button--next',
      prevEl: '.swip__button--prev',
    },

    breakpoints: {
      500: {
        slidesPerView: 4,
        spaceBetween: 30,
      },

      600: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    }
});

  // ! project swiper
let mySwiper2 = new Swiper('.swiper-container', {
  slidesPerColumnFill: 'row',
  slidesPerColumn: 3,
  spaceBetween: 60,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.swip__button--next',
    prevEl: '.swip__button--prev',
  },
});

//  ! certificate swiper
let mySwiper3 = new Swiper('.certificates__container', {
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.swip__button--next',
    prevEl: '.swip__button--prev',
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 75,
    },
  }
});

// ! main page slider
let mySwiper4 = new Swiper('.banner__swiper', {
  effect : 'flip',
  delay: 2000,
  slidesPerView: 1,
  pagination: {
    el: '.banner__pages',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.swip__button--next',
    prevEl: '.swip__button--prev',
  },
});

// ! add "0" before pagination

function checkSlide(elem) {
  if(elem.innerText < 10) {
    elem.classList.add("add-zero");
  } 
  else  {
    elem.classList.remove("add-zero");
  }
};


const btnPrev = document.querySelector(".swip__button--prev"),
      btnNext = document.querySelector(".swip__button--next");


let numSlide = document.querySelector(".swiper-pagination-current"),
    numTotal = document.querySelector(".swiper-pagination-total");



if (numSlide) {
  checkSlide(numSlide);
  checkSlide(numTotal);

  btnPrev.addEventListener("click", function() {
    if(numSlide.innerText < 10) {
      numSlide.classList.add("add-zero");
    } 
    else  {
      numSlide.classList.remove("add-zero");
    }
  });

  btnNext.addEventListener("click", function() {
    if(numSlide.innerText < 10) {
      numSlide.classList.add("add-zero");
    } 
    else  {
      numSlide.classList.remove("add-zero");
    }
  });

  mySwiper1.on('slideChange', function () {
    if(numSlide.innerText < 10) {
      numSlide.classList.add("add-zero");
    } 
    else  {
      numSlide.classList.remove("add-zero");
    }
  });
};;

          

// ! Active link in page
    let navLInk = document.querySelectorAll(".nav__link");

    navLInk.forEach(elem => {
        if (elem.href == location.href) {
            elem.classList.add("select");
            elem.removeAttribute('href') ;
        } else {
            elem.classList.remove("select");
        }
    });

    // ! modale form 
    let btnForm = document.querySelector(".contacts__button");
    let wrapForm = document.querySelector(".modale-wrap");
    let exitForm = document.querySelector(".form__exit");
   if(btnForm) {
       exitForm.addEventListener("click", function () {
           wrapForm.classList.remove('active');
       });
   };

    document.addEventListener("click", function(evt) {
        if (evt.target == wrapForm && wrapForm.classList.contains('active')) {
            wrapForm.classList.remove('active');
            document.querySelector("body").style.overflow = 'auto';
        } else if (evt.target == btnForm) {
            wrapForm.classList.add('active');
        }
    });

    if(wrapForm) {
        document.addEventListener("scroll", function () {
            if(wrapForm.classList.contains('active') && window.screen.availWidth > 450) {
                document.body.classList.add("no-scroll");
            }else {
                document.body.classList.remove("no-scroll");
            }
        });
    };
    
    // ! accept Window
   let acceptExit = document.querySelector(".accept__exit");
   let acceptWrap = document.querySelector(".wrap");

   if(acceptExit) {
       acceptExit.addEventListener("click", function () {
              acceptWrap.classList.remove("active");
              document.body.classList.remove("no-scroll");
        });
   };
   
// ! mobile menu
   let btnMenu = document.querySelector(".hamburger");
   let menu = document.querySelector(".mobile");

   btnMenu.addEventListener("click", function () {
        btnMenu.classList.toggle("is-active");
        menu.classList.toggle("mobile--active");
        document.body.classList.toggle("no-scroll"); 
       });
     
     

     // !Отправка формы
 let phoneFields = document.querySelector(".phone");
 let im = new Inputmask("+38 (099) 999-99-99");
 im.mask(phoneFields);

 new JustValidate('.form', {
     rules: {
         name: {
             required: true,
             minLength: 2
         },
         email: {
             required: true,
             email: true
         },
         phone: {
             required: true
         }
     },
     messages: {
         name: {
             required: "False",
             minLength: "Короткое имя"
         },
         email: {
             required: "False",
             email: "Не верю"
         },
         phone: {
             required: "False"
         }
     },
 
     submitHandler: function (form) {
         let xhr = new XMLHttpRequest();

         xhr.open("POST", "mail.php", true);

         let FormData = new FormData(form);

         xhr.addEventListener("load", function() {
             if( xhr.readyState === 4) {
                 switch (xhr.status) {
                     case 200:
                         console.log("Form send");
                         form.reset();
                        //  acceptWrap.classList.add('active');
                         break;
                     case 404:
                         console.log("Warning");
                         break;
                     default:
                     console.log("Error server");
                     break;
                 }
             }
         });

         xhr.send(FormData);
     },
 });


;   

});