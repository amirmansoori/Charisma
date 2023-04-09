import { Box, Theme } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/material";

interface IMainlayout {
  children: React.ReactNode;
}

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.grey[500],
    width: "100vw",
    height: "100%",
    minHeight: "100vh",
    maxHeight: "100vh",
    padding: "1rem",
    overflow: "hidden",
  },
}));

const MainLayout: React.FC<IMainlayout> = (props) => {
  const { children } = props;
  const classes = useStyles();
  return <Box className={classes.root}>{children}</Box>;
};

export default MainLayout;
