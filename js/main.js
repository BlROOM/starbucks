const badgeEl = document.querySelector('header .badges');
const toTopEl=document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // //배지 숨기기
    // badgeEl.style.display='none';
   //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity:0,
      display: 'none'
  });
  //버튼 보이기
  gsap.to(toTopEl, .4, {
    x:0
  });

  } else {
    //배지 보이기
    // badgeEl.style.display='block';
    gsap.to(badgeEl, .6,{
      opacity:1,
      display:'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .4, {
      x:100
    });
  }
},300));
//_.throttle(함수,시간)


toTopEl.addEventListener('click',function(){
  gsap.to(window, .7 ,{
    // window라는 요소는 사용자가 보여지는 화면자체를 말함
    //scrollTo는 화면에 스크롤되게하는 옵션 gsap에서 scollToPlugin을 연결해야만 사용가능! html에서연결함
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    //gsap.to(요소, 지속시간, 옵션) 애니메이션 기능의 라이브러리;
 gsap.to(fadeEl, 1, {
    delay:(index+1)* .7, //처음fade-in을가진 fadeEls속성은 0.7초0 그다음 1.4초 .. 2.1초
    //delay 지연시키는 속성
    opacity:1
 });
});

//생성자(클래스)  //인수
//new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay:true, 
  loop:true,
});

new Swiper('.promotion .swiper-container', {
  //  direction:'horizontal  Swiper옵션의 direction 기본값'
  slidesPerView: 3,//한번에 보여줄 슬라이드 개수 ,기본값은 1
  spaceBetween: 10, //슬라이드 사이 여백 
  centeredSlides:true, //1번 슬라이드가 가운데 보이기
  loop:true,
  // autoplay:{
  //   delay:5000  //0.5초에 한번씩 슬라이드가 동작
  // }
  pagination: {
    el:'.promotion .swiper-pagination',//페이지 번호 요소 선택자
    clickable:true//사용자가 제어할수 있게하는 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',//previous 이전버튼
    nextEl: '.promotion .swiper-next'//next 다음버튼
  } 
});

new Swiper('.awards .swiper-container', {
   direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  //slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
});





const promotionEl=document.querySelector('.promotion');
const promotionToggleBtn=document.querySelector('.toggle-promotion');
let isHidePromotion=false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion=!isHidePromotion
  if(isHidePromotion){
    //숨김 처림
    promotionEl.classList.add('hide');
  } else {
    //보임 처림
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
    //gsap.to(요소, 지속시간, 옵션) 애니메이션 기능의 라이브러리;
  gsap.to(selector,// 선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { // 옵션
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls=document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement:spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //view port뷰 포트에서 보여지는 부분 0은 맨위(시작) 1은 맨아래(끝)
      //지정된 부분에 view port가 걸리게되면  
    })
    .setClassToggle(spyEl,'show')//첫번째 인수는 클래스를 토글할 변수 ,두번째 인수는 클래스에추가될 이름
    .addTo(new ScrollMagic.Controller());//ScrollMagic은 추가한 옵션들을 Controller에 추가해서 실행되게끔해주는기능
});
