const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const readDb = () => JSON.parse(fs.readFileSync("db/db.json", "utf8"));


const writeDb = (data) => fs.writeFileSync("db/db.json", JSON.stringify(data));

router.get('/api/notes', async (req, res) => {
  const dbJson = readDb();
  res.json(dbJson);
});

router.post('/api/notes', async (req, res) => {
  const dbJson = readDb();
  const newFeedback = { 
    title: req.body.title, 
    text: req.body.text, 
    id: uuidv4() 
  };
  dbJson.push(newFeedback);
  writeDb(dbJson);
  res.json(dbJson);
});

router.delete('/api/notes/:id', async (req, res) => {
  const dataJSON = readDb();
  let data = fs.readFileSync("db/db.json", "utf8");
  const newNotes = dataJSON.filter((note) => note.id !== req.params.id);
  writeDb(newNotes);
  res.json("Note removed!");
});

module.exports = router;
