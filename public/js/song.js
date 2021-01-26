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

///////////////////////// DELETE MODAL CODE BELOW //////////////////////////////////

// Get the modal
const delmodal = document.getElementById("delUpdate-modal");

// Get the button that opens the modal
const delbtn = document.getElementById("delUpdate-tab");

// Get the <span> element that closes the modal
const delspan = document.getElementsByClassName("delclose")[0];

// del function
const delSong = document.getElementById("delSong");

delSong.onclick = function(e) {
  e.preventDefault();
  console.log(e.target.value);

  $.ajax({
    url: `/api/song/${e.target.value}`,
    type: "DELETE"
  }).then(() => {
    window.location.href = "/members";
  });
};

// When the user clicks on the button, open the modal
delbtn.onclick = function() {
  delmodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
delspan.onclick = function() {
  delmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === delmodal) {
    delmodal.style.display = "none";
  }
};
