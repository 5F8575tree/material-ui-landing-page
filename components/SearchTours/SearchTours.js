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
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "space-between",
            marginTop: "16px",
            zIndex: "99999",
          }}
        >
          <div>
            <label
              style={{
                color: "#fff",
                fontFamily: "'Red Hat Text', sans-serif",
              }}
            >
              Start date
            </label>
            <input
              type="date"
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ffffff",
                backgroundColor: "#fff",
                color: "#333",
                fontSize: "16px",
                fontFamily: "'Red Hat Text', sans-serif",
              }}
            />
          </div>
          <div>
            <label
              style={{
                color: "#fff",
                fontFamily: "'Red Hat Text', sans-serif",
              }}
            >
              End date
            </label>
            <input
              type="date"
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ffffff",
                backgroundColor: "#fff",
                color: "#333",
                fontSize: "16px",
                fontFamily: "'Red Hat Text', sans-serif",
              }}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default SearchTours;
