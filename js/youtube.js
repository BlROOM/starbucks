      // Youtube IFrame API를 비동기로 로드합니다.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      
// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
    
      function onYouTubeIframeAPIReady() {
        //<div id="player"></div>
        //new YT API가 player라는 id를가진 요소를 찾게된다
          new YT.Player('player', {
          videoId: 'An6LvWQuj_8',//최초 재생할 유투브 ID
          playerVars: {
            autoplay: true, //자동 재생 유무
            loop: true, //반복 재생 유무
            playList: 'An6LvWQuj_8' //반복 재생할 유투브 영상 id 목록 
          },
          events:{
            //함수안에 있는 function 함수는 메소드로 불림! 
            onReady:  function (event){
              event.target.mute()//target은 재생되고있는 영상 mute음소거
            }
          }
        });
      }