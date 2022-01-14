$(function () {
  var $win = $(window),
  devise = $('.devise');
  devise2 = $('.devise2');
  curtain = $('.curtain');
  var $bottle_count = $('.bottle_count');
  // current = devise.offset().left;
  scroll;

  $win.on('load scroll', function () {
    scroll = $win.scrollTop();
    //head表示・非表示開始px
    head_top_disappear_px = 300;
    head1_appear_px = 1700;
    head1_disappear_px = 2500;
    head2_1_appear_px = 3600;
    head2_1_disappear_px = 4400;
    head2_2_appear_px = 5200;
    head2_2_disappear_px = 6000;
    head3_1_appear_px = 6200;
    head3_1_model_appear_px = 6600;
    head3_1_country_appear_px = 7000;
    head3_1_text_appear_px = 7400;
    head3_1_disappear_px = 8200;
    head3_black_text_px = 9000;
    head3_2_appear_px = 9800;
    head3_2_disappear_px = 11000;
    head4_curtain_px = 11500;
    head4_devise_px = 12000;
    head4_text_px = 12500;
    head4_disappear_px = 13400;
    faq_appear_px = 16500;
    contact_appear_px = 19000;
    //デバイススライド開始・停止px
    slide_begin_px = 600;
    slide_stop_px = 1370;
    slide_begin_px2 = 2800;
    slide_stop_px2 = 3230;
    matrix_px = 4400;
    matrix_end_px = 5200;
    devise_disappear_px = 6000;
    console.log(scroll);

    if (scroll > head_top_disappear_px) {
      $('#head_top').addClass('none');
    } else {
      $('#head_top').removeClass('none');
    }

    //head表示・非表示(最低限)
    if (scroll < head1_appear_px) {
      $('#head1').addClass('none');
      $('.fixed_sideline').addClass('none');
    } else if (scroll < head1_disappear_px) {
      $('#head1').removeClass('none');
      $('.fixed_sideline').removeClass('none');
    } else if (scroll < head2_1_appear_px) {
      $('#head1').addClass('none');
      $('#head2_1').addClass('none');
    } else if (scroll < head2_1_disappear_px) {
      $('#head2_1').removeClass('none');
    } else if (scroll < head2_2_appear_px) {
      $('#head2_1').addClass('none');
      $('#head2_2').addClass('none');
      $('.img_ex1').css({left: '-300px'});
      $('.img_ex2').css({left: '-300px'});
      $('.img_ex3').css({left: '-300px'});
      $('.img_ex4').css({left: '-300px'});
    } else if (scroll < head2_2_disappear_px) {
      $('#head2_2').removeClass('none');
      $('#head2_foot_img').removeClass('none');
      $('.img_ex1').css({left: '360px'});
      $('.img_ex2').css({left: '730px'});
      $('.img_ex3').css({left: '1100px'});
      $('.img_ex4').css({left: '1470px'});
      setTimeout(function(){$('.exs').removeClass('none');},1000);
    } else if (scroll < head3_1_appear_px) {
      $('#head2_2').addClass('none');
      $('#head3_1').addClass('none');
      $('.header_content').css({color: 'black'});
    } else if (scroll < head3_1_model_appear_px) {
      //head3地球背景表示
      $('#head3_1').removeClass('none');
      $('#head3_1_model').addClass('none');
      $('.header_content').css({color: 'white'});
    } else if (scroll < head3_1_country_appear_px) {
      //head3モデル表示
      $('#head3_1_model').removeClass('none');
      $('#head3_1_sphere').addClass('none');
      $('.sphere_por').css({left: '-300px'});
      $('.sphere_jap').css({left: '-300px'});
      $('.sphere_ame').css({left: '-300px'});
      $('.sphere_bra').css({left: '-300px'});
    } else if (scroll < head3_1_text_appear_px) {
      //head3国球体表示
      $('#head3_1_sphere').removeClass('none');
      $('.sphere_por').css({left: '450px'});
      $('.sphere_jap').css({left: '750px'});
      $('.sphere_ame').css({left: '1050px'});
      $('.sphere_bra').css({left: '1350px'});
      $('#head3_1_text').addClass('none');
    } else if (scroll < head3_1_disappear_px) {
      //head3テキスト表示
      $('#head3_1_text').removeClass('none');
      $('#head3_1').removeClass('none');
      $('.fixed_head').removeClass('none');
      $('.fixed_foot').removeClass('none');
      $('#head3_black').addClass('none');
    } else if (scroll < head3_black_text_px) {
      //ブラックアウト
      $('#head3_1').addClass('none');
      $('.fixed_head').addClass('none');
      $('.fixed_foot').addClass('none');
      $('#head3_black').removeClass('none');
      $('.black_text').addClass('none');
    } else if (scroll < head3_2_appear_px) {
      //テキスト表示
      $('.black_text').removeClass('none');
      $('#head3_black').removeClass('none');
      $('#head3_2').addClass('none');
      $('.fixed_head').addClass('none');
      $('.fixed_foot').addClass('none');
    } else if (scroll < head3_2_disappear_px) {
      //head3_2表示
      $('#head3_black').addClass('none');
      $('#head3_2').removeClass('none');
      $('.fixed_head').removeClass('none');
      $('.fixed_foot').removeClass('none');
      $('.header_content').css({color: 'white'});
      $('#head4').addClass('none');
    } else if (scroll < head4_curtain_px) {
      //head3_2非表示
      $('#head3_2').addClass('none');
      $('#head4').removeClass('none');
      $('.header_content').css({color: 'black'});
    } else if (scroll < head4_text_px) {
      //head4テキスト表示まで
      $('#head4_text').addClass('none');
      $('.head4_text1').css({left: '2500px'});
      $('.head4_text2').css({left: '2500px'});
      $('.head4_text3').css({left: '2500px'});
      $('.head4_text4').css({left: '2500px'});
      $('.head4_text5').css({left: '2500px'});
      $('.head4_text6').css({left: '2500px'});
    } else if (scroll < head4_disappear_px) {
      //head4テキスト表示
      $('#head4_text').removeClass('none');
      $('.head4_text1').css({left: '1272px'});
      $('.head4_text2').css({left: '1037px'});
      $('.head4_text3').css({left: '1106px'});
      $('.head4_text4').css({left: '824px'});
      $('.head4_text5').css({left: '517px'});
      $('.head4_text6').css({left: '378px'});
      $('#head4').removeClass('none');
      $('#head5').addClass('none');
    } else if (scroll < faq_appear_px) {
      //head5表示
      $('#head4').addClass('none');
      $('#head5').removeClass('none');
      $('#head6').addClass('none');
    } else if (scroll < contact_appear_px) {
      //head6(FAQ)表示
      $('#head5').addClass('none');
      $('#head6').removeClass('none');
      $('#head7').addClass('none');
      $('.header_content').css({color: 'black'});
    } else if (scroll < 100000) {
      //head6(FAQ)表示
      $('#head6').addClass('none');
      $('#head7').removeClass('none');
      $('.header_content').css({color: 'white'});
    }
    
    //デバイススライド
    if (scroll < slide_begin_px) {
      devise.css({left: '1270px'});
    } else if (scroll < slide_stop_px) {
      current = 1270 - scroll + slide_begin_px;
      console.log(current);
      devise.css({left: current + 'px'});
    } else if (scroll < slide_begin_px2) {
      devise.css({left: '500px'});
      devise.css({transform: 'none'});
    } else if (scroll < slide_stop_px2) {
      current_left = 500 + scroll - slide_begin_px2;
      devise.css({left: current_left + 'px'});
      devise.css({transform: 'matrix(0.97, 0.26, -0.26, 0.97, 0, 0)'});
    } else if (scroll < matrix_px) {
      devise.css({left: '930px'});
      devise.css({transform: 'matrix(0.97, 0.26, -0.26, 0.97, 0, 0)'});
    } else if (scroll < matrix_end_px) {
      devise.css({left: '830px'});
      devise.css({transform: 'matrix(0.97, -0.26, 0.26, 0.97, 0, 0)'});
    } else if (scroll < devise_disappear_px) {
      devise.css({left: '930px'});
      devise.css({transform: 'matrix(0.97, 0.26, -0.26, 0.97, 0, 0)'});
      devise.css({zIndex: '200'});
      devise.removeClass('none');
    } else if (scroll < head4_devise_px) {
      devise.addClass('none');
      devise.css({zIndex: '-100'});
      devise2.addClass('none');
      devise2.css({zIndex: '-100'});
    } else {
      devise2.removeClass('none');
      devise2.css({zIndex: '0'});
      devise.addClass('none');
      devise.css({zIndex: '-100'});
    }

    //カーテン
    if (scroll < head3_2_disappear_px) {
      curtain.css({top: '-1300px'});
      curtain.css({left: '1160px'});
    } else if (scroll < head4_curtain_px) {
      current = (scroll - head3_2_disappear_px) * 10 - 1300;
      if (current > -40) {
        current = -40;
      }
      console.log(current);
      curtain.css({top: current + 'px'});
      curtain.css({left: -140 - (current) + 'px'});
    }

    //ページ数関連
    if (scroll < head1_appear_px) {
      $bottle_count.html("");
    } else if (scroll < head2_1_appear_px) {
      $bottle_count.html("01");
      $('.page_point1').css({opacity: 1});
      $('.page_point2').css({opacity: 0.2});
    } else if (scroll < head2_1_disappear_px) {
      $bottle_count.html("02");
      $('.page_point1').css({opacity: 0.2});
      $('.page_point2').css({opacity: 1});
      $('.page_point3').css({opacity: 0.2});
    } else if (scroll < head2_2_disappear_px) {
      $bottle_count.html("03");
      $('.page_point2').css({opacity: 0.2});
      $('.page_point3').css({opacity: 1});
      $('.page_point6').css({opacity: 0.2});
      $('.fixed_sideline').removeClass('none');
    } else if (scroll < head3_black_text_px) {
      $bottle_count.html("04");
      $('.fixed_sideline').addClass('none');
    } else if (scroll < head3_2_disappear_px) {
      $bottle_count.html("05");
      $('.fixed_sideline').addClass('none');
    } else if (scroll < head4_disappear_px) {
      $bottle_count.html("06");
      $('.page_point3').css({opacity: 0.2});
      $('.page_point6').css({opacity: 1});
      $('.page_point7').css({opacity: 0.2});
      $('.fixed_sideline').removeClass('none');
    } else if (scroll < faq_appear_px) {
      $bottle_count.html("07");
      $('.page_point6').css({opacity: 0.2});
      $('.page_point7').css({opacity: 1});
      $('.page_point8').css({opacity: 0.2});
    } else if (scroll < contact_appear_px) {
      $bottle_count.html("08");
      $('.page_point7').css({opacity: 0.2});
      $('.page_point8').css({opacity: 1});
      $('.page_point9').css({opacity: 0.2});
      $('.fixed_sideline').removeClass('none');
    } else if (scroll < 100000) {
      $bottle_count.html("09");
      $('.page_point7').css({opacity: 0.2});
      $('.page_point8').css({opacity: 0.2});
      $('.page_point9').css({opacity: 1});
      $('.fixed_sideline').addClass('none');
    }
  });
});

$(function(){
  $('#add_faq').click(function() {
    if ($(this).prop('checked')) {
      $('.add_faq_box').show();
    } else {
      $('.add_faq_box').hide();
    }
  });
});

$(function(){
  $('#menu_faq').click(function() {
    document.documentElement.scrollTop = 17700;
  });
});

$(function(){
  $('#menu_contact').click(function() {
    document.documentElement.scrollTop = 19500;
  });
});




