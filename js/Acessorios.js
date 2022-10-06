var Cadastro =  document.getElementById("myImg"); 
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("myImg").className = "slideUp";
  }
}



(function ($) {
    "use strict";
  
    // Preloader (if the #preloader div exists)
    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
          $(this).remove();
        });
      }
    });
  
    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
    });
  
    // Initiate the wowjs animation library
    new WOW().init();
  
    // Header scroll class
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
  
    // Smooth scroll for the navigation and links with .scrollto classes
    $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          var top_space = 0;
  
          if ($('#header').length) {
            top_space = $('#header').outerHeight();
  
            if (! $('#header').hasClass('header-scrolled')) {
              top_space = top_space - 20;
            }
          }
  
          $('html, body').animate({
            scrollTop: target.offset().top - top_space
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.main-nav, .mobile-nav').length) {
            $('.main-nav .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });
  
    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.main-nav, .mobile-nav');
    var main_nav_height = $('#header').outerHeight();
  
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
    
      nav_sections.each(function() {
        var top = $(this).offset().top - main_nav_height,
            bottom = top + $(this).outerHeight();
    
        if (cur_pos >= top && cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
          main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
        }
      });
    });
  
    // jQuery counterUp (used in Whu Us section)
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000
    });
  
  var data = '{"marca":{"Yaris":[{"model":"2009","name":"PopUp-2009-Yaris.png"},{"model":"2015","name":"PopUp-2015-Yaris.png"}],"4Runner":[{"model":"2009","name":"PopUp-2009-4Runner.png"},{"model":"2015","name":"PopUp-2015-4Runner.png"}],"Corolla":[{"model":"2009","name":"PopUp-2009-Corolla.png"},{"model":"2015","name":"PopUp-2015-Corolla.png"}],"Fortuner":[{"model":"2009","name":"PopUp-2009-Fortuner.png"},{"model":"2015","name":"PopUp-2015-Fortuner.png"}],"Hilux":[{"model":"2009","name":"PopUp-2009-Hilux.png"},{"model":"2015","name":"PopUp-2015-Hilux.png"}],"LC":[{"model":"2009","name":"PopUp-2009-LC.png"},{"model":"2015","name":"PopUp-2015-LC.png"}],"LCPrado":[{"model":"2009","name":"PopUp-2009-LCPrado.png"},{"model":"2015","name":"PopUp-2015-LCPrado.png"}],"Rav4":[{"model":"2009","name":"PopUp-2009-Rav4.png"},{"model":"2015","name":"PopUp-2015-Rav4.png"}] }}';
  
      var params = JSON.parse(data),
              carModel = $('#model-img');
  
          // Obtener marca del carro
        $("[data-brand]").on('click',function(){
          var brand = $(this).attr('data-brand');
          //console.log(brand);
          
          $(".model").eq(0).attr("data-model", params.marca[brand][1].name);
          $(".model").eq(1).attr("data-model", params.marca[brand][0].name);        
  
        });
  
      // Mostrar tipos de modelos
        $('.model').on('click',function(){
          var path = "",
                  model = $(this).attr('data-model');
  
              $('#model-info').html('<img src="http://cofinostahl.com.gt/dev/toyota_taller/img/PopUp/' + model + '" alt="" class="img-fluid img-responsive"><div class="row"><div id="btn_cita_modal" class="col-lg-6 col-md-6"><a class="btn btn-year btn-auto-cita" href="https://citas.toyota.com.gt/" role="button" target="_blank">Haz tu cita</a></div></div><div class="row"><div class="col-lg-12"><p class="asesores">*Pregunta a un asesor de servicio sobre los nuevos precios de reparaciones generales.</p></div></div>');
              $('.model').hide();
              $('#back-to-model').show();
        });
  
  
      // Mostrar tipos de modelos
        $('.contacto').on('click',function(){
          var path = "",
                  model = $(this).attr('data-model');
  
              $('#model-info').html('<p> Escríbenos, <br />¡resolverémos tus dudas!</p><div class="embed-container"><iframe id="sectionIframe" scrolling="yes" src="http://i.toyota.com.gt/formulario-de-contacto_crm/" style="overflow: hidden; border: none;" width="100%" height="800"></iframe></div>');
              $('.model').hide();
              $('#back-to-model').show();
        });
  
          // Restablecer modal
          $('#back-to-model').on('click',function(){
            reset();
          });
  
          $('#type-car').on('hidden.bs.modal', function () {
          reset();
          })    
  
          // Restablecer Modal
        function reset(){
          $('#model-info').html('<p>Seleccione Modelo</p>')
            $('#back-to-model').hide();
            $('.model').show();
        }
  
  
  })(jQuery);
//----------------------------------------------------------
gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: true,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});
