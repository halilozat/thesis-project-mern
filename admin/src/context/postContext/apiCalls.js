import axios from "axios";
import {
  deletePostFailure,
  deletePostStart,
  deletePostSuccess,
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

export const deletePost = async (id, dispatch) => {
  dispatch(deletePostStart());
  try {
    await axios.delete("/posts/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deletePostSuccess(id));
  } catch (err) {
    dispatch(deletePostFailure());
  }
};