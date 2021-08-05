import axios from "axios";
import {
    getPostsFailure,
    getPostsStart,
    getPostsSuccess
} from './PostActions'

export const getPosts = async (dispatch) => {
    dispatch(getPostsStart());
    try {
      const res = await axios.get("/posts/allposts/getall/", {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(getPostsSuccess(res.data));
    } catch (err) {
      dispatch(getPostsFailure());
    }
  };