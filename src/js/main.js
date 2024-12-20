$(document).ready(function() {
    //слайдер - секция comfort
    if($(".swiper")){
        const swiper = new Swiper('.swiper', {
            loop: true,
            spaceBetween: 90,
            slidesPerView: 1,
            navigation: {
              nextEl: '.comfort__slider-next',
              prevEl: '.comfort__slider-prev',
            },
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            zoom: {
                maxRatio: 1.25,
                minRatio: 1
              },
            
          });
          swiper.slideTo(2)
    }
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
        if(i >= 3){
            $(this).hide()
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
})