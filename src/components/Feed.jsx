import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./index";
import  {fetchAPI}  from "../utils/fetchAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("JS Mastery");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{setVideos(data.items)}); //setVideos(data.items)
  }, [selectedCategory]);


  // console.log(videos);
  return (
    <Stack direction={{ sx: "column", md: "row" }}>
      <Box
        sx={{
          height: { sx: "92vh", sm: "92vh" }, //sx=usually, sm=small device
          borderRight: "1px solid #3d3d3d",
          px: 2, //padding horizontal
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography // component for text element
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }} //mt=margin top
        >
          Copyright 2023 Evyatar Ifrach
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>video</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;

// sx={{flexDirection:{sx: "column", md: "row"}}}
