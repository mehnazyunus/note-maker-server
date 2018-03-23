var express = require('express');
var router = express.Router();
var Note = require('../models/notes');

/* GET note for the particular page URL */
router.post('/:id', function(req, res, next) {

	var user = req.params.id;
	var url = req.body.url;

    Note.find({pageURL: url, createdBy: user},{content: 1},function(err,notes){
        if(err)
            res.send(err);
        else
        {
        	res.send(notes);
        }
    })
});

module.exports = router;
