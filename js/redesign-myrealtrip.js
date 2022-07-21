$("document").ready(function(){
    // alert()


    let offset = []
    for(let k = 0; k < $(".section").length; k++){
      offset.push($(".section").eq(k).offset().top)
    }

    //사이드탑버튼
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 650){
            $(".side-top").fadeIn()
        }else{
            $(".side-top").fadeOut()
        }

      
        $(".position .position-wrap ul li").removeClass("on")
        if(pos >= offset[3] || pos < offset[4]){
          $(".position .position-wrap .indicator ul li").eq(2).addClass("on")
          $(".position .position-wrap .menu ul li").eq(2).addClass("on")
        }



        
    }) //scroll
    
    $(".side-top").click(function(){
        $("html, body").stop().animate({
          scrollTop: 0
        }, 500)
       })



    //코로나 띠배너 팝업
    $(".popup .popup-btn").click(function(){
        $(".popup .popup-box").slideToggle()
        $(".popup-btn a").toggleClass("on")
        
    }) //popup



    // 인기검색어
    const ranking = new Swiper(".text",{
      direction: "vertical",
      loop: true,
      autoplay: {
          delay: 3000
      }
    })

    $(".ranking").mouseover(function(){
      ranking.autoplay.stop();
    })
    $(".ranking").mouseout(function(){
      ranking.autoplay.start();
    })



    //메인배너 슬라이드
    const main_swiper = new Swiper(".main-content",{
        loop: true,
        navigation:{
            nextEl:".swiper-button-next",
            prebEl:".swiper-button-prev"
        },
        pagination:{
            el:".swiper-pagination",
            clickable: true
        },
        slidesPerView: 1,
        autoplay:{delay:3000}
    })

    // 통합검색
    $(".booking").click(function(e){
        e.preventDefault()
     })

    $(".booking .booking-wrap .tabmenu ul li").eq(0).addClass("on")

    $(".booking .tab-wrap .tab-content").eq(0).show()

    $(".booking .tabmenu ul li").click(function(){
      let i =$(this).index();

        $(".booking .tabmenu ul li").removeClass("on").eq(i).addClass("on")
        $(".booking .tab-content").hide().eq(i).show();
    }) 

    $(".booking .tab-content .left ul li").click(function(){
      let i =$(this).index();
      $(".booking .tab-content .left ul li").removeClass("on").eq(i).addClass("on")
      $(".booking .tab-content .left ul li a").removeClass("on").eq(i).addClass("on")
    })
    $(".booking .tab-content:nth-child(3) .left ul li").click(function(){
      let i = $(this).index();
      $(".tab-content:nth-child(3) > .left ul li").removeClass("on").eq(i).addClass("on")
      $(".tab-content:nth-child(3) > .left ul li a").removeClass("on").eq(i).addClass("on")
    })
    

     //사이드(내가 본 상품)
    $(".side-menu").click(function(e){
       e.preventDefault()
    })

    let side_menu = parseInt($(".side-menu").css("top"))
    // alert(position)
    $(window).scroll(function(){
      
      let pos = $(window).scrollTop();
      if(pos>=767){
        $(".side-menu").show()
      }else{
        $(".side-menu").hide()
      }
      let new_pos = side_menu + pos;
      console.log(pos)
        $(".side-menu").stop().animate({
            top: new_pos
        })
    })
    
    //  사이드(위치표시)



    //후기
  
    const review_bg_swiper = new Swiper(".review",{
      loop: true,
      slidesPerView: 1,
      // autoplay:{delay:3000},
      watchSlidesProgress: true,

    })  //swiper3-리뷰

    const review_swiper = new Swiper(".review-content",{
      loop: true,
      navigation:{
          nextEl:".swiper-button-next",
          prevEl:".swiper-button-prev"
     },
      pagination:{
         el:".swiper-pagination",
         clickable: true
     },
      // freeMode: true,
      slidesPerView: 3,
      thumbs:{
        swiper: review_bg_swiper
    },
      // autoplay:{delay:3000}

    
}) //swiper2-리뷰배경













})  //jquery
