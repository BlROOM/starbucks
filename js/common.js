const searchEl=document.querySelector('.search');
const searchInputEl=searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  // 이 function은 이름이없는 익명함수 표현식!
  //search라는 div요소에 이벤트를 추가할건데 그 이벤트가 클릭하면 input요소에 focus를 해라!
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
 //searchInputEl에 focus가 되면 이 익명함수가 실행될거다
 searchEl.classList.add('focused');
 searchInputEl.setAttribute('placeholder','통합검색');
 //setAttribute:html속성을 지정할때 사용
 //첫번째인수로는 속성을 두번째인수로는 그 속성에 들어갈 값을
 //classList 객체 
 //search라는 특정요소에 클래스 내용을 추가하겠다.
});
searchInputEl.addEventListener('blur',function(){
  //blur focus가 해제되면 focus의 반대 이벤트
  
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();//201