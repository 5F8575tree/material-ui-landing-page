import { Box, Typography } from "@mui/material";
import CustomButton from "../Button";

const PostHero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 600,
          fontSize: "13px",
          fontFamily: "'Red Hat Text', sans-serif",
          maxWidth: "50%",
        }}
      >
        Make the most of your trip to Japan. Book an unforgettable experience.
      </Typography>
      <CustomButton>View Tours</CustomButton>
    </Box>
  );
};

export default PostHero;
