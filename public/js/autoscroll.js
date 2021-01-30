$("#scrollbtn").click(function() {
  $(this)
    .find("i")
    .toggleClass("glyphicon-play")
    .toggleClass("glyphicon-pause");
  $("html, body").animate({ scrollBottom: 0 }, "slow");
});
