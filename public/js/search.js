$(document).ready(() => {
  const songSearch = $("#song-search-btn");
  const artistSearch = $("#artist");
  const searchBar = $("#searchBar");

  function searchSong() {
    const str = searchBar.val();
    // alert("song clicked");
    // console.log(str);
  };

  songSearch.on("click", event => {
    event.preventDefault();
    searchSong();
  });
});

//console.log("aaaaaaaaaaaaaaaa");

//send get route
//trigger database search
//select * where song = searchbar input value
// SELECT * WHERE song = searchBar.val().trim(); ?
//push info to front to view
//change html to view searched item
//template literal
//song title = title
//song artist = artist

// $("searchBar").on("submit", e => {
//   e.preventDefault();
//   const searchTest = searchBar.val().trim();

// });

// const getSong = options => {
//   let url = "/api/song";

//   if (options) {
//     url += "?" + new URLSearchParams(options).toString();
//   }

//   $.ajax({
//     url
//   }).then(res => {
//     displaySongs(res);
//   });

// };