
      $('#slider').show().revolution({
         delay:9000,
         autoHeight:"off",
         sliderLayout: 'fullwidth',
         sliderType:'standard',
         speed:'1000',
         responsiveLevels:[1200,992,768,576],
   			visibilityLevels:[1200,992,768,576],
   			gridwidth:[992,768,576,480],
   			gridheight:[650,600,600,450],
        navigation: {

    arrows: {
        enable: true,
        style: 'hesperiden',
        tmp: '',
        rtl: false,
        hide_onleave: false,
        hide_onmobile: true,
        hide_under: 0,
        hide_over: 9999,
        hide_delay: 200,
        hide_delay_mobile: 1200,

        left: {
            container: 'slider',
            h_align: 'left',
            v_align: 'center',
            h_offset: 20,
            v_offset: 0
        },

        right: {
            container: 'slider',
            h_align: 'right',
            v_align: 'center',
            h_offset: 20,
            v_offset: 0
        }

    }

}
      });

      //Sandwich
      $('.sandwich-container').sandwich({
        menu: $('.menu-container'),
        closeOnClick: true
      });


      
      //team carousel
      $('#team-carousel').owlCarousel({
        margin:5,
        nav:false,
        dots:false,
        loop: true,
        responsiveClass:true,
        responsive:{
          0: {
            items:1
          },
          768:{
            items:2
          },
          992:{
            items:3
          }

        }
      });

      //parallax
      $('.s-parallax').parallax('50%',1);

      //portfoli-owlCarousel
      $('#portfolio-carousel').owlCarousel({
        loop:true,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
          0:{
            items:1
          },
          768:{
            items:2
          },
          992:{
            items:3
          },
          1200:{
            items:4
          }
        }
      });

  
      $('#quote-text-carousel').owlCarousel({
        autoplay:'autoplay',
        speed:1000,
        loop:true,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        dots:false,
        items:1
      });

   
      $('.navBar').stickeyHeader({
        customNum: $('.navBar').offset().top
      });


      $('.menu-container li a').scrollAnchor({
        additional: -80
      });

      $('.customSelect').customSelect();
      
      $('.page-section').activeNavLink({
        lists:$('.menu-container li'),
        additional:-80
      });
