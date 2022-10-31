import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { ButtonGroup, Popover } from "@mui/material";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Profile from "./profile";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      // background: "#38A3A5",
      backgroundColor: "#193739",

    },
    "& .MuiButton-containedSecondary": {
      background: "#EAE8FF",
      color: "black",
    },
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#193739",
    },
    secondary: {
      main: "#EAE8FF",
    },
  },
  spacing: 8,
});

const NavBar = ({ children }) => {
  const history = useHistory();
  const handleClick = (event) => {
    history.push(`/${event.target.value}`);
  };

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className={classes.root} position="static">
          <Toolbar className={classes.root}>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { md: "flex" } }}>
              <ButtonGroup onClick={handleClick}>
                <Button value="home" variant="contained" color="secondary">
                  Home
                </Button>
                <Button value="gymnasium" variant="contained" color="secondary">
                  Gymnasium
                </Button>
                <Button value="highSchool" variant="contained" color="secondary">
                  High School
                </Button>
              </ButtonGroup>
            </Box>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    {...bindTrigger(popupState)}
                  >
                    <AccountCircle
                      style={{ color: "#EAE8FF", fontSize: "35px" }}
                    />
                  </IconButton>

                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <Profile />
                  </Popover>
                </div>
              )}
            </PopupState>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </ThemeProvider>
  );
};

export default NavBar;
