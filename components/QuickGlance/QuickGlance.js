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
    listItem1: "Find the best local restaurants",
    listItem2: "Share a drink while gazing at the ocean",
    listItem3: "Visit the local fish market",
  },
  {
    title: "History",
    image: historyImage,
    listItem1: "Discover ancient Buddhist temples",
    listItem2: "Visit the shrine of Minamoto no Yoritomo",
    listItem3: "See the Great Buddha of Kamakura",
  },
  {
    title: "Hiking",
    image: hikingImage,
    listItem1: "Walk thousand-year-old trails",
    listItem2: "Stop off at hidden Buddhist temples",
    listItem3: "Enjoy views over the Pacific Ocean",
  },
];

const QuickGlance = () => {
  return (
    <Box sx={styles.quickGlance}>
      <Box sx={styles.wrapper}>
        <Typography variant="h2">Our Tours</Typography>
        <Typography
          variant="body1"
          sx={{ textTransform: "capitalize", margin: "25px 0" }}
        >
          We offer custom tours, alongside our trusted regular tours.
        </Typography>
        <Stack sx={styles.stack}>
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                image={item.image}
                listItem1={item.listItem1}
                listItem2={item.listItem2}
                listItem3={item.listItem3}
              />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default QuickGlance;
