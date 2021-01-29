// GET request for username and print to hbrs
$.get("/api/user_data").then(data => {
  $(".member-name").text(data.email);
});

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  // Update song form submit
  $(".update-song").on("submit", e => {
    e.preventDefault();

    // Grab user values
    const updatedSong = {
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
        .trim()
    };
    // error handling
    if (!updatedSong.title) {
      $("#alert-title .msg").text("Song tile is empty");
      $("#alert-title").fadeIn(300);
      return;
    } else if (!updatedSong.artist) {
      $("#alert-artist .msg").text("Artist name is empty");
      $("#alert-artist").fadeIn(300);
      return;
    } else if (
      !updatedSong.tempo ||
      updatedSong.tempo > 200 ||
      updatedSong.tempo < 60
    ) {
      $("#alert-tempo .msg").text("BPM should be between 60 and 200");
      $("#alert-tempo").fadeIn(300);
      return;
    }
    // ajax call
    $.ajax({
      url: "/api/song/" + e.target.dataset.id,
      type: "PUT",
      data: updatedSong
    }).then(() => {
      window.location.href = "/song/" + e.target.dataset.id;
    });
  });

  // Delete function
  $(".delete-song").on("click", e => {
    $.ajax({
      url: "/api/song/" + e.target.dataset.id,
      type: "DELETE"
    }).then(() => {
      window.location.href = "/members";
    });
  });
});

///////////////////////// MODAL CODE BELOW //////////////////////////////////

// Get the modal
const modal1 = document.getElementById("songbirdie-modal");

// Get the button that opens the modal
const btn1 = document.getElementById("songbirdie-tab");

// Get the <span> element that closes the modal
const span1 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal1) {
    modal1.style.display = "none";
  }
};

///////////////////////// DELETE MODAL CODE BELOW //////////////////////////////////

// Get the button that opens the modal
const btn2 = document.getElementById("delete-tab");

// Get the modal
const modal2 = document.getElementById("delete-modal");

// Get the <span> element that closes the modal
const span2 = document.getElementsByClassName("delete-close")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
};
