var express = require('express');
var router = express.Router();
var Note = require('../models/notes');

/* GET home page. */
router.get('/notes_show/:id', function(req, res, next) {
	var id = req.params.id;
    Note.findOne({_id: id},function(err,notes){
        if(err)
            res.send(err);
        else
        {
            res.render('index',{title:notes.title , content: notes.content, imageURL: notes.imageURL});
        }
    })
});

module.exports = router;
