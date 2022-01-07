import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fa0050",
      dark: "#b60747",
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
