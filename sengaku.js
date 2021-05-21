$(function () {
  // 最初のコンテンツ以外は非表示
  $(".accordion-content:not(:first-of-type)").css("display", "none");
  // 矢印の向きを変えておく
  $(".js-accordion-title:first-of-type").addClass("open");

  $(".js-accordion-title").click(function () {
    $(".open").not(this).removeClass("open").next().slideUp(300);
    $(this).toggleClass("open").next().slideToggle(300);
  });
});

$(function () {
  $('a[href^="#"]').click(function () {
    //スクロールのスピード
    var speed = 500;
    //リンク元を取得
    var href = $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? "html" : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
