import { Box, CardContent, Typography } from "@mui/material";
import MuiCard from "@mui/material/Card";

import styles from "./styles";

const Card = ({ title, image, text }) => {
  return (
    <MuiCard sx={styles.card}>
      <CardContent sx={{ padding: "0", display: "flex", gap: "16px" }}>
        <Box component="img" src={image} sx={styles.image} />
        <Box>
          <Typography variant="h3" sx={styles.title}>
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              textAlign: "left",
              color: "#2d2d2d",
              letterSpacing: "0.6px",
            }}
          >
            {text}
          </Typography>
        </Box>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
