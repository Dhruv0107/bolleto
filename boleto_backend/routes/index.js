var express = require('express');
var router = express.Router();
const movieData = require('../modals/loginSchema')
const movieadddata = require('../modals/AddmovieSchema')
const eventadddata = require('../modals/Addevent')
const sportadddata = require('../modals/Addsport')
const aboutadddata = require('../modals/Addabout')
const signupdata = require('../modals/Signup')
const blogadddata = require('../modals/Addblog')
const multer = require('multer');
const mongoose = require('mongoose');
const Image = require('../modals/Image');

// Set up multer to handle file uploads

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },

    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


var upload = multer({ storage: storage })

router.post('/upload', upload.single("image"), async (resq, resp, next) => {
    // console.log(resq.body);
    try {
        const data = await Image.create(resq.body)
        resp.status(200).json({
            status: 'success',
            data
        })

    } catch (error) {
        resp.status(500).json({
            status: 'error',
            data
        })
    }
})

/* GET home page. */
router.post('/single-movie/:id', async function (req, res, next) {
    try {
        const data = await movieadddata.findById(req.params.id);
        console.log(data);
        res.status(201).json({
            status: "get single movie",
            data
        })
    } catch (error) {
        res.json({ error })
    }
});

router.post('/', async function (req, res, next) {
    try {
        const data = await movieadddata.create(req.body);
        console.log(data);
        res.status(201).json({
            status: "data send",
            data
        })
    } catch (error) {
        res.json({ error })
    }
});
router.get('/movieData', async function (req, res, next) {
    try {
        const data = await movieadddata.find(req.body);
        // console.log(data);
        res.status(200).json({
            data
        })
    } catch (error) {
        res.json({ error })
    }
});


router.post('/event', async function (req, res, next) {
    try {
        const data = await eventadddata.create(req.body);
        console.log(data);
        res.status(201).json({
            status: "data send",
            data
        })
    } catch (error) {
        res.json({ error })
    }
});
router.get('/eventdata', async function (req, res, next) {
    try {
        const data = await eventadddata.find(req.body);
        // console.log(data);
        res.status(200).json({
            data
        })
    } catch (error) {
        res.json({ error })
    }
});


router.post('/Sport', async function (req, res, next) {
    try {
        const data = await sportadddata.create(req.body);
        console.log(data);
        res.status(201).json({
            status: "data send",
            data
        })
    } catch (error) {
        res.json({ error })
    }
});
router.get('/sportdata', async function (req, res, next) {
    try {
        const data = await sportadddata.find(req.body);
        // console.log(data);
        res.status(200).json({
            data
        })
    } catch (error) {
        res.json({ error })
    }
});


router.post('/Blog', async function (req, res, next) {
    try {
        const data = await blogadddata.create(req.body);
        console.log(data);
        res.status(201).json({
            status: "data send",
            data
        })
    } catch (error) {
        res.json({ error })
    }
});
router.get('/blogdata', async function (req, res, next) {
    try {
        const data = await blogadddata.find(req.body);
        // console.log(data);
        res.status(200).json({
            data
        })
    } catch (error) {
        res.json({ error })
    }
});


router.post('/About', async function (req, res, next) {
    try {
        const data = await aboutadddata.create(req.body);
        console.log(data);
        res.status(201).json({
            status: "data send",
            data
        })
    } catch (error) {
        res.json({ error })
    }
});

router.post('/signup', async function (req, res, next) {
    try {
        const data = await signupdata.create(req.body);
        console.log(data);
        res.status(201).json({
            status: "data send",
            data
        })
    } catch (error) {
        res.json({ error })
    }
});

module.exports = router;
