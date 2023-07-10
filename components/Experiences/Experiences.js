import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

const image1 =
  "https://images.unsplash.com/photo-1496114161697-e76e4b01e4fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const image2 =
  "https://images.unsplash.com/photo-1573102363932-40c3111c5f73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const image3 =
  "https://images.unsplash.com/photo-1622892795233-285d239877ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";

import styles from "./styles";

const links = [
  "Show all",
  "Outdoors",
  "Enoshima",
  "Shinto",
  "Buddhism",
  "Cuisine",
];

const Experiences = () => {
  return (
    <Box sx={styles.experiences}>
      <Box sx={styles.wrapper}>
        <Typography variant="h2">Explore the beauty of Kamakura</Typography>
        <Typography variant="body1" sx={{ margin: "25px 0" }}>
          Kamakura was once the capital of all of Japan during the latter middle
          ages, from 1063 to roughly the middle of the 14th century. It has
          beaches, history, watersports, fishing, food, and friendly people. For
          a laidback atmosphere, get away from Tokyo and enjoy this blissful
          escape for a day or two.
        </Typography>
        <Box sx={styles.links}>
          {links.map((item, index) => {
            return (
              <Link key={index} sx={styles.link}>
                {item}
              </Link>
            );
          })}
        </Box>
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
                Unforgetabble Stories
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component="img" src={image2} sx={styles.image} />
              <Typography sx={styles.contentTitle}>Amazing Sights</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component="img" src={image3} sx={styles.image} />
              <Typography sx={styles.contentTitle}>Wonderful People</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Experiences;
