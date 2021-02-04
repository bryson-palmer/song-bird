$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  // Get request for user data
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  // Get request for list of songs in user's table
  $.get("/api/song", songs => {
    // Create div
    const artistSongs = $("<div>");

    // Add class
    artistSongs.addClass("song-list");

    // Loop over list of songs in table
    for (let i = 0; i < songs.length; i++) {
      // Create div for each artist
      const artistInfo = $("<div>");
      artistInfo.addClass("artist-box");

      // Artist song
      const song = $("<a href='/song/" + songs[i].id.toString() + "' >").text(
        songs[i].title
      );

      // Artist name
      const artistName = $("<li>songs[i].id.toString() </li>").text(
        songs[i].artist
      );

      // Add class
      song.addClass("artist-title");
      artistName.addClass("artist-name");

      // Append to dynamically created div
      artistInfo.append(song, artistName, "<br>");

      artistSongs.append(artistInfo);
    }

    // Append to heml
    $("#members-song-list").append(artistSongs);
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

/////////////////SEARCH BUTTON////////////////////
// const searchInput = document.getElementById("song-search");

// eslint-disable-next-line no-unused-vars
function searchInput() {
  const songNameInput = document.getElementById("song-search").value;
  const title = document.querySelectorAll(".artist-title");
  const name = document.querySelectorAll(".artist-name");

  console.log(songNameInput);

  for (i = 0; i < title.length; i++) {
    const song = title[i];
    txtValue = song.textContent;
    const bandValue = name[i].textContent;

    if (
      txtValue.toLowerCase().includes(songNameInput) ||
      bandValue.toLowerCase().includes(songNameInput)
    ) {
      title[i].style.display = "block";
      name[i].style.display = "block";
    } else {
      title[i].style.display = "none";
      name[i].style.display = "none";
    }
  }
}
