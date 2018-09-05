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
    //
  },
  updateComment(req, res) {
    //
  },
  removeComment(req, res) {
    //
  }
}
