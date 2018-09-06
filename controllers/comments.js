const { validationResult } = require('express-validator/check');
const dataStore = require('../store/index');

module.exports = {
  getComments(req, res) {
    const { postId } = req.params;
    return res.status(200).json(
      dataStore.getComments(postId)
    );
  },
  addComment(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { postId } = req.params;
    dataStore.addComment(postId, req.body);
    return res.status(201).json(dataStore.getPostById(postId));
  },
  updateComment(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { postId, commentId } = req.params;
    dataStore.updateComment(postId, commentId, req.body);
    return res.status(200).json(dataStore.getPostById(postId));
  },
  removeComment(req, res) {
    const { postId, commentId } = req.params;
    dataStore.removeComment(postId, commentId);
    return res.status(200).json({ message: 'Comment deleted successfully!' });
  }
}
