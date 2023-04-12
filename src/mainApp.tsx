import React from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme/default";
import MainPage from "./pages/mainPage";

function MainApp() {
  return (
    <Box height={"100vh"}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainPage />
        </ThemeProvider>
      </Provider>
    </Box>
  );
}

export default MainApp;
