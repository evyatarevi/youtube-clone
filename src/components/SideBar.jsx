import React, { useState } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";



const SideBar = ({selectedCategory, setSelectedCategory}) => {




    return (
    <Stack
      //direction={{sm:"row", md:'column'}}
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            backgroundColor: category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
          key={category.name}
          onClick={()=>{setSelectedCategory(category.name)}}
        >
          <span
            style={{
              marginRight: "15px",
              color: category.name === selectedCategory ? "white" : "red",
            }}
          >
            {category.icon}
          </span>
          <span style={{
            opacity: category.name === selectedCategory ? '1' : '0.8'
          }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
