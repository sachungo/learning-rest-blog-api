let store = {
  posts: []
};

module.exports =  {
  getPosts() {
    return store.posts;
  },
  getPostById(postId) {
    return store.posts[postId];
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
  getComments(postId) {
    return store.posts[postId].comments || [];
  },
  addComment(postId, comment) {
    const post = store.posts[postId];
    const prevComments = post.comments || [];
    const withComment = {
      ...post,
      comments: [...prevComments, comment]
    };
    store.posts[postId] = withComment;
  },
  updateComment(postId, commentId, data) {
    const post = store.posts[postId];
    const comment = post.comments[commentId];
    const updatedComment = {
      ...comment,
      ...data
    };
    store.posts[postId]['comments'][commentId] = updatedComment;
  },
  removeComment(postId, commentId) {
    store.posts[postId]['comments'].splice(commentId, 1);
  }
};
