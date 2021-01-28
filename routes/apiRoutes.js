const router = require("express").Router();
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { EmptyResultError } = require("sequelize/types");

//api search routes
router.get("/api/song", isAuthenticated, (req, res) => {
  db.Song.findAll({
    // attributes: [artist, title],
    where: {
      UserId: req.user.id
    }
  }).then(dbSong => {
    res.json(dbSong);
  });
});

// router.get("/members", (req, res) => {
//   db.Song.findAll(songs).then(dbSong => {
//     res.json(dbSong);
//   });
// });

// router.get("/members", (req, res) => {
//   db.Song.findAll(tempo).then(dbSong => {
//     res.json(dbSong);
//   });
// });

// get route for all songs and artists to be displayed on members page
router.get("/members", (req, res) => {
  db.Song.findAll(key).then(dbSong => {
    res.json(dbSong);
  });
});

// get route for a single song to be displayed on the song page
router.get("/:id", isAuthenticated, (req, res) => {
  db.Song.findOne({
    where: {
      song: req.params.song
    }
  }).then(dbSong => {
    res.json(dbSong);
  });
});

router.get("/:id", isAuthenticated, (req, res) => {
  const songWhere = {
    UserId: req.user.id
  };

  if(req.query.title) {
    songWhere.name = {
      [Op.like]: `%${req.query.title}%`;
    };
  }

  Song.findAll({
    where: songWhere
  }).then(books => {
    res.json(songs);
  });

});

// api post/create route for song
router.post("/api/addSong", isAuthenticated, (req, res) => {
  db.Song.create({
    title: req.body.title,
    artist: req.body.artist,
    tempo: req.body.tempo,
    songkey: req.body.songkey,
    chords: req.body.chords,
    lyrics: req.body.lyrics,
    UserId: req.body.UserId
  })
    .then(dbSong => {
      res.json(dbSong);
    })
    .catch(err => {
      res.json(err);
    });
});

// api put/update route for a single song
router.put("/api/song/:id", isAuthenticated, (req, res) => {
  db.Song.update(
    {
      title: req.body.title,
      artist: req.body.artist,
      tempo: req.body.tempo,
      songkey: req.body.songkey,
      chords: req.body.chords,
      lyrics: req.body.lyrics,
      UserId: req.body.UserId
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbSong => {
    res.json(dbSong);
  });
});

// api delete/destroy route for a singel song
router.delete("/api/song/:id", isAuthenticated, (req, res) => {
  db.Song.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbSong => {
      res.json(dbSong);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
