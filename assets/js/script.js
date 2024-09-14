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

// twitter:imageを作成または更新
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

// canonicalを作成または更新
let canonicalMetaTag = document.querySelector('link[rel="canonical"]');
if (!canonicalMetaTag) {
  canonicalMetaTag = document.createElement('link');
  canonicalMetaTag.setAttribute('rel', 'canonical');
  document.head.appendChild(canonicalMetaTag);
}
canonicalMetaTag.setAttribute('href', ogUrl);

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
    $("> ul", this).stop(true, true).slideDown("fast");
  }, function () {
    $("> ul", this).stop(true, true).slideUp("fast");
  });

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
    speed: 12000, //スライドが流れる速度を設定
    cssEase: "linear", //スライドの流れ方を等速に設定
    swipe: false, // 操作による切り替えはさせない
    arrows: false, //矢印非表示
    pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
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

  // OpenWeatherMap API の URL
  const apiKey = '3c2ca98bfc502150b6e40b43d09ef673';
  const city = 'Atami';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=jp&units=metric`;

  // 天気の英語の説明を日本語に変換するための辞書
  const translations = {
    "clear sky": "晴れ",
    "few clouds": "曇り時々晴れ",
    "scattered clouds": "曇り",
    "broken clouds": "曇り",
    "overcast clouds": "曇り",
    "shower rain": "にわか雨",
    "rain": "雨",
    "thunderstorm": "雷雨",
    "snow": "雪",
    "mist": "霧",
    "drizzle": "細かい雨",
    "heavy intensity rain": "強い雨",
    "light rain": "小雨",
    "moderate rain": "中程度の雨",
    "heavy snow": "大雪",
    "light snow": "小雪",
    "sleet": "みぞれ",
    "haze": "もや",
    "fog": "霧",
    "sand": "砂嵐",
    "dust": "ほこり",
    "volcanic ash": "火山灰",
    "squall": "突風",
    "tornado": "竜巻"
  };

  // API からデータを取得する関数
  function getWeather() {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // 今日の日付を出力
        displayTodayDate(data.dt);

        // 天気情報を HTML に表示
        const temp = data.main.temp.toFixed(1);
        document.getElementById('temp').textContent = `${temp} ℃`;

        // 天気の説明を日本語に翻訳
        const descriptions = data.weather.map(w => translations[w.description] || w.description);
        const combinedDescription = descriptions.join(' / ');
        document.getElementById('weather-description').textContent = combinedDescription;

        // 天気アイコンの設定
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById('weather-image').src = iconUrl;
      })
      .catch(error => console.error('Error fetching weather data:', error));
    $('.weather-info').addClass('active');
  }

  $('.weather-info').addClass(weather_eng);
  // UNIXタイムスタンプを日付に変換して表示する関数
  function displayTodayDate(timestamp) {
    // UNIXタイムスタンプをミリ秒に変換
    const date = new Date(timestamp * 1000);

    // 年、月、日を取得
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月は0から始まるので+1する
    const day = date.getDate();

    // 月と日が一桁の場合はゼロを取り、二桁の場合はそのまま表示
    const formattedMonth = month < 10 ? month : month;
    const formattedDay = day < 10 ? day : day;

    // 「M月D日」形式で日付を表示
    const todayDate = `${formattedMonth}月${formattedDay}日`;

    // HTML要素に日付を表示
    document.getElementById('today-date').textContent = todayDate;
  }
  // ページが読み込まれたときに天気情報を取得
  window.onload = getWeather;

});

