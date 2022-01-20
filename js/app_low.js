$(function () {
  var $win = $(window);
  var devise = $('.devise_low');
  var devise2 = $('.devise2_low');
  var curtain = $('.curtain_low');
  var bottle_count = $('.bottle_count_low');
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

    //head表示・非表示(最低限)
    if (scroll < head_top_disappear_px) {
      $('#head_top_low').removeClass('none');
      $('#head1_low').addClass('none');
      $('.fixed_sideline').addClass('none');
    } else if (scroll < head1_appear_px) {
      $('#head_top_low').addClass('none');
      $('#head1_low').addClass('none');
      $('.fixed_sideline').addClass('none');
    } else if (scroll < head1_disappear_px) {
      $('#head1_low').removeClass('none');
      $('.fixed_sideline').removeClass('none');
    } else if (scroll < head2_1_appear_px) {
      $('#head1_low').addClass('none');
      $('#head2_1_low').addClass('none');
    } else if (scroll < head2_1_disappear_px) {
      $('#head2_1_low').removeClass('none');
    } else if (scroll < head2_2_appear_px) {
      $('#head2_1_low').addClass('none');
      $('#head2_2_low').addClass('none');
    } else if (scroll < head2_2_disappear_px) {
      $('#head2_2_low').removeClass('none');
      setTimeout(function(){$('.exs').removeClass('none');},1000);
    } else if (scroll < head3_1_appear_px) {
      $('#head2_2_low').addClass('none');
      $('#head3_1_low').addClass('none');
    } else if (scroll < head3_1_model_appear_px) {
      //head3地球背景表示
      $('#head3_1_low').removeClass('none');
      $('#head3_1_model_low').addClass('none');
      $('#head3_1_sphere_low').addClass('none');
      $('#head3_1_text_low').addClass('none');
    } else if (scroll < head3_1_country_appear_px) {
      //head3モデル表示
      $('#head3_1_low').removeClass('none');
      $('#head3_1_model_low').removeClass('none');
      $('#head3_1_sphere_low').addClass('none');
      $('#head3_1_text_low').addClass('none');
    } else if (scroll < head3_1_text_appear_px) {
      //head3国球体表示
      $('#head3_1_low').removeClass('none');
      $('#head3_1_model_low').removeClass('none');
      $('#head3_1_sphere_low').removeClass('none');
      $('#head3_1_text_low').addClass('none');
    } else if (scroll < head3_1_disappear_px) {
      //head3テキスト表示
      $('#head3_1_low').removeClass('none');
      $('#head3_1_model_low').removeClass('none');
      $('#head3_1_sphere_low').removeClass('none');
      $('#head3_1_text_low').removeClass('none');
      $('#head3_black_low').addClass('none');
    } else if (scroll < head3_black_text_px) {
      //ブラックアウト
      $('#head3_1_low').addClass('none');
      $('#head3_black_low').removeClass('none');
    } else if (scroll < head3_2_appear_px) {
      //テキスト表示
      $('#head3_black_low').removeClass('none');
      $('#head3_2_low').addClass('none');
    } else if (scroll < head3_2_disappear_px) {
      //head3_2表示
      $('#head3_black_low').addClass('none');
      $('#head3_2_low').removeClass('none');
      $('#head4_low').addClass('none');
    } else if (scroll < head4_curtain_px) {
      //head3_2非表示
      $('#head3_2_low').addClass('none');
      $('#head4_low').removeClass('none');
    } else if (scroll < head4_text_px) {
      //head4テキスト表示まで
      $('#head4_low').removeClass('none');
      $('#head4_text_low').addClass('none');
    } else if (scroll < head4_disappear_px) {
      //head4テキスト表示
      $('#head4_low').removeClass('none');
      $('#head4_text_low').removeClass('none');
      $('#head5_low').addClass('none');
    } else if (scroll < faq_appear_px) {
      //head5表示
      $('#head4_low').addClass('none');
      $('#head5_low').removeClass('none');
      $('#head6_low').addClass('none');
    } else if (scroll < contact_appear_px) {
      //head6(FAQ)表示
      $('#head5_low').addClass('none');
      $('#head6_low').removeClass('none');
      $('#head7_low').addClass('none');
    } else if (scroll < 100000) {
      //head7(Contact)表示
      $('#head6_low').addClass('none');
      $('#head7_low').removeClass('none');
    }

    //固定ヘッダー・フッター
    if (scroll < head3_1_disappear_px) {
      $('.fixed_head').removeClass('none');
      $('.fixed_foot_sp').removeClass('none');
    } else if (scroll < head3_2_appear_px) {
      $('.fixed_head').addClass('none');
      $('.fixed_foot_sp').addClass('none');
    } else {
      $('.fixed_head').removeClass('none');
      $('.fixed_foot_sp').removeClass('none');
    }

    //固定ヘッダーの色
    if (scroll < head3_1_appear_px) {
      $('.header_content').css({color: 'black'});
    } else if (scroll < head3_2_disappear_px) {
      $('.header_content').css({color: 'white'});
    } else if (scroll < contact_appear_px) {
      $('.header_content').css({color: 'black'});
    } else {
      $('.header_content').css({color: 'white'});
    }

    //デバイススライド
    if (scroll < slide_begin_px) {
      devise.removeClass('none');
      devise.css({left: '1000px'});
      devise.css({transform: 'none'});
    } else if (scroll < slide_stop_px) {
      devise.removeClass('none');
      current = 1000 - scroll + slide_begin_px;
      console.log(current);
      devise.css({left: current + 'px'});
      devise.css({transform: 'none'});
    } else if (scroll < slide_begin_px2) {
      devise.removeClass('none');
      devise.css({left: '270px'});
      devise.css({transform: 'none'});
    } else if (scroll < slide_stop_px2) {
      devise.removeClass('none');
      current_left = 230 + scroll - slide_begin_px2;
      devise.css({left: current_left + 'px'});
      devise.css({transform: 'matrix(0.97, 0.26, -0.26, 0.97, 0, 0)'});
    } else if (scroll < matrix_px) {
      devise.removeClass('none');
      devise.css({left: '700px'});
      devise.css({transform: 'matrix(0.97, 0.26, -0.26, 0.97, 0, 0)'});
    } else if (scroll < matrix_end_px) {
      devise.removeClass('none');
      devise.css({left: '610px'});
      devise.css({transform: 'matrix(0.97, -0.26, 0.26, 0.97, 0, 0)'});
    } else if (scroll < devise_disappear_px) {
      devise.css({left: '700px'});
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
    } else {
      curtain.css({top: '-40px'});
      curtain.css({left: '-100px'});
    }

    //head2_2 img
    if (scroll < head2_2_appear_px) {
      $('.img_ex1_low').css({left: '-300px'});
      $('.img_ex2_low').css({left: '-300px'});
      $('.img_ex3_low').css({left: '-300px'});
      $('.img_ex4_low').css({left: '-300px'});
    } else {
      $('.img_ex1_low').css({left: '220px'});
      $('.img_ex2_low').css({left: '470px'});
      $('.img_ex3_low').css({left: '720px'});
      $('.img_ex4_low').css({left: '970px'});
    }

    //国球体
    if (scroll < head3_1_country_appear_px) {
      $('.sphere_por_low').css({left: '-300px'});
      $('.sphere_jap_low').css({left: '-300px'});
      $('.sphere_ame_low').css({left: '-300px'});
      $('.sphere_bra_low').css({left: '-300px'});
    } else {
      $('.sphere_por_low').css({left: '200px'});
      $('.sphere_jap_low').css({left: '450px'});
      $('.sphere_ame_low').css({left: '700px'});
      $('.sphere_bra_low').css({left: '950px'});
    }

    //black_text
    if (scroll < head3_black_text_px) {
      $('.black_text').addClass('none');
    } else {
      $('.black_text').removeClass('none');
    }

    //head4テキスト
    if (scroll < head4_text_px) {
      $('.head4_text1_low').css({left: '2500px'});
      $('.head4_text2_low').css({left: '2500px'});
      $('.head4_text3_low').css({left: '2500px'});
      $('.head4_text4_low').css({left: '2500px'});
      $('.head4_text5_low').css({left: '2500px'});
      $('.head4_text6_low').css({left: '2500px'});
    } else {
      $('.head4_text1_low').css({left: '850px'});
      $('.head4_text2_low').css({left: '640px'});
      $('.head4_text3_low').css({left: '700px'});
      $('.head4_text4_low').css({left: '524px'});
      $('.head4_text5_low').css({left: '300px'});
      $('.head4_text6_low').css({left: '200px'});
    }


    //ページ数関連
    if (scroll < head1_appear_px) {
      bottle_count.html("");
    } else if (scroll < head2_1_appear_px) {
      bottle_count.html("01");
      $('.page_point1').css({opacity: 1});
      $('.page_point2').css({opacity: 0.2});
      $('.page_point3').css({opacity: 0.2});
      $('.page_point6').css({opacity: 0.2});
      $('.page_point7').css({opacity: 0.2});
      $('.page_point8').css({opacity: 0.2});
      $('.fixed_sideline').removeClass('none');
    } else if (scroll < head2_1_disappear_px) {
      bottle_count.html("02");
      $('.page_point1').css({opacity: 0.2});
      $('.page_point2').css({opacity: 1});
      $('.page_point3').css({opacity: 0.2});
      $('.page_point6').css({opacity: 0.2});
      $('.page_point7').css({opacity: 0.2});
      $('.page_point8').css({opacity: 0.2});
      $('.fixed_sideline').removeClass('none');
    } else if (scroll < head2_2_disappear_px) {
      bottle_count.html("03");
      $('.page_point1').css({opacity: 0.2});
      $('.page_point2').css({opacity: 0.2});
      $('.page_point3').css({opacity: 1});
      $('.page_point6').css({opacity: 0.2});
      $('.page_point7').css({opacity: 0.2});
      $('.page_point8').css({opacity: 0.2});
      $('.fixed_sideline').removeClass('none');
    } else if (scroll < head3_black_text_px) {
      bottle_count.html("04");
      $('.fixed_sideline').addClass('none');
    } else if (scroll < head3_2_disappear_px) {
      bottle_count.html("05");
      $('.fixed_sideline').addClass('none');
    } else if (scroll < head4_disappear_px) {
      bottle_count.html("06");
      $('.page_point1').css({opacity: 0.2});
      $('.page_point2').css({opacity: 0.2});
      $('.page_point3').css({opacity: 0.2});
      $('.page_point6').css({opacity: 1});
      $('.page_point7').css({opacity: 0.2});
      $('.page_point8').css({opacity: 0.2});
      $('.fixed_sideline').removeClass('none');
    } else if (scroll < faq_appear_px) {
      bottle_count.html("07");
      $('.page_point1').css({opacity: 0.2});
      $('.page_point2').css({opacity: 0.2});
      $('.page_point3').css({opacity: 0.2});
      $('.page_point6').css({opacity: 0.2});
      $('.page_point7').css({opacity: 1});
      $('.page_point8').css({opacity: 0.2});
      $('.fixed_sideline').removeClass('none');
    } else if (scroll < contact_appear_px) {
      bottle_count.html("08");
      $('.page_point1').css({opacity: 0.2});
      $('.page_point2').css({opacity: 0.2});
      $('.page_point3').css({opacity: 0.2});
      $('.page_point6').css({opacity: 0.2});
      $('.page_point7').css({opacity: 0.2});
      $('.page_point8').css({opacity: 1});
      $('.fixed_sideline').removeClass('none');
    } else if (scroll < 100000) {
      bottle_count.html("09");
      $('.fixed_sideline').addClass('none');
    }

    //head表示・非表示(高速スクロール時のデザイン崩れ防止処理)
    if (scroll < head2_1_appear_px) {
      $('#head2_1_low').addClass('none');
      $('#head2_2_low').addClass('none');
      $('#head3_1_low').addClass('none');
      $('#head3_black_low').addClass('none');
      $('#head3_2_low').addClass('none');
      $('#head4_low').addClass('none');
      $('#head5_low').addClass('none');
      $('#head6_low').addClass('none');
      $('#head7_low').addClass('none');
    } else if (scroll < head2_1_disappear_px) {
      $('#head1_low').addClass('none');
      $('#head2_2_low').addClass('none');
      $('#head3_1_low').addClass('none');
      $('#head3_black_low').addClass('none');
      $('#head3_2_low').addClass('none');
      $('#head4_low').addClass('none');
      $('#head5_low').addClass('none');
      $('#head6_low').addClass('none');
      $('#head7_low').addClass('none');
    } else if (scroll < head2_2_appear_px) {
      $('#head1_low').addClass('none');
      $('#head3_1_low').addClass('none');
      $('#head3_black_low').addClass('none');
      $('#head3_2_low').addClass('none');
      $('#head4_low').addClass('none');
      $('#head5_low').addClass('none');
      $('#head6_low').addClass('none');
      $('#head7_low').addClass('none');
    } else if (scroll < head2_2_disappear_px) {
      $('#head1_low').addClass('none');
      $('#head2_1_low').addClass('none');
      $('#head3_1_low').addClass('none');
      $('#head3_black_low').addClass('none');
      $('#head3_2_low').addClass('none');
      $('#head4_low').addClass('none');
      $('#head5_low').addClass('none');
      $('#head6_low').addClass('none');
      $('#head7_low').addClass('none');
    } else if (scroll < head3_1_appear_px) {
      $('#head1_low').addClass('none');
      $('#head2_1_low').addClass('none');
      $('#head3_black_low').addClass('none');
      $('#head3_2_low').addClass('none');
      $('#head4_low').addClass('none');
      $('#head5_low').addClass('none');
      $('#head6_low').addClass('none');
      $('#head7_low').addClass('none');
    } else if (scroll < head3_1_disappear_px) {
      $('#head1_low').addClass('none');
      $('#head2_1_low').addClass('none');
      $('#head2_2_low').addClass('none');
      $('#head3_black_low').addClass('none');
      $('#head3_2_low').addClass('none');
      $('#head4_low').addClass('none');
      $('#head5_low').addClass('none');
      $('#head6_low').addClass('none');
      $('#head7_low').addClass('none');
    } else if (scroll < head3_2_appear_px) {
      $('#head1_low').addClass('none');
      $('#head2_1_low').addClass('none');
      $('#head2_2_low').addClass('none');
      $('#head3_1_low').addClass('none');
      $('#head3_2_low').addClass('none');
      $('#head4_low').addClass('none');
      $('#head5_low').addClass('none');
      $('#head6_low').addClass('none');
      $('#head7_low').addClass('none');
    } else if (scroll < head3_2_disappear_px) {
      $('#head1_low').addClass('none');
      $('#head2_1_low').addClass('none');
      $('#head2_2_low').addClass('none');
      $('#head3_1_low').addClass('none');
      $('#head4_low').addClass('none');
      $('#head5_low').addClass('none');
      $('#head6_low').addClass('none');
      $('#head7_low').addClass('none');
    } else if (scroll < head4_disappear_px) {
      $('#head1_low').addClass('none');
      $('#head2_1_low').addClass('none');
      $('#head2_2_low').addClass('none');
      $('#head3_1_low').addClass('none');
      $('#head3_black_low').addClass('none');
      $('#head3_2_low').addClass('none');
      $('#head5_low').addClass('none');
      $('#head6_low').addClass('none');
      $('#head7_low').addClass('none');
    } else if (scroll < faq_appear_px) {
      $('#head1_low').addClass('none');
      $('#head2_1_low').addClass('none');
      $('#head2_2_low').addClass('none');
      $('#head3_1_low').addClass('none');
      $('#head3_black_low').addClass('none');
      $('#head3_2_low').addClass('none');
      $('#head7_low').addClass('none');
    } else if (scroll < contact_appear_px) {
      $('#head1_low').addClass('none');
      $('#head2_1_low').addClass('none');
      $('#head2_2_low').addClass('none');
      $('#head3_1_low').addClass('none');
      $('#head3_black_low').addClass('none');
      $('#head3_2_low').addClass('none');
      $('#head4_low').addClass('none');
    } else if (scroll < 100000) {
      $('#head1_low').addClass('none');
      $('#head2_1_low').addClass('none');
      $('#head2_2_low').addClass('none');
      $('#head3_1_low').addClass('none');
      $('#head3_black_low').addClass('none');
      $('#head3_2_low').addClass('none');
      $('#head4_low').addClass('none');
      $('#head5_low').addClass('none');
    }

  });
});

$(function(){
  $('#add_faq_low').click(function() {
    if ($(this).prop('checked')) {
      $('.add_faq_box').show();
    } else {
      $('.add_faq_box').hide();
    }
  });
});

$(function(){
  $('#menu_faq_low').click(function() {
    document.documentElement.scrollTop = 17700;
  });
});

$(function(){
  $('#menu_contact_low').click(function() {
    document.documentElement.scrollTop = 20000;
  });
});


