import {
  Typography,
  Link,
  List,
  ListItem,
  Paper,
  InputBase,
  Box,
  Grid,
} from "@mui/material";

import { Instagram, Twitter, Facebook } from "@mui/icons-material";

import styles from "./styles";
import CustomButton from "../Button";

const services = [
  "Day Tours",
  "Evening Tours",
  "Multi-Day Tours",
  "Custom Tours",
  "Hiking Tours",
  "Fishing Tours",
];
const links = [
  "About",
  "Latest News",
  "Meet the Team",
  "Popular Tours",
  "Reviews",
  "Kamakura Sightseeing",
];
const socials = [
  {
    title: "Facebook",
    img: <Facebook sx={styles.icon} />,
  },
  { title: "Twitter", img: <Twitter sx={styles.icon} /> },
  { title: "Instagram", img: <Instagram sx={styles.icon} /> },
];

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={styles.gridWrapper}
      >
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" sx={styles.linkTitle}>
              Services
            </Typography>
            <List>
              {services.map((service, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {service}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" sx={styles.linkTitle}>
              Links
            </Typography>
            <List>
              {links.map((link, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {link}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box>
            <Typography variant="h3" sx={styles.linkTitle}>
              Follow
            </Typography>
            <List>
              {socials.map((social, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {social.img}
                    <Typography
                      sx={{
                        marginLeft: "5px",
                      }}
                    >
                      {social.title}
                    </Typography>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={4} sx={styles.emailBlock}>
          <Box sx={styles.subscribeFooter}>
            <Typography variant="h3" sx={styles.title}>
              Subscribe to our newsletter
            </Typography>
            <Typography variant="body1" sx={styles.text}>
              Keep up to date with the world of Kamakura with our biannual
              newsletter. Learn more <Link sx={{ color: "777FEB" }}>here</Link>
            </Typography>
            <Paper component="form" sx={styles.paper}>
              <InputBase sx={styles.inputBase} placeholder="Email" />
              <CustomButton sx={styles.btn}>Sign up</CustomButton>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
