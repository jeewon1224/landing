$(function(){


$('#lang').click(function(){
  // $('.lang').removeClass('active');
  $('.lang').toggleClass('active');
})










  var swiper1 = new Swiper('.main_slide', {
    centeredSlides: true,
		slidesPerView: 'auto',
		// lazy: {
		// 	loadPrevNext: true,
		//   },
    spaceBetween: 150,
    loop: true,
		// autoplay: {
		//   delay: 2000,
		// 	disableOnInteraction: false,
		// },
    pagination: {
      el: '.main_wrap .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.main_wrap .btn.next',
      prevEl: '.main_wrap .btn.prev',
    },
    on:{
      slideChangeTransitionEnd:function(){
        idx = this.realIndex+1; //swiper의 this
        $('#mainWrap').removeClass('bg1 bg2 bg3');
        $('#mainWrap').addClass('bg'+idx);
      }
    }
  });
  


  



      
  // var mySwiper = new Swiper ('.swiper-container', {
  //   speed: 400,
  //   spaceBetween: 300,
  //   initialSlide: 0,
  //   //truewrapper adoptsheight of active slide
  //   autoHeight: false,
  //   // Optional parameters
  //   // direction: 'horizontal',
  //   loop: true,
  //   // delay between transitions in ms
  //   autoplay: 5000,
  //   autoplayStopOnLast: false, // loop false also
  //   // If we need pagination
  //   // pagination: '.swiper-pagination',
  //   // paginationType: "bullets",
  //   pagination: {
  //         el: '.swiper-pagination',
  //         clickable: true,
  //       },
  //   // Navigation arrows
  //   nextButton: '.swiper-button-next',
  //   prevButton: '.swiper-button-prev',
    
  //   // And if we need scrollbar
  //   //scrollbar: '.swiper-scrollbar',
  //   // "slide", "fade", "cube", "coverflow" or "flip"
  //   effect: 'slide',
  //   // Distance between slides in px.
  //   spaceBetween: 220,
  //   //
  //   slidesPerView: 2,
  //   //
  //   centeredSlides: true,
  //   //
  //   slidesOffsetBefore: 0,
  //   //
  //   grabCursor: true,
  // })        



  // $(".pro_item").hide();

  // $(".pro_tab > ul > li").mouseover(function(){
  //   var index = $(this).index();
  //   $(".pro_item").hide();
  //   $(".pro_item").eq(index).show();

  //   // $(".pro_item").eq(index).addClass('active');
  // });

  // $(".pro_tab > ul > li").eq(0).trigger("click");
  // $(".pro_item").eq(0).show();


 

  // $('.product .pro_tab ul li span').hide();

  // $(".pro_tab > ul > li").mouseover(function(){
  //   var index = $(this).index();
  //   $('.product .pro_tab ul li span').hide();
  //   $('.product .pro_tab ul li span').eq(index).show();

  //   // $(".pro_item").eq(index).addClass('active');
  // });
  // $('.product .pro_tab ul li span').eq(0).trigger("click");
  // $('.product .pro_tab ul li span').eq(0).show();

    $('.pro_tab li').mouseover(function() {
      idx = $(this).index()+1;
      $('.pro_tab li').removeClass('active');
      $(this).addClass('active');

      $(".pro_item").removeClass('active');
      $('#proItem'+idx).addClass('active');

    })





  // 앨범 슬라이드
  var mySwiper = new Swiper('.album_slide', {
      slidesPerView: 'auto', // 슬라이드를 한번에 3개를 보여준다
      loop: true, // loop 를 true 로 할경우 무한반복 슬라이드, false 로 할경우 슬라이드의 끝에서 더보여지지 않음
      pagination: {
          el: '.album-swiper-pagination',
          clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
          // type: 'progressbar', // And if we need scrollbar 진행바
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: false,
      // },
      centeredSlides: true,

      spaceBetween: 80,
  })



 
  var mySwiper = new Swiper('.video_slide', {
    direction:'vertical',
    slidesPerView: 3,
    spaceBetween: 10,
    simulateTouch: false,
    navigation: {
      nextEl: '.video_thumb .btn.next',
      prevEl: '.video_thumb .btn.prev',
  },
  })


  $('.video_slide .swiper-slide').click(function(){
    src= $(this).data('iframe');

    $('.video_slide .swiper-slide').removeClass('active');
    $(this).addClass('active');

    $('.video_con iframe').remove();
    $('.video_con').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+src+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  })



})
