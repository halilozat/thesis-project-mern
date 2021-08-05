const PostReducer = (state, action) => {
    switch (action.type) {
        case "GET_POSTS_START":
            return {
                posts: [],
                isFetching: true,
                error: false,
            };
        case "GET_POSTS_SUCCESS":
            return {
                posts: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_POSTS_FAILURE":
            return {
                posts: [],
                isFetching: false,
                error: true,
            };
        default:
            return { ...state };
    }
};

export default PostReducer;