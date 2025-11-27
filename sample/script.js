/*** AOS.js ***/
// 【アニメーション】フェードイン
AOS.init({
  offset: 0,      // アニメーションの距離（px）
  duration: 1000,    // 実行秒数（ミリ秒）
  easing: 'ease-in',   // イージング（緩急）
  delay: 400,        // 遅延秒数（ミリ秒）
  once: false,      // 1回だけかどうか
  anchorPlacement: 'bottom-top',  // 発火位置指定
});


/*** jQuery ***/
// 【アニメーション】スライドイン
$(window).on('load', function () {
  var $slideIn = $('.slide-in'),
      slideInOffsetTop = $slideIn.offset().top
      windowH = $(window).height();
  
  $(window).on('scroll', function () {
    // 総スクロール量 > .slide-in - ウィンドウサイズ
    // => .slide-inが表示領域に入ったら.showを追加、領域外では削除
    if ($(this).scrollTop() > slideInOffsetTop - windowH) {
      $slideIn.addClass('show');
    } else {
      $slideIn.removeClass('show');
    }
  });
});