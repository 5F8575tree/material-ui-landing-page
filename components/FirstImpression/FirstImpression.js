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
            sx={{ fontSize: "16px", color: "#4d4d4f" }}
          >
            A long paragraph full of lorem and other things that can make this
            seem worthy of texct. A long paragraph full of lorem and other
            things that can make this seem worthy of texct. A long paragraph
            full of lorem and other things that can make this seem worthy of
            texct. A long paragraph full of lorem and other things that can make
            this seem worthy of texct. A long paragraph full of lorem and other
            things that can make this seem worthy of texct. A long paragraph
            full of lorem and other things that can make this seem worthy of
            texct.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstImpression;
