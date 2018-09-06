const express = require('express');
const middewares = require('../middlewares');
const comments = require('../controllers/comments');

const commentsRouter = express.Router();

commentsRouter.get('/posts/:postId/comments', comments.getComments);
commentsRouter.post('/posts/:postId/comments', middewares.comments(), comments.addComment);
commentsRouter.put('/posts/:postId/comments/:commentId', middewares.comments(), comments.updateComment);
commentsRouter.delete('/posts/:postId/comments/:commentId', comments.removeComment);

module.exports = commentsRouter;
