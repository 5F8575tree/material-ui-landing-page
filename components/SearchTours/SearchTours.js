import { useState } from "react";

import Box from "@mui/material/Box";
import {
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import styles from "./styles";

const SearchTours = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={styles.searchTours}>
      <Box component="img" sx={styles.background} />
      <Box sx={styles.wrapper}>
        <Button
          sx={{
            color: "#fff",
            fontSize: "20px",
            textTransform: "none",
            fontWeight: 300,
            border: "1px solid #5EB6D7",
            padding: "8px 24px",
            textShadow: "0px 2px 16px rgba(0,0,0,0.2)",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          Search our trips
        </Button>
        <FormControl sx={{ marginTop: "24px", width: "100%" }}>
          <InputLabel
            id="tour-style-label"
            sx={{
              color: "#fff",
              "&:focus": { color: "#fff" },
              "&:active": { color: "#fff" },
            }}
          >
            Tour Style
          </InputLabel>
          <Select
            sx={{
              background: "#5EB6D7",
              color: "#fff",
              padding: "8px",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
            }}
            value={selectedValue}
            onChange={handleChange}
          >
            <MenuItem value={1}>Group Tours</MenuItem>
            <MenuItem value={2}>Private Day Tours</MenuItem>
            <MenuItem value={3}>Private Evening Tours</MenuItem>
            <MenuItem value={4}>Multi-Day Tours</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SearchTours;
