import { Box, TextField, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import List from "@mui/material/List";

interface IListProps {
  search?: boolean;
  children: React.ReactNode;
  // remove any and add correct type
  searchData?: any;
  button?: React.ReactElement;
  value?: string;
}

const useStyles: any = makeStyles((theme: Theme) => ({
  listRoot: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "0.5rem",
    padding: "1rem",
    margin: "1rem",
  },
}));

const ListContainer: React.FC<IListProps> = (props) => {
  const { search, children, searchData, button, value } = props;

  const onChangeSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    searchData(e.target.value);
  };

  const classes = useStyles();
  return (
    <Box
      className={classes.listRoot}
      height={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {search && (
        <TextField
          onChange={(e) => onChangeSearch(e)}
          label="Search"
          variant="outlined"
          value={value}
        />
      )}

      <List
        sx={{
          maxHeight: "calc(100vh - 20rem)",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          bgcolor: "Background.paper",
          overflow: "scroll",
        }}
      >
        {children}
      </List>
      <Box>{button}</Box>
    </Box>
  );
};

export default ListContainer;
