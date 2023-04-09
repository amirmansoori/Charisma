import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../app/store";
import { IPostsResDTO } from "../types/DTO/posts/res";
import { MainReducer } from "../types/mainReducer";

interface IPostsReducer extends MainReducer {
  posts: IPostsResDTO[];
}

export const initialState: IPostsReducer = {
  loading: false,
  hasErrors: false,
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPostsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getPosts, getPostsSuccess, getPostsFailure } =
  postsSlice.actions;
export const postsSelector = (state: RootState) => state.posts;
export default postsSlice.reducer;

export function fetchPosts() {
  return async (dispatch: AppDispatch) => {
    dispatch(getPosts());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}
