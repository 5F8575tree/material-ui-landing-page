import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import styles from "./styles";

const Hero = () => {
  return (
    <Box sx={styles.hero}>
      <Box sx={styles.wrapper}>
        <Box
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "200px",
          }}
        >
          <Box sx={styles.upperBox}>
            <Typography
              variant="h1"
              sx={{
                color: "#fff",
                fontSize: "40px",
                fontWeight: 700,
                textAlign: "center",
                textShadow: "0 2px 20px rgba(0,0,0,0.4)",
              }}
            >
              Kamakura Tour Guides
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                textAlign: "center",
                textShadow: "0 1px 24px rgba(0,0,0,0.9)",
                marginTop: "16px",
              }}
            >
              Unique Experiences in Beautiful Kamakura
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
