import { Box, TextField, Theme } from "@mui/material";
import { makeStyles } from "@mui/material";
import React from "react";
import List from "@mui/material/List";

interface IListProps {
  search?: boolean;
  children?: React.ReactNode;
  searchData?: any;
}

const useStyles: any = makeStyles((theme: Theme) => ({
  listRoot: {
    backgroundColor: theme.palette.common.white,
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    borderRadius: "0.5rem",
    padding: "1rem",
    overflow: "hidden",
  },
}));

const ListContainer: React.FC<IListProps> = (props) => {
  const { search = false, children, searchData } = props;
  const onChangeSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    searchData(e.target.value);
  };
  const classes = useStyles();
  return (
    <Box className={classes.listRoot}>
      {search && (
        <TextField
          sx={{ width: "100%" }}
          onChange={(e) => onChangeSearch(e)}
          label="Search"
          variant="outlined"
        />
      )}
      <List
        sx={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          padding: "1rem",
          paddingBottom: "5rem",
          bgcolor: "background.paper",
        }}
      >
        {children}
      </List>
    </Box>
  );
};

export default ListContainer;
