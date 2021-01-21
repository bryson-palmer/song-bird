$("create-form").on("submit", event => {
  event.preventDefault();

  const newTitle = $("#title")
    .val()
    .trim();

  $.ajax("/createSong", {
    type: "POST",
    data: newTitle
  }).then(() => {
    console.log("newTitle:" + newTitle);
  });
});
