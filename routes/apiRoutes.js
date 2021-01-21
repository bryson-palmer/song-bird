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

// app.post("/api/song", =>
// --create( song )

app.post("/api/song", (req, res) => {
  db.Post.create({
    title: req.body.title
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// app.put("/api/song/:id", =>
// --update( song )

// app.delete("/api/song/:id", =>
// --destroy( song )
