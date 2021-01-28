// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  // Song form submit
  $(".create-song").on("submit", e => {
    e.preventDefault();

    // Get user info
    $.get("/api/user_data").then(data => {
      const userId = data.id;

      // Grab user values
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

      if (!newSong.title) {
        $("#alert-title .msg").text("Song tile is empty");
        $("#alert-title").fadeIn(30);
        return;
      } else if (!newSong.artist){
        $("#alert-artist .msg").text("Artist name is empty");
        $("#alert-artist").fadeIn(30);
        return;
      } else if (!newSong.tempo || newSong.tempo > 200 || newSong.tempo < 60){
        $("#alert-tempo .msg").text("BPM should be between 60 and 200");
        $("#alert-tempo").fadeIn(30);
        return;
      };

      // ajax call
      $.ajax({
        url: "/api/addSong",
        data: newSong,
        type: "POST"
      }).then(() => {
        // alert("Adding " + newSong.title + " to your song book.");
        window.location.href = "/members";
      });
    });
  });
});

// GET request for username and print to hbrs
$.get("/api/user_data").then(data => {
  $(".member-name").text(data.email);
});

///////////////////////// MODAL CODE BELOW //////////////////////////////////

// Get the modal
const modal = document.getElementById("songbirdie-modal");

// Get the button that opens the modal
const btn = document.getElementById("songbirdie-tab");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
