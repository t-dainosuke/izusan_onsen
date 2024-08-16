'use strict';
{
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
    <meta property="og:image" content="https://www.izusan.com/assets/img/common/og_img.png"> <!-- //SNSで表示される画像を登録（縦横比＝1.91:1、1200px × 630px以上を推奨） -->
    <meta name="twitter:card" content="summary_large_image">
    <!-- アイコン -->
    <link rel="shortcut icon" href="assets/img/common/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="assets/img/common/apple-touch-icon.png" sizes="180x180">
    <link rel="icon" type="image/png" href="assets/img/common/android-touch-icon.png" sizes="192x192">
    <meta name="msapplication-TileImage" content="assets/img/common/win8-touch-icon.png"> <!-- //Win8以降のピン止め用画像の設定（144px × 144px）-->
    <meta name="msapplication-TileColor" content="#488f02"> <!-- //Win8以降のピン止め画像の背景設定-->
    <link rel="mask-icon" color="#488f02" href="assets/img/common/safari-touch-icon.svg"> <!-- //Safariピン止め画像設定（svgのみ）-->

    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/redmond/jquery-ui.css">

    <!-- フォント -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Sawarabi+Mincho&family=Zen+Kaku+Gothic+Antique:wght@500;700&display=swap" rel="stylesheet">
  `);

  document.footer.insertAdjacentHTML('afterbegin', `

  `);
}

const fullUrl = window.location.href;
const url = new URL(fullUrl);
const directoryUrl = url.origin + url.pathname.replace(/\/[^\/]*$/, '/');
const ogUrl = directoryUrl;
const ogImageUrl = `${directoryUrl}assets/img/og-image.jpg`;

// og:imageを作成または更新
let ogImageMetaTag = document.querySelector('meta[property="og:image"]');
if (!ogImageMetaTag) {
  ogImageMetaTag = document.createElement('meta');
  ogImageMetaTag.setAttribute('property', 'og:image');
  document.head.appendChild(ogImageMetaTag);
}
ogImageMetaTag.setAttribute('content', ogImageUrl);

// twitter:imageを作成または更新（修正：クオートの間違い）
let twitterImageMetaTag = document.querySelector('meta[name="twitter:image"]');
if (!twitterImageMetaTag) {
  twitterImageMetaTag = document.createElement('meta');
  twitterImageMetaTag.setAttribute('name', 'twitter:image');
  document.head.appendChild(twitterImageMetaTag);
}
twitterImageMetaTag.setAttribute('content', ogImageUrl);

// og:urlを作成または更新
let ogUrlMetaTag = document.querySelector('meta[property="og:url"]');
if (!ogUrlMetaTag) {
  ogUrlMetaTag = document.createElement('meta');
  ogUrlMetaTag.setAttribute('property', 'og:url');
  document.head.appendChild(ogUrlMetaTag);
}
ogUrlMetaTag.setAttribute('content', ogUrl);