import React from "react";
import { Stack, Paper, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ icon }) => (
  <Stack
    direction="row"
    alignItems="center"
    className="Navbar"
    sx={{
      position: "sticky",
      background: "#3b3b3e",
      top: "0",
      justifyContent: "space-between",
      p: "0px 14px",
    }}
  >
    <i style={{ color: "white" }}>
      <MenuIcon fontSize="large" />
    </i>
    <Paper
      component="form"
      className="search_bar"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "12px",
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        // mr: { sm: 5 },
        // width: "500px",
        height: "29px",
        alignContent: "center",
      }}
    >
      <input
        placeholder="Enter here"
        style={{ border: "none", color: "black" }}
      />
      <Button
        variant="contained"
        sx={{
          bgcolor: "#d78e0ae6",
          borderRadius: "0px 12px 12px 0",
          height: "27px",
          textTransform: "none",
        }}
      >
        Search
      </Button>
    </Paper>
    <div className="nav_rightSide">
      <Stack
        direction={{ sm: "column", md: "row", lg: "row", xl: "row" }}
        spacing={{ md: 4, sm: 1 }}
        sx={{
          color: "white",
          alignItems: "center",
          // flexDirection: { sm: "column" },
        }}
      >
        <span>Live Bids</span>
        <img src={icon} alt="person_icon" className="nav_rightSide_img" />
        <span>Help&Support</span>
      </Stack>
    </div>
  </Stack>
);

export default Navbar;
