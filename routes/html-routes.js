const path = require('path');
const router = require('express').Router();

// Home route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
// Notes route
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
  
  
  module.exports = router;