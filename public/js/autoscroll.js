$("#scrollbtn").click(function() {
  $(this)
    .find("i")
    .toggleClass("glyphicon-play")
    .toggleClass("glyphicon-pause");
});
