$(document).ready(() => {
  $(".create-form").on("submit", event => {
    event.preventDefault();

    $.get("/api/user_data").then(data => {
      const userId = data.id;

      const newSong = {
        title: $("#title")
          .val()
          .trim(),
        artist: $("#artist")
          .val()
          .trim(),
        tempo: $("#tempo")
          .val()
          .trim(),
        songkey: $("#key")
          .val()
          .trim(),
        chords: $("#chords")
          .val()
          .trim(),
        lyrics: $("#lyrics")
          .val()
          .trim(),
        UserId: userId
      };

      $.ajax({
        url: "/api/song",
        data: newSong,
        method: "POST"
      }).then(() => {
        console.log("Adding " + newSong.title + " to your song book.");
      });
    });
  });
});
