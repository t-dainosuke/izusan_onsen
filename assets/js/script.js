jQuery(function ($) {
  // ヘッダーの高さを代入する処理
  function setHeaderHeights() {
    var commonHeaderHeight = $(".nav-header-wrapper").outerHeight();
    // ハンバーガーメニューの上部にheaderの高さ分の余白をつける
    $("header + *").css("padding-top", commonHeaderHeight + "px");
  }
  // リサイズ時にもsetHeaderHeightsを実行
  $(window).on('resize', function () {
    setHeaderHeights();
  });
  setHeaderHeights();

  // サブメニュー
  var submenuHeight = $(".submenu").outerHeight();
  $(".submenu > ul").css("top", submenuHeight + "px");
  $(".submenu").hover(function () {
    $("> ul", this).slideDown("fast");
  },
    function () {
      $(">ul", this).slideUp("fast");
    })


  // ハンバーガーメニューのクリック処理
  $('#openbtn').on('click', function () {
    $(this).toggleClass('active'); // ボタン自身に.activeクラスをトグル
    $('#hb-menu').toggleClass('active', $(this).hasClass('active')); // ハンバーガーメニューに.activeクラスをトグル
    if ($(this).hasClass('active')) {
      // ハンバーガーメニューがアクティブな場合の処理
      $('#openbtn .hamburger-lines').addClass('active');
      $('#openbtn .hamburger-lines .line:nth-child(1)').css('width', '60%'); // 上の線の幅を60%に設定
      $('#openbtn .hamburger-lines .line:nth-child(2)').css('width', '60%'); // 下の線の幅を60%に設定
      setTimeout(function () {
        // 交差させるために、上の線を下に、下の線を上に移動し、45度回転させる
        $('#openbtn .hamburger-lines .line:nth-child(1)').css('bottom', '0').css('transform', 'rotate(45deg)');
        $('#openbtn .hamburger-lines .line:nth-child(2)').css('top', '0').css('transform', 'rotate(-45deg)');
      }, 300); // 300ミリ秒後に実行
    } else {
      // ハンバーガーメニューが非アクティブな場合の処理
      $('#openbtn .hamburger-lines .line:nth-child(1)').css('transform', 'rotate(0deg)').css('bottom', 'auto'); // 上の線の回転と位置を元に戻す
      $('#openbtn .hamburger-lines .line:nth-child(2)').css('transform', 'rotate(0deg)').css('top', 'auto'); // 下の線の回転と位置を元に戻す
      setTimeout(function () {
        $('#openbtn .hamburger-lines .line:nth-child(1)').css('width', '100%'); // 上の線の幅を元に戻す
        $('#openbtn .hamburger-lines .line:nth-child(2)').css('width', '100%'); // 下の線の幅を元に戻す
        $('#openbtn .hamburger-lines').removeClass('active'); // .hamburger-linesから.activeクラスを除去
      }, 300); // 300ミリ秒後に実行
    }
  });

  /* slick option */
  $('.mainvisual .slider').slick({
    autoplay: true, //自動でスクロール
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 5000, //スライドが流れる速度を設定
    cssEase: "linear", //スライドの流れ方を等速に設定
    slidesToShow: 4, //表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, //矢印非表示
    pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, //画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
  $('.top-gallery-slider.slider').slick({
    autoplay: true, //自動でスクロール
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 5000, //スライドが流れる速度を設定
    cssEase: "linear", //スライドの流れ方を等速に設定
    swipe: false, // 操作による切り替えはさせない
    arrows: false, //矢印非表示
    variableWidth: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, //画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
});