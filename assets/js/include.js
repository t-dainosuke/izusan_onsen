'use strict';
{
  // 共通headタグ
  document.head.insertAdjacentHTML('afterbegin', `
    <meta name="robots" content="noindex">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="keywords" content="熱海,伊豆山,伊豆山温泉,観光,旅館,ホテル,宿泊,グルメ,散策,観光名所,パワースポット,おすすめ,安い,おいしい,楽しい,静岡県,熱海市">
    <meta name="author" content="伊豆山温泉観光協会・伊豆山温泉旅館組合">
    <meta name="copyright" content="© 2024 Atami Izusan Onsen">

    <!-- SNS -->
    <meta property="og:locale" content="ja_JP">
    <meta property="og:site_name" content="伊豆山温泉観光協会・伊豆山温泉旅館組合">
    <meta name="twitter:card" content="summary_large_image">
    <!-- アイコン -->
    <link rel="shortcut icon" href="/assets/img/common/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="/assets/img/common/apple-touch-icon.png" sizes="180x180">
    <link rel="icon" type="image/png" href="/assets/img/common/android-touch-icon.png" sizes="192x192">
    <meta name="msapplication-TileImage" content="/assets/img/common/win8-touch-icon.png"> <!-- //Win8以降のピン止め用画像の設定（144px × 144px）-->
    <meta name="msapplication-TileColor" content="transparent"> <!-- //Win8以降のピン止め画像の背景設定-->
    <link rel="mask-icon" color="transparent" href="/assets/img/common/safari-touch-icon.svg"> <!-- //Safariピン止め画像設定（svgのみ）-->

    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/redmond/jquery-ui.css">

    <!-- フォント -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Sawarabi+Mincho&family=Zen+Kaku+Gothic+Antique:wght@500;700&display=swap" rel="stylesheet">
  `);
}

document.addEventListener('DOMContentLoaded', function () {
  var footerElement = document.querySelector('footer');
  if (footerElement) {
    var currentYear = new Date().getFullYear();
    footerElement.insertAdjacentHTML('afterbegin', `
      <div class="top-border-wrapper medium-width-wrapper fb">
        <div class="footer-left">
        <a href="/">
          <img src="/assets/img/common/logo.svg" alt="熱海伊豆山温泉のロゴ" width="184" height="40.34">
        </a>
        <address>
            <p class="footer-author">伊豆山温泉観光協会・<br class="sp">伊豆山温泉旅館組合</p>
            <p class="footer-place">〒413-0011<br>
              熱海市田原本町9-1　熱海第一ビル地下1階</p>
            <p class="footer-phone">TEL：<a href="tel:+81557812631">0557-81-2631</a></p>
            <p class="footer-email">E-Mail：<a href="mailto:izusan@izusan.com">izusan@izusan.com</a></p>
          </address>
        </div>
        <div class="footer-right">
          <ul>
            <li><a href="/"><span>トップページ</span></a></li>
            <li><a href="#"><span>観光情報</span></a></li>
            <li><a href="/info/accommodation/"><span>宿泊施設</span></a></li>
            <li><a href="#"><span>ニュース</span></a></li>
            <li><a href="#"><span>頑張ってます伊豆山</span></a></li>
            <li><a href="#"><span>伊豆山の歴史</span></a></li>
            <li><a href="#"><span>伊豆山温泉について</span></a></li>
            <li><a href="/access/"><span>アクセス</span></a></li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright medium-width-wrapper">
        <small>&copy; 2024-${currentYear} Atami Izusan Onsen Kanko Kyokai / Izusan Onsen Ryokan Kumiai</small>
      </div>
    `);
  } else {
    console.error('Footer element not found.');
  }
});