import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import styles from "./styles";
import { ArrowDownward } from "@mui/icons-material";

const SearchTours = () => {
  return (
    <Box sx={styles.searchTours}>
      <Box component="img" sx={styles.background} />
      <Box sx={styles.wrapper}>
        <Button
          variant="outlined"
          sx={{
            color: "#ffffff",
            fontWeight: 300,
            fontSize: "18px",
            maxWidth: "300px",
            textTransform: "capitalize",
            border: "1px solid red",
          }}
        >
          Search for your trip
        </Button>
        <Box sx={{ width: "100%", marginTop: "28px" }}>
          <Button
            sx={{
              background: "#fa6400",
              border: "1px solid transparent",
              width: "100%",
              height: "38px",
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
              "&:hover": {
                border: "1px solid #fa6400",
              },
            }}
          >
            <Typography
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontWeight: 300,
              }}
            >
              Tour Style
            </Typography>
            <ArrowDownward sx={{ color: "white" }} />
          </Button>
        </Box>
        <Box sx={{ width: "100%", marginTop: "16px" }}>
          <Button
            sx={{
              background: "#fa6400",
              border: "1px solid transparent",
              width: "100%",
              height: "38px",
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
              "&:hover": {
                border: "1px solid #fa6400",
              },
            }}
          >
            <Typography
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontWeight: 300,
              }}
            >
              Area of Interest
            </Typography>
            <ArrowDownward sx={{ color: "white" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchTours;
