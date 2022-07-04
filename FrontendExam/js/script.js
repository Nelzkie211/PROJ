$(document).ready(()=>{
  $('.toggle-button').click(()=>{
      $('.sidebar').toggleClass("hide-sidebar");
      $('.content').toggleClass("backdrop");
      if($('.sidebar').hasClass("hide-sidebar")){
          $('.toggle-button').find('i').removeClass('fa-bars').addClass('fa-xmark')
      }
      else{
          $('.toggle-button').find('i').removeClass('fa-xmark').addClass('fa-bars')
      }

  })

})
$(window).on('resize', ()=>{
  if ($(this).width() > 767) {
      $('.sidebar').removeClass("hide-sidebar");
      $('.content').removeClass("backdrop");

      if($('.navbar-text').is(":visible")){
          $('.toggle-button').find('i').removeClass('fa-xmark').addClass('fa-bars')
      }
  }
});