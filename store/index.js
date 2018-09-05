let store = {
  posts: []
};

// Pass the id which is zero indexed
// TODO: handle id which doesn't exist
module.exports =  {
  getPosts() {
    return store.posts;
  },
  addPost(post) {
    store = {
      ...store,
      posts: [...store.posts, post]
    };
  },
  updatePost(postId, data) {
    const post = store.posts[postId];
    const updatedPost = {
      ...post,
      ...data
    };
    store.posts[postId] = updatedPost;
  },
  removePost(postId) {
    store.posts.splice(postId, 1);
  },
  getComments() {
    return store.posts.comments || [];
  },
  addComment(postId, comment) {
    const post = store.posts[postId];
    const withComment = {
      ...post,
      comments: [...[post.comments || []], comment]
    };
    store.posts[postId] = withComment;
  },
  updateComment(postId, commentId, data) {
    //
  },
  removeComment(postId, commentId) {
    //
  }
};
