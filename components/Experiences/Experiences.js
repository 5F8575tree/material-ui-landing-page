import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const image1 =
  "https://images.unsplash.com/photo-1610338730334-ad75b9328d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80";
const image2 =
  "https://images.unsplash.com/photo-1573102363932-40c3111c5f73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const image3 =
  "https://images.unsplash.com/photo-1470256699805-a29e1b58598a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

import styles from "./styles";

const Experiences = () => {
  return (
    <Box sx={styles.experiences} id="about">
      <Box sx={styles.background} />
      <Box sx={styles.wrapper}>
        <Typography variant="h2" sx={{ textAlign: "left" }}>
          Recent photos from Kamakura
        </Typography>
        <Typography
          variant="body1"
          sx={{ margin: "25px 0", textAlign: "left" }}
        >
          Our guides enjoy spending their free time exploring the local area.
          Kamakura has beaches, history, watersports, fishing, food, and
          friendly people. For a laidback atmosphere, get away from Tokyo and
          enjoy this blissful escape for a day or two.
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component="img" src={image1} sx={styles.image} />
              <Typography sx={styles.contentTitle}>
                Recent spiritual hike
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component="img" src={image2} sx={styles.image} />
              <Typography sx={styles.contentTitle}>
                Cute Jizo statues
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component="img" src={image3} sx={styles.image} />
              <Typography sx={styles.contentTitle}>
                Wonderful People, excellent food
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Experiences;
