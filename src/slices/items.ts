import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { IPostsResDTO } from "../types/DTO/posts/res";
import { IUresResDTO } from "../types/DTO/users/res";

export type IItems = Partial<IPostsResDTO & IUresResDTO>;

export const initialState = {
  items: [] as IItems[],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, actions: PayloadAction<IItems>) => {
      state.items.push(actions.payload);
    },
    removeItem: (state, actions: PayloadAction<string>) => {
      return {
        ...state,
        items: [...state.items].filter(
          (item) => `${item.id}-${item.name || item.title}` !== actions.payload
        ),
      };
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = itemsSlice.actions;
export const itemsSelector = (state: RootState) => state.items;

export default itemsSlice.reducer;
