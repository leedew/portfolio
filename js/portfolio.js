$("document").ready(function(){

    //aos 설정
    AOS.init();
    

    //인디케이터
    $(".indicator ul li").eq(0).addClass("on");
    let wheel_count = 0;

    let offset =[];
    for(let i = 0; i < 6; i++){
        offset.push($(".section").eq(i).offset().top)
        console.log(offset)
    }


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

        // 글자고정
        if(wheel_count==2 || wheel_count==3){
            setTimeout(function(){
                $(".work .left h1").addClass("on")
            },1000)
        }else{
            setTimeout(function(){
                $(".work .left h1").removeClass("on")
            },700)
        }


        
        console.log(wheel_count)

        $("html, body").stop().animate({
            scrollTop: $(".section").height()*wheel_count,
        },1000)

        $(".indicator ul li").removeClass("on").eq(wheel_count).addClass("on") 

    })

    


    $(".indicator ul li").click(function(){
        wheel_count =$(this).index();

        $("html, body").stop().animate({
            scrollTop: $(".section").height()*wheel_count
        },1000)
        $(".indicator ul li").removeClass("on").eq(wheel_count).addClass("on")
    })

    // 메뉴 ->반응형
    $(".side-nav .hamburger a").click(function(){
        $(this).addClass("on")
        $(".side").addClass("on")
        $(".close").addClass("on")
    })

    $(".close").click(function(){
        $(this).removeClass("on")
        setTimeout(function(){

            $(".side").removeClass("on")
        },1200)
        setTimeout(function(){
            $(".side-nav .hamburger a").removeClass("on")
        },1500)
    })



    // home- 가운데 문
    $(".home .door .center").css("opacity",1).css("transition-delay","3500ms").css("animation-delay","2000ms")
    


    


    //소개
    const wr = document.querySelector(".keyword");

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
            let ty = Math.sin(rad) * 200;
            let tz = 40 * Math.cos(rad) - 40;
            let op = (Math.cos(rad) + 1) / 2;
            words[
            i
            ].style.transform = `perspective(100px) translateZ(${tz}px) translateY(${ty}%)`;
            words[i].style.opacity = `${op}`;
        }
    }   


    // progrssbar



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
    

    
    //process 슬라이드
    $(".process-slick").slick({
        arrows: true, 
        dots: true,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        responsive:[
            {
                breakpoint: 1024, 
                settings: {
                   
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            }
        ]
    })
    





    // $(".me").textillate({
    //          loop:true,
    //          in:{
    //              effect: "bounceIn",
    //              shuffle: true
    //          },
    //          out:{
    //              effect: "bounceOut",
    //              shuffle: true
    //          }
    //     })

    




 })