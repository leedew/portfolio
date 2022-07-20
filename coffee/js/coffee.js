const button = document.getElementById('button');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const top_bg = document.querySelector(".top-bg");
const content = document.querySelector(".content")
const bottom_bg = document.querySelector(".bottom-bg");
const back_btn = document.querySelector(".back");  //되돌아가기 버튼

function hidden(hidden) {
    hidden.classList.add('hidden');
}

function bFunction(event) {
    hidden(button);
    hidden(a);
    b.classList.remove('hidden');
    c.classList.remove('hidden');
    const b_txt = ['아메리카노', '카푸치노', '바닐라라떼', '토피넛라떼', '아.샷.추', '아포가토', '딸기라떼'];
    const c_txt = [
        "역시 <span class='name'>아메리카노</span>가 국룰이지~",
        "계피향이 은근히 기분을 센치하게 만들어주는 <span class='name'>카푸치노</span>~",
        "달달한 <span class='name'>바닐라라떼</span>가 내 마음도 부드럽게 만들어줘~",
        "고소한 견과류가 들어간 특별한 맛! <span class='name'>토피넛라떼</span> 내 최애픽이야~",
        "<span class='name'>아이스티 샷 추가!</span> 난 요즘 이게 끌리더라~",
        "달달한 아이스크림에 에스프레소 한 잔! 으음~ <span class='name'>아포가토</span>가 날 특별하게 해~",
        "상큼달달한 <span class='name'>딸기라떼</span>가 내 기분을 업!업!"
    ]
    const bg = "./images"
    const t_bg = [
        "/small_img_1.png",
        "/small_img_2.png",
        "/small_img_3.png",
        "/small_img_4.png",
        "/small_img_5.png",
        "/small_img_6.png",
        "/small_img_7.png"
    ]
    const b_bg = [
        "/big_img_1.png",
        "/big_img_2.png",
        "/big_img_3.png",
        "/big_img_4.png",
        "/big_img_5.png",
        "/big_img_6.png",
        "/big_img_7.png"
    ]
    const bg_color = [
        "#6d411d",
        "#b27e52",
        "#ffd39f",
        "#F4AC56",
        "#F8A690",
        "#9B622A",
        "#ffcae0"
    ]

    const random = Math.floor(Math.random() * b_txt.length)
    
    b.innerText = b_txt[random]
    c.innerHTML = c_txt[random]
    top_bg.style.backgroundImage = "url("+bg+t_bg[random]+")"
    content.style.backgroundColor = bg_color[random]
    bottom_bg.style.backgroundImage = "url("+bg + b_bg[random]+")"

    // 좌측상단 이미지 크기조절, 이미지 반복 제한, 중앙 정렬
    top_bg.style.backgroundSize = "80%";
    top_bg.style.backgroundRepeat = "no-repeat";
    top_bg.style.backgroundPosition = "center center";

    // 우측하단 이미지 크기조절, 이미지 반복 제한, 중앙 정렬
    bottom_bg.style.backgroundSize = "80%";
    bottom_bg.style.backgroundRepeat = "no-repeat";
    bottom_bg.style.backgroundPosition = "center center";

    console.log(bg + t_bg[Math.floor(Math.random() * b_txt.length)])
}

    // 되돌아가기 버튼
    button.addEventListener('click', bFunction);

    // 되돌아가기 버튼 마우스 호버했을 때
    back_btn.addEventListener("mouseover", function(event){
        top_bg.style.animation = "ani1 1.8s infinite linear"
        top_bg.style.transformOrigin = "50% 0"
        bottom_bg.style.animation = "ani1 1.8s infinite linear"
        bottom_bg.style.transformOrigin = "50% 0"
    },false);

    // 되돌아가기 버튼 마우스 뗐을 때
    back_btn.addEventListener("mouseout", function(event){
        top_bg.style.animation = ""
        top_bg.style.transformOrigin = ""
        bottom_bg.style.animation = ""
        bottom_bg.style.transformOrigin = ""
    },false);

    document.querySelector(".back").addEventListener("click", function(){
        button.classList.remove('hidden');
        a.classList.remove('hidden');
        b.classList.add('hidden');
        c.classList.add('hidden');
        content.style.backgroundColor = "";
        top_bg.style.backgroundImage = "none"
        bottom_bg.style.backgroundImage = "none"
})

