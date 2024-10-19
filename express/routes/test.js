const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('test', { title: 'Test Page', message: 'This is a test page.' });
});

module.exports = router;