const { validationResult } = require('express-validator/check');
const dataStore = require('../store/index');

module.exports = {
  getPosts(req, res) {
    return res.status(200).json(dataStore.getPosts());
  },
  addPost(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    dataStore.addPost(req.body);
    return res.status(201).json(dataStore.getPosts());
  },
  updatePost(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    dataStore.updatePost(req.params.postId, req.body);
    return res.status(200).json(dataStore.getPosts());
  },
  removePost(req, res) {
    dataStore.removePost(req.params.postId);
    return res.status(200).json({ message: 'Post deleted successfully!' });
  }
}
