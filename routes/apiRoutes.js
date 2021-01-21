//routes for adding to db
//routes directing external apis

//api search routes
app.get("/", (req, res) => {
  db.Post.findAll(artists).then(dbPost => {
    res.json(dbPost);
  });
});

app.get("/", (req, res) => {
  db.Post.findAll(songs).then(dbPost => {
    res.json(dbPost);
  });
});

app.get("/", (req, res) => {
  db.Post.findAll(tempo).then(dbPost => {
    res.json(dbPost);
  });
});

app.get("/", (req, res) => {
  db.Post.findAll(key).then(dbPost => {
    res.json(dbPost);
  });
});

app.get("/:id", (req, res) => {
  db.Post.findOne({
    where: {
      song: req.params.song
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

//api post/create route for song

app.post("/api/song", (req, res) => {
  db.Post.create({
    title: req.body.title,
    artist: req.body.artist,
    tempo: req.body.tempo,
    songkey: req.body.songkey,
    chords: req.body.chords,
    lyrics: req.body.lyrics
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// song update route

app.put("/api/song/:id", (req, res) => {
  db.Post.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// song delete route

app.delete("/api/song/:id", (req, res) => {
  db.Post.destroy(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});
