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
  var clonedElements = $('#mainvisual-slider > *').clone(); // 要素をクローン
  $('#mainvisual-slider').append(clonedElements); // クローンした要素を親コンテナに追加

/* slick option */
$(document).ready(function () {
  // スライダーの初期化
  var $infiniteSlider = $('#mainvisual-slider, .top-gallery-slider');

  $infiniteSlider.slick({
    autoplay: true, // 自動でスクロール
    infinite: true, // 無限ループを有効化
    swipe: false, // スワイプを無効化
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 15000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させない
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させない
    variableWidth: true, // 幅を可変にする
    slidesToShow: 3, // 一度に表示するスライドの数
    slidesToScroll: 1, // スクロール時に移動するスライドの数
    centerMode: true, // センターモードを有効にする
    centerPadding: '0px', // センターモード時のパディングを設定
    responsive: [
      {
        breakpoint: 768, // 768px未満の画面サイズに対する設定
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1024, // 1024px未満の画面サイズに対する設定
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  // Intersection Observerを使って、最初のスライドが表示された時にクローンを作成する
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // 最初のスライドが右側から現れた時
        createClones();
        // 監視を解除
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null, // ビューポート基準
    threshold: 0.1 // スライドの10%が表示されたら処理を開始
  });

  // 最初のスライドを監視
  observer.observe($infiniteSlider.find('.slick-slide').first()[0]);

  // クローンを作成する関数
  function createClones() {
    var $slides = $infiniteSlider.find('.slick-slide:not(.slick-clone)'); // クローンではないスライドを選択

    // すべてのスライドをクローン
    $slides.each(function () {
      var $clone = $(this).clone().addClass('slick-clone'); // クローンにslick-cloneクラスを追加
      $infiniteSlider.append($clone); // スライダーの後にクローンを追加
    });

    // 再度slickを初期化してクローンを認識させる
    $infiniteSlider.slick('slickAdd', $clone);
  }
});


  // OpenWeatherMap API の URL
  const apiKey = '3c2ca98bfc502150b6e40b43d09ef673';
  const city = 'Atami';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=jp&units=metric`;

  // 天気の英語の説明を日本語に変換するための辞書
  const translations = {
    "clear sky": "晴れ", // 01d (昼), 01n (夜)
    "few clouds": "曇り時々晴れ", // 02d (昼), 02n (夜)
    "scattered clouds": "曇り", // 03d (昼), 03n (夜)
    "broken clouds": "曇り", // 04d (昼), 04n (夜)
    "overcast clouds": "曇り", // 04d (昼), 04n (夜)
    "shower rain": "にわか雨", // 09d (昼), 09n (夜)
    "rain": "雨", // 10d (昼), 10n (夜)
    "thunderstorm": "雷雨", // 11d (昼), 11n (夜)
    "snow": "雪", // 13d (昼), 13n (夜)
    "mist": "霧", // 50d (昼), 50n (夜)
    "drizzle": "霧雨", // 09d
    "heavy intensity rain": "強い雨", // 10d
    "light rain": "小雨", // 10d
    "moderate rain": "やや強いの雨", // 10d
    "heavy snow": "大雪", // 13d
    "light snow": "小雪", // 13d
    "sleet": "みぞれ", // 13d
    "haze": "もや", // 50d
    "fog": "霧", // 50d
    "sand": "砂嵐", // 50d
    "dust": "ほこり", // 50d
    "volcanic ash": "火山灰", // 50d
    "squall": "突風", // 50d
    "tornado": "竜巻" // 50d
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
        document.getElementById('temp').textContent = `${temp}℃`;

        // 天気の説明を日本語に翻訳
        const descriptions = data.weather.map(w => translations[w.description] || w.description);
        const combinedDescription = descriptions.join(' / ');
        document.getElementById('description').textContent = combinedDescription;

        // 天気アイコンの設定
        const iconUrl = `/assets/img/weather/weather${data.weather[0].icon}.svg`;
        document.getElementById('weather-image').src = iconUrl;
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }

  $('.weather-info').addClass('weather_eng');
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

    // 曜日を日本語に変換
    const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
    const weekday = daysOfWeek[date.getDay()];

    // 「M月D日」形式で日付を表示
    const todayDate = `<div>${formattedMonth}<small>月</small>${formattedDay}<small>日(${weekday})</small></div>`;

    // HTML要素に日付を表示
    document.getElementById('today-date').innerHTML = todayDate;
  }
  // ページが読み込まれたときに天気情報を取得
  $('.weather-info').addClass('active');
  window.onload = getWeather;

});

