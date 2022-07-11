$("document").ready(function(){

    






    let page = new fullpage(".fullpage", {
        //속성 적는 칸
        //scrollBars, ture,
        // sectionsColor: ["yellow", "orange", "pink", "skyblue", "green"],
        anchors:["home", "profile", "work1", "work2", "design","process","contact"],
        navigation:true,
        navigationPosition:"left", //기본값:오른쪽
        // navigationTooltips:["#홈","#소개","#능력","#작업물","#연락처"],
        slidesNavigation: true,

        // 도착했을때 움직이는 요소가 필요하다면 사용
        onLeave: function(origin, destination, direction){
            if(origin.index >= 0 && direction == "down"){
                $(".nav").fadeIn()
            }else if(origin.index == 1 && direction == "up"){
                $(".nav").fadeOut()
            }

            //tooltip활성화
            $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.index).addClass("on")
            
        },
        afterLoad: function(origin, destination){
            // alert()
            // tooltip활성화
            if(origin.index==0){
                $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on")
            }
        },
        afterSlideLoad: function(section, origin, destination){
            let params = {
                section: section,
                origin : origin,
                destination: destination
            }
            if(destination.index == 1){
                alert("슬라이드가 완료되고 나서 이벤트 실행")
            }
        }
        /*
        origin - 활성화된 구역
        destination - 목적지 구역
        direction - 마우스 휠 방향
        onLeave - 구역을 떠나고 새로운 구역으로 이동 도중 이벤트 실행
        afterLoad - 구역을 불러들이고 나서 스크롤이 끝나면 이벤트 실행
        afterSlideLoad - 해당 슬라이드 동작 이후 실행
        */
    })
})