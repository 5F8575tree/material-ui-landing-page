import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CustomButton from "../Button";

import styles from "./styles";

const Hero = () => {
  return (
    <Box sx={styles.hero}>
      <Box sx={styles.wrapper}>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h2">
            Unique Experiences in Beautiful Kamakura
          </Typography>
          <Typography variant="body1" sx={styles.text}>
            Kamakura sits to the south west of Tokyo and provides a wonderful
            day trip.
            <br />
            You can hike ancient routes through the 800-year old Buddhist
            temples, enjoy wonderful sea food while gazing at the Pacific Ocean,
            and learn all about a truly epoch-defining period in Japanese
            history - the dawn of the samurai!
          </Typography>
          <CustomButton>View Tours</CustomButton>
        </Box>
        <Box
          component="img"
          sx={styles.photo}
          src="https://images.unsplash.com/photo-1462566177716-abe3ac445e77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FtYWt1cmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />
      </Box>
    </Box>
  );
};

export default Hero;
