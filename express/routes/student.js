const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Students = require('../models/students');

router.get('/', (req, res) => {
    res.render('student', { title: 'Student List - Computing and Digital Texhnologies Major' });
});

router.get('/portfolio', (req, res) => {
    let port = [
        { name: 'Apichai', contact:{
            email: 'apichai.ti@kkumail.com' ,
            linkedin: 'https://www.linkedin.com/in/apichai/'
        } 
    },
    ]
    res.render('portfolio', { port });
});

router.get('/insert', (req, res) => {
    const student = new Students({
        studentID: "653380118-9",
        Name: "Apichai Ti",
        Yearofsudy: "3",
        Email: "apichai.ti@kkumail.com"
    });
    student.save()
        .then((rs) => { res.send(rs) })
        .catch((err) => { console.log(err) });

    
});

module.exports = router;