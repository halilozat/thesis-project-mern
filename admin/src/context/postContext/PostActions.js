export const getPostsStart = () => ({
    type: "GET_POSTS_START",
  });

  export const getPostsSuccess = (posts) => ({
    type: "GET_POSTS_SUCCESS",
    payload: posts,
  });

  export const getPostsFailure = () => ({
    type: "GET_POSTS_FAILURE ",
  });