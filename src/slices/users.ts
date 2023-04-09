import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../app/store";
import { IUresResDTO } from "../types/DTO/users/res";
import { MainReducer } from "../types/mainReducer";

interface IUsersReducer extends MainReducer {
  users: IUresResDTO[];
}

export const initialState: IUsersReducer = {
  loading: false,
  hasErrors: false,
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, { payload }) => {
      state.users = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUsersFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getUsers, getUsersSuccess, getUsersFailure } = userSlice.actions;
export const usersSelector = (state: RootState) => state.users;
export default userSlice.reducer;

export function fetchUsers() {
  return async (dispatch: AppDispatch) => {
    dispatch(getUsers());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      dispatch(getUsersSuccess(data));
    } catch (error) {
      dispatch(getUsersFailure());
    }
  };
}
