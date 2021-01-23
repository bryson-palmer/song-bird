// Requiring models and router
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");
const router = require("express").Router();

//api search routes
// router.get("/members", isAuthenticated, (req, res) => {
//   db.Song.findAll(artists).then(dbSong => {
//     res.json(dbSong);
//   });
// });

router.get("/api/song", isAuthenticated, (req, res) => {
  db.Song.findAll({
    where: {
      UserId: req.user.id
    }
  }).then(dbSong => {
    res.json(dbSong);
  });
});

// router.get("/members", (req, res) => {
//   db.Song.findAll(tempo).then(dbSong => {
//     res.json(dbSong);
//   });
// });

// router.get("/members", (req, res) => {
//   db.Song.findAll(key).then(dbSong => {
//     res.json(dbSong);
//   });
// });

router.get("/:id", isAuthenticated, (req, res) => {
  db.Song.findOne({
    where: {
      song: req.params.song
    }
  }).then(dbSong => {
    res.json(dbSong);
  });
});

//api post/create route for song

router.post("/api/song", isAuthenticated, (req, res) => {
  console.log(req.body);
  db.Song.create({
    title: req.body.title,
    artist: req.body.artist,
    tempo: req.body.tempo,
    songkey: req.body.songkey,
    chords: req.body.chords,
    lyrics: req.body.lyrics,
    UserId: req.body.UserId
  }).then(dbSong => {
    res.json(dbSong);
  });
});

// song update route

router.put("/api/song/:id", isAuthenticated, (req, res) => {
  db.Song.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(dbSong => {
    res.json(dbSong);
  });
});

// song delete route

router.delete("/api/song/:id", isAuthenticated, (req, res) => {
  db.Song.destroy(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbSong => {
    res.json(dbSong);
  });
});

module.exports = router;
