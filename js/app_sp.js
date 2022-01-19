$(function () {
  var $win = $(window);
  var color_sp1 = $('.color_sp1');
  var color_sp2 = $('.color_sp2');
  var devise = $('.devise_sp');
  var head2_text = $('.head2_text');
  var head2_content = $('.head2_content');
  var curtain = $('.curtain_sp');
  var bottle_count = $('.bottle_count_sp');
  scroll;
    window.resizeTo(1024,800);
  $win.on('load scroll', function () {
    
    
    scroll = $win.scrollTop();
    //head表示・非表示開始px
    head_top_disappear_px = 300;
    head_text_appear_px = 600;
    headfix_disappear_px = 1000;
    head2_appear_px = 1300;
    head3_1_appear_px = 3800;
    head3_1_model_appear_px = 4300;
    head3_1_text_appear_px = 4800;
    head3_1_country_appear_px = 5300;
    head3_1_disappear_px = 5800;
    head3_black_text_px = 6300;
    head3_2_appear_px = 6800;
    head3_2_disappear_px = 8000;
    head4_curtain_px = 8800;
    head4_date_px = 9300;
    head4_text_px = 9800;
    head4_disappear_px = 11000;
    faq_appear_px = 12000;
    contact_appear_px = 14000;
    //デバイススライド開始・停止px
    color_sp1_px = 1800;
    color_sp2_px = 2300;
    devise_px = 2800;
    matrix_px = 3300;
    console.log(scroll);

    //head表示・非表示(最低限)
    if (scroll < head_top_disappear_px) {
      $('#head_fixed_sp').removeClass('none');
      $('#head_top_sp').removeClass('none');
      $('.head_fixed_text').addClass('none');
    } else if (scroll < head_text_appear_px) {
      $('#head_fixed_sp').removeClass('none');
      $('#head_top_sp').addClass('none');
      $('.head_fixed_text').addClass('none');
    } else if (scroll < headfix_disappear_px) {
      $('#head_fixed_sp').removeClass('none');
      $('#head_top_sp').addClass('none');
      $('.head_fixed_text').removeClass('none');
    } else if (scroll < head2_appear_px) {
      $('#head_fixed_sp').addClass('none');
      $('#head2_sp').addClass('none');
    } else if (scroll < head3_1_appear_px) {
      $('#head2_sp').removeClass('none');
      $('#head3_1_sp').addClass('none');
    } else if (scroll < head3_1_model_appear_px) {
      //head3地球背景表示
      $('#head2_sp').addClass('none');
      $('#head3_1_sp').removeClass('none');
      $('#head3_1_model_sp').addClass('none');
      $('#head3_1_text_sp').addClass('none');
      $('#head3_1_sphere_sp').addClass('none');
    } else if (scroll < head3_1_text_appear_px) {
      //head3モデル表示
      $('#head3_1_sp').removeClass('none');
      $('#head3_1_model_sp').removeClass('none');
      $('#head3_1_text_sp').addClass('none');
      $('#head3_1_sphere_sp').addClass('none');
    } else if (scroll < head3_1_country_appear_px) {
      //head3テキスト表示
      $('#head3_1_sp').removeClass('none');
      $('#head3_1_model_sp').removeClass('none');
      $('#head3_1_text_sp').removeClass('none');
      $('#head3_1_sphere_sp').addClass('none');
    } else if (scroll < head3_1_disappear_px) {
      //head3国球体表示
      $('#head3_1_sp').removeClass('none');
      $('#head3_1_model_sp').removeClass('none');
      $('#head3_1_text_sp').addClass('none');
      $('#head3_1_sphere_sp').removeClass('none');
      $('#head3_black_sp').addClass('none');
    } else if (scroll < head3_black_text_px) {
      //ブラックアウト
      $('#head3_1_sp').addClass('none');
      $('#head3_black_sp').removeClass('none');
      $('.black_text').addClass('none');
    } else if (scroll < head3_2_appear_px) {
      //テキスト表示
      $('#head3_black_sp').removeClass('none');
      $('.black_text').removeClass('none');
      $('#head3_2_sp').addClass('none');
    } else if (scroll < head3_2_disappear_px) {
      //head3_2表示
      $('#head3_black_sp').addClass('none');
      $('#head3_2_sp').removeClass('none');
      $('#head4_sp').addClass('none');
    } else if (scroll < head4_curtain_px) {
      //head3_2非表示
      $('#head3_2_sp').addClass('none');
      $('#head4_sp').removeClass('none');
      $('.devise2_sp').addClass('none');
    } else if (scroll < head4_disappear_px) {
      //head4デバイス表示
      $('#head4_sp').removeClass('none');
      $('.devise2_sp').removeClass('none');
      $('#head5_sp').addClass('none');
    } else if (scroll < faq_appear_px) {
      //head5表示
      $('#head4_sp').addClass('none');
      $('#head5_sp').removeClass('none');
      $('#head6_sp').addClass('none');
    } else if (scroll < contact_appear_px) {
      //head6(FAQ)表示
      $('#head5_sp').addClass('none');
      $('#head6_sp').removeClass('none');
      $('#head7_sp').addClass('none');
    } else if (scroll < 100000) {
      //head7(Contact)表示
      $('#head6_sp').addClass('none');
      $('#head7_sp').removeClass('none');
    }

    //head2デバイススライド
    if (scroll < color_sp1_px) {
      color_sp1.css({left: '0px'});
      color_sp2.css({left: '450px'});
      devise.css({left: '450px'});
      devise.css({transform: 'none'});
    } else if (scroll < color_sp2_px) {
      color_sp1.css({left: '-450px'});
      color_sp2.css({left: '0px'});
      devise.css({left: '450px'});
      devise.css({transform: 'none'});
    } else if (scroll < devise_px) {
      color_sp1.css({left: '-450px'});
      color_sp2.css({left: '-450px'});
      devise.css({left: '0px'});
      devise.css({top: '180px'});
      devise.css({transform: 'none'});
      head2_text.removeClass('none');
    } else if (scroll < matrix_px) {
      color_sp1.css({left: '-450px'});
      color_sp2.css({left: '-450px'});
      devise.css({left: '-50px'});
      devise.css({top: '150px'});
      devise.css({transform: 'matrix(0.97, -0.26, 0.26, 0.97, 0, 0)'});
      head2_text.addClass('none');
      head2_content.addClass('none');
    } else {
      color_sp1.css({left: '-450px'});
      color_sp2.css({left: '-450px'});
      devise.css({left: '50px'});
      devise.css({top: '150px'});
      devise.css({transform: 'matrix(0.97, 0.26, -0.26, 0.97, 0, 0)'});
      head2_text.addClass('none');
      head2_content.removeClass('none');
    }

    //カーテン
    if (scroll < head3_2_disappear_px) {
      curtain.css({top: '-1300px'});
      curtain.css({right: '-1160px'});
    } else if (scroll < head4_curtain_px) {
      current = (scroll - head3_2_disappear_px) * 10 - 1300;
      if (current > -40) {
        current = -40;
      }
      console.log(current);
      curtain.css({top: current + 'px'});
      curtain.css({right: 40 + (current) + 'px'});
    } else {
      curtain.css({top: '-40px'});
      curtain.css({right: '0px'});
    }

    //head4_date
    if (scroll < head4_date_px) {
      //head4_date表示まで
      $('.head4_date').css({left: '-300px'});
    } else {
      //head4_date表示
      $('.head4_date').css({left: '36px'});
    }

    //head4_text
    if (scroll < head4_text_px) {
      //head4_date表示まで
      $('.head4_text').addClass('none');
    } else {
      //head4_date表示
      $('.head4_text').removeClass('none');
    }

    //head表示・非表示(高速スクロール時のデザイン崩れ防止処理)
    if (scroll < head_top_disappear_px) {
      $('#head2_sp').addClass('none');
      $('#head3_1_sp').addClass('none');
      $('#head3_black_sp').addClass('none');
      $('#head3_2_sp').addClass('none');
      $('#head4_sp').addClass('none');
      $('#head5_sp').addClass('none');
      $('#head6_sp').addClass('none');
      $('#head7_sp').addClass('none');
    } else if (scroll < head2_appear_px) {
      //全消し
      $('#head_fixed_sp').addClass('none');
      $('#head_top_sp').addClass('none');
      $('#head2_sp').addClass('none');
      $('#head3_1_sp').addClass('none');
      $('#head3_black_sp').addClass('none');
      $('#head3_2_sp').addClass('none');
      $('#head4_sp').addClass('none');
      $('#head5_sp').addClass('none');
      $('#head6_sp').addClass('none');
      $('#head7_sp').addClass('none');
    } else if (scroll < head3_1_appear_px) {
      $('#head_fixed_sp').addClass('none');
      $('#head_top_sp').addClass('none');
      $('#head3_black_sp').addClass('none');
      $('#head3_2_sp').addClass('none');
      $('#head4_sp').addClass('none');
      $('#head5_sp').addClass('none');
      $('#head6_sp').addClass('none');
      $('#head7_sp').addClass('none');
    } else if (scroll < head3_1_disappear_px) {
      //head3国球体表示
      $('#head_fixed_sp').addClass('none');
      $('#head_top_sp').addClass('none');
      $('#head2_sp').addClass('none');
      $('#head3_black_sp').addClass('none');
      $('#head3_2_sp').addClass('none');
      $('#head4_sp').addClass('none');
      $('#head5_sp').addClass('none');
      $('#head6_sp').addClass('none');
      $('#head7_sp').addClass('none');
    } else if (scroll < head3_2_appear_px) {
      //テキスト表示
      $('#head_fixed_sp').addClass('none');
      $('#head_top_sp').addClass('none');
      $('#head2_sp').addClass('none');
      $('#head3_1_sp').addClass('none');
      $('#head4_sp').addClass('none');
      $('#head5_sp').addClass('none');
      $('#head6_sp').addClass('none');
      $('#head7_sp').addClass('none');
    } else if (scroll < head3_2_disappear_px) {
      //head3_2表示
      $('#head_fixed_sp').addClass('none');
      $('#head_top_sp').addClass('none');
      $('#head2_sp').addClass('none');
      $('#head3_1_sp').addClass('none');
      $('#head5_sp').addClass('none');
      $('#head6_sp').addClass('none');
      $('#head7_sp').addClass('none');
    } else if (scroll < head4_disappear_px) {
      //head4デバイス表示
      $('#head_fixed_sp').addClass('none');
      $('#head_top_sp').addClass('none');
      $('#head2_sp').addClass('none');
      $('#head3_1_sp').addClass('none');
      $('#head3_black_sp').addClass('none');
      $('#head6_sp').addClass('none');
      $('#head7_sp').addClass('none');
    } else if (scroll < faq_appear_px) {
      //head5表示
      $('#head_fixed_sp').addClass('none');
      $('#head_top_sp').addClass('none');
      $('#head2_sp').addClass('none');
      $('#head3_1_sp').addClass('none');
      $('#head3_black_sp').addClass('none');
      $('#head3_2_sp').addClass('none');
      $('#head7_sp').addClass('none');
    } else if (scroll < 100000) {
      $('#head_fixed_sp').addClass('none');
      $('#head_top_sp').addClass('none');
      $('#head2_sp').addClass('none');
      $('#head3_1_sp').addClass('none');
      $('#head3_black_sp').addClass('none');
      $('#head3_2_sp').addClass('none');
      $('#head4_sp').addClass('none');
      $('#head5_sp').addClass('none');
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
    document.documentElement.scrollTop = 20000;
  });
});


