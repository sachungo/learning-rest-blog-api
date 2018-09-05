const posts = require('./posts');
const comments = require('./comments');

module.exports = (app) => {
  app.use(posts);
  app.use(comments);
};
