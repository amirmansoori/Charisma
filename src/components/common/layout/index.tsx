import { Box, Theme } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";

interface IMainlayout {
  children: React.ReactNode;
}

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.grey[500],
    paddingTop: "1rem",
    minHeight: "100%",
  },
}));

const MainLayout: React.FC<IMainlayout> = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <Box overflow={"hidden"} height={1}>
      <AppBar
        position="static"
        color="primary"
        sx={{ padding: "1rem", textAlign: "center" }}
      >
        Charisma test
      </AppBar>
      <Box className={classes.root}>{children}</Box>
    </Box>
  );
};

export default MainLayout;
