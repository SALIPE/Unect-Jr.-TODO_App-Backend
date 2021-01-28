const Post = require('../models/Post');
const path = require('path');

module.exports = {

    async update(req, res){
        const id = req.params.id;
        const postUpdated = await Post.findByIdAndUpdate(id,{complete:true}, {useFindAndModify: false})
        
        
      req.io.emit('update', postUpdated)
        
      return res.json(postUpdated)
    }

};