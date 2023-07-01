import React, { useState, useEffect } from "react";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import WidgetWrapper from "../components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import BackgroundLetterAvatar from "../components/Avatars";
import { createPost } from "../redux/post_reducer";


const NewPost = () => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const name = "Wei Lun Teo";
  const location = "📍Singapore";
  const userPicturePath = "https://ui-avatars.com/api/?name=WeiLun+Teo";
 
  const latestPost = useSelector((state) => state.posts.posts[state.posts.posts.length - 1]);
  const description = latestPost ? latestPost.description : '';
  const pictureFileName = latestPost ? latestPost.picturePath : '';
  const picturePath = pictureFileName ? `http://localhost:3000/uploads/` + pictureFileName : '';

  console.log(picturePath);



  const [likes, setLikes] = useState(0); // Initialize likes to 0
  const comments = [];
  const postUserId = "64902290c2ce5fe7b8ea4dac";
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setLikes((prevLikes) => {
        const newLikes = prevLikes + 1;
        localStorage.setItem("likes", newLikes.toString());
        return newLikes;
      });
      setIsLiked(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("likes", likes.toString());
  }, [likes]);


  return (
    <>
     {description && picturePath && (
    <WidgetWrapper m="2rem 0">
      <Box display="flex" flexDirection="row" alignItems="center" gap="1.5rem">
        <img
          src={userPicturePath}
          alt="User"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1" sx={{ color: "#a9a9a9", fontSize: "12px" }}>
            {location}
          </Typography>
        </Box>
      </Box>

      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>

      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={picturePath}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={handleLike} disabled={isLiked}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likes}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              <FlexBetween gap="0.5rem" alignItems="center">
                <FlexBetween gap="0.5rem" flexDirection="column" alignItems="center">
                  <BackgroundLetterAvatar name={commenters[i]} />
                </FlexBetween>
                <Box>
                  <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>{comment}</Typography>
                </Box>
              </FlexBetween>
            </Box>
          ))}
          <Divider />
        </Box>
      )}
    </WidgetWrapper>
  )}
    </>
  );
};

export default NewPost;

