import styles from "./styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CustomButton from "../Button";

const FirstImpression = () => {
  return (
    <Box sx={styles.firstImpression}>
      <Box component="img" sx={styles.background} />
      <Box sx={styles.wrapper}>
        <Box sx={styles.left}>
          <Typography
            variant="h3"
            sx={{ fontSize: "18px", marginBottom: "6px", fontWeight: 500 }}
          >
            Escape from Tokyo
          </Typography>
          <Box
            component="img"
            sx={styles.photo}
            src="https://images.unsplash.com/photo-1599454100839-da58b1d0a364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGVub3NoaW1hfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          />
          <CustomButton>About Kamakura</CustomButton>
        </Box>
        <Box sx={styles.right}>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", color: "#4d4d4f", lineHeight: "16px" }}
          >
            Kamakura is a coastal town in Kanagawa Prefecture, less than an hour
            south of Tokyo.
            <br />
            <br />
            The town became Japan&#39;s political center, when Minamoto Yoritomo
            chose it as the seat for his new military government in the late
            12th century. The Kamakura government continued to rule Japan for
            over a century, first under the Minamoto shogun and then under the
            Hojo regents.
            <br />
            <br /> After the decline of the Kamakura government in the 14th
            century and the establishment of its successor, the Muromachi
            government in Kyoto, Kamakura remained the political center of
            eastern Japan for some time before losing its position to other
            cities.
            <br />
            <br /> Today, Kamakura is a small city and a very popular tourist
            destination. Sometimes called the Kyoto of eastern Japan, Kamakura
            offers numerous temples, shrines and other historical monuments. In
            addition, Kamakura&#39;s sand beaches attract large crowds during
            the summer.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstImpression;
