$("document").ready(function(){
        
    // 화면축소X
    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
             event.preventDefault(); 
           } 
       }, false);
   
   var lastTouchEnd = 0; 
   
   document.documentElement.addEventListener('touchend', function (event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
             event.preventDefault(); 
           } lastTouchEnd = now; 
       }, false);


    //aos 설정
    AOS.init();

    //디자인
    $(".design").click(function(e){
        e.preventDefault()
     })

     const $list = $(".design .design-wrap .small-box ul li")
     const $img = $(".design .design-wrap .big-box")
     const $item = $(".design .design-wrap .item")
     let content_img = [
      "images/myrealtrip-logo.png",
      "images/poster-thehill-mockup.png",
      "images/linebanner-mockup.png",
      "images/linebanner-2-mockup.png",
      "images/mainbanner-hawaii.png"
    ]
    let content_item = [

    ]
         $list.click(function(e){
            e.preventDefault();
             let list_index = $(this).index();
             $(".big-box img").attr("src",content_img[list_index])
         })


    $list.mouseover(function(){
        $list.removeClass("on").stop().animate({
            opacity:1
        },500)

        $list.not($(this)).stop().animate({
            opacity: 0.2
        },500)
    })

    $list.mouseout(function(){
        if($($list).hasClass("on")){return}

        $list.stop().animate({
            opacity: 1
        },500)
    })


    //인디케이터
    $(".indicator ul li").eq(0).addClass("on");
    let wheel_count = 0;

    let offset =[];
    for(let i = 0; i < 6; i++){
        offset.push($(".section").eq(i).offset().top)
        console.log(offset)
    }

    //페이지업다운
    $(window).keydown(function(e){
        let Code = e.keyCode;
        console.log(Code)
        if(Code == 33){
            wheel_count--;
            if(wheel_count <0){
                wheel_count = 0;
            }
            $("html, body").stop().animate({
                scrollTop: $(".section").height()*wheel_count,
            },1000)
    
            $(".indicator ul li").removeClass("on").eq(wheel_count).addClass("on") 
    
        }else if(Code == 34){
            wheel_count++;
            if(wheel_count > $(".section").length -1){
                wheel_count = $(".section").length -1   
            }
            $("html, body").stop().animate({
                scrollTop: $(".section").height()*wheel_count,
            },1000)
    
            $(".indicator ul li").removeClass("on").eq(wheel_count).addClass("on") 
        }        
    })
 

//코드 적을때 반응형 부분과 둘 다 적어줘야함
// 버그방지 = 데스크탑에서 작게 보고싶은 경우
    $(window).resize(function(){
        let $width = $(window).width();
        if($width >= 640){
            $(window).on("mousewheel DOMMouseScroll", function(e){
                let delta = e.originalEvent.wheelDelta;
                let firefox = e.originalEvent.detail;
                

                if($("html, body").is(":animated")){
                    return
                }
        
                if(delta<0 || firefox < 0){
                    
                    wheel_count++;
                    if(wheel_count > $(".section").length -1){
                        wheel_count = $(".section").length -1   
                    }
                }else{
                    wheel_count--;
                    if(wheel_count <0){
                        wheel_count = 0;
                    }
                }
        
                console.log(wheel_count)
        
                $("html, body").stop().animate({
                    scrollTop: $(".section").height()*wheel_count,
                },1000)
        
                $(".indicator ul li").removeClass("on").eq(wheel_count).addClass("on") 
            })
            $("html, body").css("overflow", "hidden")
        }else{
            $(window).off("mousewheel DOMMouseScroll touchmove")
            $("html, body").css("overflow", "visible")
        }

        
    })

// 미디어쿼리 640px일때 코드 , else~(데스크탑버전)
    if (window.matchMedia("(max-width: 640px)").matches) {
        
        $("html, body").css("overflow", "visible")
        $(".indicator").css("display","none")
        $(window).off("mousewheel DOMMouseScroll touchmove")

      } else {
        
        $(window).on("mousewheel DOMMouseScroll", function(e){
            let delta = e.originalEvent.wheelDelta;
            let firefox = e.originalEvent.detail;
            
            
            if($("html, body").is(":animated")){
                return
            }
    
            if(delta<0 || firefox < 0){
                
                wheel_count++;
                if(wheel_count > $(".section").length -1){
                    wheel_count = $(".section").length -1   
                }
            }else{
                wheel_count--;
                if(wheel_count <0){
                    wheel_count = 0;
                }
            }
    
            console.log(wheel_count)
    
            $("html, body").stop().animate({
                scrollTop: $(".section").height()*wheel_count,
            },1000)
    
            $(".indicator ul li").removeClass("on").eq(wheel_count).addClass("on") 
        })

      }


    // 터치스와이프
    $(".indicator ul li, .side ul li").click(function(){
        wheel_count =$(this).index();

        $("html, body").stop().animate({
            scrollTop: $(".section").height()*wheel_count
        },1000)
        $(".indicator ul li").removeClass("on").eq(wheel_count).addClass("on")
    })

    // 네비
    $(".nav .hamburger a, .side").click(function(e){
        e.preventDefault()
     })
    $(".nav .hamburger a").click(function(){
        $(".side").toggleClass("on")
        $(".nav .hamburger a").toggleClass("on")
    })


    // home- 가운데 문
    $(".home .door .center").css("opacity",1).css("transition-delay","3500ms").css("animation-delay","2000ms")
    

    //소개
    const wr = document.querySelector(".about .left .keyword ul");
    const words = wr.children;

    let x = 0;
    rotate(x);

    setInterval(() => {
        x = ++x % words.length;
        rotate(x);
    }, 1000);

    function rotate(start) {
        for (let i = 0; i < words.length; ++i) {
            const j = (start + i) % words.length;
            let percent = j / words.length;
            let rad = percent * 2 * Math.PI;
            let y = Math.sin(rad) * 200;
            let z = 40 * Math.cos(rad) - 40;
            let op = (Math.cos(rad) + 1) / 2;
            words[i].style.transform = `perspective(100px) translateZ(${z}px) translateY(${y}%)`;
            words[i].style.opacity = `${op}`;
        }
    }   


    // 스크롤탑
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        console.log(pos)

        if(pos >= 969){
            $(".scrolltop").fadeIn(300)
        }else{
            $(".scrolltop").fadeOut(300)
        }     
        if(pos >= 969){
            $(".indicator").fadeIn(300)
        }else{
            $(".indicator").fadeOut(300)
        }

    }) //scroll

    $(".scrolltop").click(function(){
        $("html, body").stop().animate({
          scrollTop: 0
        }, 300)
        wheel_count =0;
    })







let popup_page = [
    "../redesign-myrealtrip.html",
    "../20220419-subway.html",
    "kiehl.html",
    "../coffee/coffee.html"
]

$(".ms-slide__link").click(function(){
    // a(자세히 보기) 클릭 했을 때 현재 인덱스 번호가 몇번인지 
    // 체크해서 해당 html 파일을 새창으로 뜨운다.
    let i = $(".ms-slide__link").index(this)
    window.open(popup_page[i])
})

    
   

 })   //jquery