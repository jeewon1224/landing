// $(document).ready(function(){
  
// });


$(function(){

  var swiper = new Swiper('.main_slide', {
    centeredSlides: true,
		slidesPerView: 'auto',
		// lazy: {
		// 	loadPrevNext: true,
		//   },
		preloadImages: false,
    spaceBetween: 100,
    loop: true,
		autoplay: {
		  delay: 2000,
			disableOnInteraction: false,
		},
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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



  $(".pro_item").hide();

  $(".pro_tab > ul > li").mouseover(function(){
    var index = $(this).index();
    $(".pro_item").hide();
    $(".pro_item").eq(index).show();
  })

  $(".pro_tab > ul > li").eq(0).trigger("click");
  $(".pro_item").eq(0).show();






    //initialize swiper when document ready
    var mySwiper = new Swiper('.album_slide', {
      // Optional parameters 
      slidesPerView: 'auto', // 슬라이드를 한번에 3개를 보여준다
      // loopFillGroupWithBlank : true,
      loop: true, // loop 를 true 로 할경우 무한반복 슬라이드, false 로 할경우 슬라이드의 끝에서 더보여지지 않음
      // If we need pagination 
      pagination: {
          el: '.album-swiper-pagination',
          clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
          // type: 'progressbar', // And if we need scrollbar 진행바
      },
      
      // Navigation arrows 
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: false,
      // },
      centeredSlides: true,
      slidesPerView: 5,
      spaceBetween: 0,
  })




  var frame_idx = $('iframe').index();
  	console.log(frame_idx);

    $('iframe').hide();
    $("iframe").eq(0).show();


})
