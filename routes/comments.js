const express = require('express');
const comments = require('../controllers/comments');

const commentsRouter = express.Router();

commentsRouter.get('/posts/:postId/comments', comments.getComments);
commentsRouter.post('/posts/:postId/comments', comments.addComment);
commentsRouter.put('/posts/:postId/comments/:commentId', comments.updateComment);
commentsRouter.delete('/posts/:postId/comments/:commentId', comments.removeComment);

module.exports = commentsRouter;
