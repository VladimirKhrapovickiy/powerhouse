$(document).ready(function() {
    //popup
    const $popup = $(".popup-form__container");
    const $callPopupBnts = $(".get-form-btn");
    const $closeFormBtn = $(".popup-form__close")
    $callPopupBnts.each(function(){
        $(this).on("click", function(event){
            event.preventDefault();
            $popup.show();
        })
    })
    $closeFormBtn.on("click", function(){
        $popup.hide();
    })
    const modal = document.querySelector(".popup-form");
    document.addEventListener("mousedown", (e) => {
      if (!modal.contains(e.target)) {
        $popup.hide();
      }
    });

    //слайдер - секция comfort
    if($(".swiper")){
        let slides = 1;
        let space = 90;
        if(window.screen.width <= 750){
            slides = 2;
            space = 21;
        }
        if(window.screen.width <= 450){
            slides =1;
            space = 21;
        }
        const swiper = new Swiper('.swiper', {
            loop: true,
            spaceBetween: space,
            slidesPerView: slides,
            navigation: {
              nextEl: '.comfort__slider-next',
              prevEl: '.comfort__slider-prev',
            },
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            pagination: {
                el: '.swiper-pagination',
              },          
          });
          swiper.slideTo(2)
    }
        //галерея 
        var lightbox = new PhotoSwipeLightbox({
            gallery: '.test-gallery',
            children: 'a',
            // dynamic import is not supported in UMD version
            pswpModule: PhotoSwipe 
          });
          lightbox.init();
    // кнопки показать еще
    const moreProgramm = $(".btn-more-programm");
    const programms = $(".programm");
    programms.each(function(i){
        if(i >= 4){
            $(this).hide()
        }
    })
    if(moreProgramm){
        moreProgramm.on("click", function(){
            programms.each(function(){
                    $(this).show()
            })
            moreProgramm.hide()
        })
    }
    const moreTrainers = $(".btn-more-trainers");
    const trainers = $(".trainer");
    trainers.each(function(i){
        if(window.screen.width >= 750){
            if(i >= 3){
                $(this).hide()
            }
        }else{
            if(i >= 4){
                $(this).hide()
            }
        }

    })
    if(moreTrainers){
        moreTrainers.on("click", function(){
            trainers.each(function(){
                    $(this).show()
            })
            moreTrainers.hide()
        })
    }
    //список залов в форме
    const gymInput = $("#visit-form-gym");
    if(gymInput){
        const gymInputList = $(".gyms__list");
        const gymItems = $(".gym__item");
        gymInput.on("click", function(){
            console.log("click")
            gymInputList.slideToggle();
        })
        gymItems.each(function(){
            $(this).on("click", function(){
                gymInput.val($(this).text());
                gymInputList.slideToggle();
            })
        })
        
    }
})