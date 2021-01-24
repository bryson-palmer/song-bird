$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  $.get("/api/song", songs => {
    const artistSongs = $("<div>");
    // console.log(songs);

    artistSongs.addClass("songList d-flex flex-col");

    for (let i = 0; i < songs.length; i++) {
      // console.log(songs[i].id);
      const artist = $("<a href='/song/" + songs[i].id.toString() + "' >").text(
        songs[i].title + ", " + songs[i].artist
      );

      artist.addClass("artist-name");

      artistSongs.append(artist, "<br>");

      console.log("isthisworking");
    }

    $("#song-list").append(artistSongs);

    // console.log(songs);
    // console.log($("#song-list"));
    // console.log(artistSongs);
  });
});

///////////////////////// MODAL CODE BELOW //////////////////////////////////

// Get the modal
const modal = document.getElementById("songbirdie-modal");

// Get the button that opens the modal
const btn = document.getElementById("songbirdie-tab");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
