import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import Card from "../Card/Card";
import styles from "./styles";

const cuisineImage =
  "https://images.unsplash.com/photo-1570146275065-ae13a9edd4de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFwYW4lMjBzZWFmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";
const historyImage =
  "https://images.unsplash.com/photo-1660212526067-586e8d3461e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW5lc2UlMjBidWRkaGlzdCUyMGthbWFrdXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60";
const hikingImage =
  "https://images.unsplash.com/photo-1605159882389-624b9c9d2ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80";

const data = [
  {
    title: "Cuisine",
    image: cuisineImage,
    text: "Our local guide will take you for a tour of some of the wonderful eateries Kamakura has to offer. Of course, seafood is perfect here - particularly the local delicacy shirasu. You guide is more than happy to take you to a bustling, or beachside, izakaya pub restaurant if that is more your thing. As the Japanese say - o-makase! (Let it to us!)",
  },
  {
    title: "History",
    image: historyImage,
    text: "From ancient Buddhist temples and mystic Shinto shrines to samurai strongholds, Kamakura is steeped in fascinating history. Your guide is an expert of the area and the Kamakura period itself, so they are sure to show you the finest locations.",
  },
  {
    title: "Hiking",
    image: hikingImage,
    text: "Kamakura is surrounded by the ocean in the south and by wooded hills in all other directions. Attractive hiking trails lead through the woods along these hills and connect various atmospheric temples. The trails are a great way to travel between some of Kamakura's sights. Many of the trails do not take long to complete - typically between 30 to 90 minutes - and allow visitors to enjoy a mix of nature and cultural sights.",
  },
];

const QuickGlance = () => {
  return (
    <Box sx={styles.quickGlance} id="tours">
      <Box sx={styles.wrapper}>
        <Typography variant="h2">Our Tours</Typography>
        <Typography variant="body1" sx={{ margin: "25px 0" }}>
          We offer custom tours, alongside our trusted regular tours.
        </Typography>
        <Stack sx={styles.stack}>
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                image={item.image}
                text={item.text}
              />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default QuickGlance;
