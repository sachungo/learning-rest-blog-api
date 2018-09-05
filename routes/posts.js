const express = require('express');
const posts = require('../controllers/posts');
const middewares = require('../middlewares');

const postsRouter = express.Router();

postsRouter.get('/posts', posts.getPosts);
postsRouter.post('/posts', middewares.addPosts(), posts.addPost);
postsRouter.put('/posts/:postId', middewares.updatePosts(), posts.updatePost);
postsRouter.delete('/posts/:postId', posts.removePost);

module.exports = postsRouter;
