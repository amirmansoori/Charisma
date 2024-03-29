import React, { forwardRef, useState } from "react";
import MainLayout from "../components/common/layout";
import Grid from "@mui/material/Unstable_Grid2";
import ListContainer from "../components/common/customList";
import ListItemKit from "../components/kit";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, usersSelector } from "../slices/users";
import { AppDispatch } from "../app/store";
import { fetchPosts, postsSelector } from "../slices/posts";
import {
  itemsSelector,
  addItem,
  removeItem,
  clearItems,
  IItems,
} from "../slices/items";
import { Button, Chip } from "@mui/material";

const MainPage = forwardRef(function MainPage(props, ref) {
  const dispatch: AppDispatch = useDispatch();
  const {
    users,
    loading: usersLoading,
    hasErrors: usersHasErrors,
  } = useSelector(usersSelector);
  const {
    posts,
    loading: postsLoading,
    hasErrors: postsHasErrors,
  } = useSelector(postsSelector);
  const { items } = useSelector(itemsSelector);

  // filters states
  const [userFilter, setUserFilter] = useState("");
  const [postFilter, setPostFilter] = useState("");

  const addToCart = (item: IItems) => {
    if (!items.includes(item)) {
      dispatch(addItem(item));
    }
  };

  const removeToCart = (item: IItems) => {
    dispatch(removeItem(`${item.id}-${item.name || item.title}`));
  };

  const clearCart = () => {
    dispatch(clearItems());
  };

  React.useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  }, []);

  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid xs={4}>
          <ListContainer
            search
            value={userFilter}
            searchData={(val: string) => setUserFilter(val)}
            button={
              <Button
                variant="contained"
                fullWidth
                onClick={() => setUserFilter("")}
              >
                clear filter
              </Button>
            }
          >
            {users.map((item) => {
              if (`${item.name} ${item.email}`.includes(userFilter))
                return (
                  <ListItemKit
                    onClick={(val: IItems) => addToCart(val)}
                    data={item}
                    itemKey={["name", "email"]}
                    key={item.id}
                  />
                );
            })}
          </ListContainer>
        </Grid>
        <Grid xs={4}>
          <ListContainer
            search
            value={postFilter}
            searchData={(val: string) => setPostFilter(val)}
            button={
              <Button
                variant="contained"
                fullWidth
                onClick={() => setPostFilter("")}
              >
                clear filter
              </Button>
            }
          >
            {posts.map((item) => {
              if (`${item.title} ${item.body}`.includes(postFilter))
                return (
                  <ListItemKit
                    onClick={(val: IItems) => addToCart(val)}
                    data={item}
                    itemKey={["title", "body"]}
                    key={item.id}
                  />
                );
            })}
          </ListContainer>
        </Grid>
        <Grid xs={4}>
          <ListContainer
            button={
              <Button
                variant="contained"
                onClick={clearCart}
                color="error"
                fullWidth
              >
                clear
              </Button>
            }
          >
            {items.map((item, index) =>
              item.name ? (
                <Chip
                  label={item?.name}
                  onClick={() => removeToCart(item)}
                  sx={{ margin: "0.5rem" }}
                  key={`${item?.name}-${index}`}
                  color="primary"
                />
              ) : (
                <Chip
                  label={item?.title}
                  onClick={() => removeToCart(item)}
                  sx={{ margin: "0.5rem" }}
                  key={`${item?.title}-${index}`}
                  color="secondary"
                />
              )
            )}
          </ListContainer>
        </Grid>
      </Grid>
    </MainLayout>
  );
});

export default MainPage;
