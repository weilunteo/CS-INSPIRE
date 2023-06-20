
import React from 'react'
import Appbar from '../components/Appbar.jsx'
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import UserWidget from '../widgets/UserWidget'
import MyPostWidget from '../widgets/MyPostWidget'
// import PostWidget from '../widgets/PostWidget'
// import PostsWidget from '../widgets/PostsWidget'
import AdvertWidget from '../widgets/AdvertWidget'
import FriendListWidget from '../widgets/FriendListWidget'



export default function Community() {
const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
// const _id = useSelector((state) => state.user);
const _id = "64902290c2ce5fe7b8ea4dac";

  return (
    <Box>
        <Appbar/>
        <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} />
        </Box>

        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget />
          {/* <PostsWidget userId={_id} /> */}
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            {/* <FriendListWidget userId={_id} /> */}
          </Box>
        )}

        </Box>
    </Box>

  )
}
