import styles from "./styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarsIcon from "@mui/icons-material/Stars";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const Reviews = () => {
  return (
    <Box sx={styles.reviews}>
      <Typography variant="h3" sx={{ fontSize: "20px" }}>
        See what others say
      </Typography>
      <Box sx={styles.reviewsContent}>
        <Typography variant="h2">Excellent</Typography>
        <Box sx={{ margin: "8px 0" }}>
          <StarsIcon sx={{ fontSize: "32px", color: "red" }} />
          <StarsIcon sx={{ fontSize: "32px", color: "red" }} />
          <StarsIcon sx={{ fontSize: "32px", color: "red" }} />
          <StarsIcon sx={{ fontSize: "32px", color: "red" }} />
          <StarsIcon sx={{ fontSize: "32px", color: "red" }} />
        </Box>
        <Typography variant="body1" sx={{ fontSize: "16px" }}>
          Based on 27 <em>reviews</em>
        </Typography>
        <Box
          sx={{
            marginTop: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WorkspacePremiumIcon sx={{ color: "#A50000" }} />
          <Typography variant="body2" sx={{ fontSize: "18px" }}>
            TripAdvisor
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
