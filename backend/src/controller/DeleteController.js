const Post = require('../models/Post');

module.exports = {

    async delete(req, res){
        const id = req.params.id;
        const postDelete = await Post.findByIdAndDelete(id, {useFindAndModify: false})

      req.io.emit('delete', postDelete)  
        
      return res.json({"deletado": true})
    }

};