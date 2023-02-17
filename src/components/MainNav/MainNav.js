import "./MainNav.css";

import * as React from "react";

import { Link, NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import brl_logo1 from "../../assets/brllogo_1.png";
import semReg from "../../assets/semreg.png";

const drawerWidth = 350;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [color, setColor] = React.useState("");
  const styles = {
    marginTop: "-2%",
    zIndex: "1",
    color: color,
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const facultyLogout = () => {
    localStorage.clear();
  };

  const drawer = (
    <div
      className="sidenav__mn sidenav"
      style={{
        top: "0px",
        bottom: "0px",
        transform: "none",
        visibility: "visible",
        zIndex: "2",
        width: "350px",
        backgroundColor: "#065b9a",
        marginLeft: "0px",
        borderTopRightRadius: "25px",
        borderBottomRightRadius: "25px",
        overflow: "hidden",
        position: "fixed",
        outline: "0",
        boxSizing: "border-box",
        borderRight: "solid 1px rgba(0,0,0,.12)",
        color: "rgba(0,0,0,.87)",
      }}
    >
      <div
        className="mat-toolbar__mn mat-toolbar__ mat-toolbar"
        style={{
          background: "inherit",
          marginLeft: "0px",
          height: "64px",
          display: "flex",
          boxSizing: "border-box",
          padding: "0 16px",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          whiteSpace: "nowrap",
          color: "rgba(0,0,0,.87)",
          font: '500 20px/32px Roboto, "Helvetica Neue", sans-serif',
          letterSpacing: "normal",
          margin: "0",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            height: "fit-content",
            margin: "auto",
            marginTop: "8%",
            borderRadius: "50px",
            color: "#065b9a",
            fontWeight: "550",
            width: "90%",
          }}
        >
          <img src={semReg} height="90rem" alt="" />
        </div>
      </div>
      <div
        className="list__mn mt-4 list"
        style={{
          height: "fit-content",
          margin: "auto",
          paddingTop: "10%",
          overflow: "hidden",
        }}
      >
        <div
          className="navlist__mn navlist"
          style={{
            marginLeft: "10%",
            paddingTop: "8px",
            display: "block",
          }}
        >
          <NavLink
            activeclassname="active"
            to="/facultypage/dashboard"
            className="element element__mn a__mn"
            style={{ marginTop: "6%" }}
          >
            <i className="fas fa-shapes" style={{ paddingRight: "5%" }}></i>
            Dashboard
          </NavLink>
          <NavLink
            activeclassname="active"
            to="/facultypage/createstd"
            className="element element__mn a__mn"
            style={{ marginTop: "-2%" }}
          >
            <i className="fas fa-user-plus" style={{ paddingRight: "5%" }}></i>
            Create Student
          </NavLink>
          <NavLink
            activeclassname="active"
            to="/facultypage/createfaculty"
            className="element element__mn a__mn"
            style={{ marginTop: "-2%" }}
          >
            <i
              className="fa fa-plus"
              aria-hidden="true"
              style={{ paddingRight: "5%" }}
            ></i>
            Create Faculty
          </NavLink>
          <NavLink
            activeclassname="active"
            to="/facultypage/managestudent"
            className="element element__mn a__mn"
            style={{ marginTop: "-2%" }}
          >
            <i className="fas fa-user-cog" style={{ paddingRight: "5%" }}></i>
            Manage Students
          </NavLink>
          <NavLink
            activeclassname="active"
            to="/facultypage/registeredstd"
            className="element element__mn a__mn"
            style={{ marginTop: "-2%" }}
          >
            <i className="fas fa-user-check" style={{ paddingRight: "5%" }}></i>
            Registered Students
          </NavLink>
          <NavLink
            activeclassname="active"
            to="/facultypage/summary"
            className="element element__mn a__mn"
            style={{ marginTop: "-2%", zIndex: "1" }}
          >
            <i
              className="fa fa-list-alt"
              aria-hidden="true"
              style={{ paddingRight: "5%" }}
            ></i>
            Summary
          </NavLink>
          <Link
            to="/faculty"
            onClick={facultyLogout}
            className="element element__mn a__mn"
            onMouseOver={() => setColor("#065b9a")}
            onMouseOut={() => setColor("white")}
            style={styles}
          >
            <i
              className="fas fa-sign-out-alt"
              aria-hidden="true"
              style={{ paddingRight: "5%" }}
            ></i>
            Logout
          </Link>
        </div>
      </div>
      <div className="mt-4 logo__mn logo">
        <div style={{ width: "50%", margin: "auto" }}>
          <img
            src={brl_logo1}
            style={{ width: "100%", height: "auto" }}
            className="mt-2"
            alt=""
          />
        </div>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        <AppBar
          position="relative"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar sx={{ display: { sm: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Faculty Portal
            </Typography>
          </Toolbar>
        </AppBar>
        {props.children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
