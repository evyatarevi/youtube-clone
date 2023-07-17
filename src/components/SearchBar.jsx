import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => (
  <Paper
    component="form"   //change the component type
    onSubmit={() => {}}
    sx={{
      borderRadius: 20,
      border: "1px solid #e3e3e3",
      pl: 2, //padding left
      boxShadow: "none",
      mr: { sm: 5 },  // margin right only for small devices
    }}
  >
    <input
      className="search-bar"
      placeholder="Search..."
      value=""
      onChange={() => {}}
    />
    <IconButton type='submit' sx={{p:'10px', color: 'red'}}>
      <Search/>
    </IconButton>
  </Paper>
);

export default SearchBar;
