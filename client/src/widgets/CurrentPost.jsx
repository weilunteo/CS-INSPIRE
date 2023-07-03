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
import PlaceIcon from '@mui/icons-material/Place';

const CurrentPost = () => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const name = "Monica Barbaro";
  const commenters = ["Jake Dawson", "Sandra Oh", "Mike Wazowski"];
  const description =
    "I recently had the opportunity to engage with diverse perspectives and stories shared by individuals at the 'Break-Bias' session hosted by Zoom last week. It inspired me to actively educate myself on recognizing and mitigating biases in my own approach to hiring. By incorporating inclusive practices and promoting diversity, we can create a more equitable and inclusive workplace that harnesses the full potential of all individuals.";
  const location = `Singapore`;
  const tags = "#BiasAwareness #InclusiveHiring #FairWorkplace";
  const picturePath = "break-bias.gif";
  const userPicturePath = "https://ui-avatars.com/api/?name=Monica+Barbaro";
  const [likes, setLikes] = useState(() => {
    const storedLikes = localStorage.getItem("likes");
    return storedLikes ? parseInt(storedLikes, 10) : 10;
  });
  const comments = [
    "Creating a more inclusive workplace benefits everyone involved. It's a win-win situation.",
    "I'm glad to hear that you're taking steps to educate yourself and promote diversity. Every effort counts!",
    "Diverse perspectives and stories have the power to inspire and create positive change. It's wonderful that you had that opportunity.",
  ];
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
    <WidgetWrapper m="2rem 0">
      <Box display="flex" flexDirection="row" alignItems="center" gap="1.5rem">
        <img
          src={userPicturePath}
          alt="User"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1" sx={{ color: "#a9a9a9", fontSize: "13px" }}>
            <PlaceIcon/>
            {location}
          </Typography>
        </Box>
      </Box>

      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      <Typography color={main} sx={{ mt: "1rem", fontWeight: "bold" }}>
        {tags}
      </Typography>

      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`src/assets/${picturePath}`}
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
  );
};

export default CurrentPost;
