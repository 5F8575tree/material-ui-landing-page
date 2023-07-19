import { Box, Typography, Button } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

const MiniReview = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
        marginTop: "16px",
      }}
    >
      <Typography
        sx={{ fontSize: "15px", fontWeight: 500, color: "#A50000", mb: 1 }}
      >
        Customer feedback
      </Typography>
      <Box sx={{ mb: 1 }}>
        <StarRateIcon sx={{ color: "#A50000", fontSize: "22px" }} />
        <StarRateIcon sx={{ color: "#A50000", fontSize: "22px" }} />
        <StarRateIcon sx={{ color: "#A50000", fontSize: "22px" }} />
        <StarRateIcon sx={{ color: "#A50000", fontSize: "22px" }} />
        <StarRateIcon sx={{ color: "#A50000", fontSize: "22px" }} />
      </Box>
      <Button
        sx={{
          background: "#A50000",
          textTransform: "none",
          borderRadius: "4px",
          color: "#fff",
          fontSize: "12px",
          mb: 2,
          "&:hover": {
            background: "#A50000",
          },
        }}
      >
        See all reviews
      </Button>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "13px",
          fontWeight: 700,
          lineHeight: "1.5",
          mb: 2,
          color: "#676768",
        }}
      >
        David (United States)
        <br />
        Custom Food Tour, May 2023
      </Typography>
      <Typography
        sx={{
          fontSize: "13px",
          color: "#676768",
          textAlign: "center",
          padding: "0px 16px 16px",
        }}
      >
        We visited the most fabulous izakaya overlooking the ocean - it was
        wonderful to learn about the food. I particularly enjoyed the fantastic
        bar near the river at the end of the evening. Top stuff!
      </Typography>
    </Box>
  );
};

export default MiniReview;
