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
    


    
    (function() {

        var slidersContainer = document.querySelector('.sliders-container');
    
        
        // Initializing the numbers slider
        // 이미지 숫자
        var msNumbers = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--numbers',
            range: [1, 4],
            rangeContent: function (i) {
                return '0' + i;
            },
            style: {
                transform: [{scale: [0.4, 1]}],
                opacity: [0, 1]
            },
            interactive: false
        });
    
        // Initializing the titles slider
        //이미지 제목
        var titles = [
            'MYREALTRIP',
            'KIEHL',
            'SUBWAY',
            'CAFE'
        ];
        var msTitles = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--titles',
            range: [0, 3],
            rangeContent: function (i) {
                return '<h3>'+ titles[i] +'</h3>';
            },
            vertical: true,
            reverse: true,
            style: {
                opacity: [0, 1]
            },
            interactive: false
        });
    
        // Initializing the links slider
        //자세히보기 링크
        var msLinks = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--links',
            range: [0, 3],
            rangeContent: function () {
                return '<a class="ms-slide__link">자세히보기</a>';
            },
            vertical: true,
            interactive: false
        });
    
        // Get pagination items
        var pagination = document.querySelector('.pagination');
        var paginationItems = [].slice.call(pagination.children);
    
        // Initializing the images slider
        var msImages = new MomentumSlider({
    
            //슬라이드 추가할 요소들 적어주면됨
            el: slidersContainer,

            // CSS class to reference the slider
            cssClass: 'ms--images',

            //이미지 4개라서 0~3
            range: [0, 3],
            rangeContent: function () {
                return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
            },

            //같이 슬라이드 될 요소들
            sync: [msNumbers, msTitles, msLinks],


            //슬라이드 이동할때 추가할 요소들 적기
            style: {
                '.ms-slide__image': {
                    transform: [{scale: [1.5, 1]}]
                }
            }
        });

        // 버튼클릭하면 해당 슬라이드로 이동
        pagination.addEventListener('click', function(e) {
            if (e.target.matches('.pagination__button','.header__memu ul li')) {
                var index = paginationItems.indexOf(e.target.parentNode);
                msImages.select(index);
            }
        });
        
    });



    




 })