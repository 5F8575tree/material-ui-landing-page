import { useState } from "react";

// Date Picker
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";

import Box from "@mui/material/Box";
import {
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import styles from "./styles";
import { styled } from "@mui/system";

const CustomDatePicker = styled(DesktopDatePicker)(({ theme }) => ({
  "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-adornedEnd":
    {
      color: "#121212",
      backgroundColor: "rgba(255,255,255,0.7)",
      padding: "0 8px",
      minWidth: "330px",
    },
}));

const SearchTours = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

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
        <FormControl sx={{ marginTop: "24px", width: "100%" }}>
          <InputLabel
            id="tour-style-label"
            sx={{
              color: "#fff",
              "&:focus": { color: "#fff" },
              "&:active": { color: "#fff" },
            }}
          >
            Tour Type
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
            <MenuItem value={1}>General Tours</MenuItem>
            <MenuItem value={2}>History Tours</MenuItem>
            <MenuItem value={3}>Food & Drink Tours</MenuItem>
            <MenuItem value={4}>Hiking & Adventure Tours</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ width: "100%", mt: 3 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormLabel
              sx={{
                color: "#fff",
                textShadow: "0 2px 6px rgba(0,0,0,0.7)",
                letterSpacing: 1.2,
                fontSize: "16px",
              }}
            >
              When do you plan to travel?
            </FormLabel>
            <CustomDatePicker
              inputFormat="YYYY/MM/DD"
              onChange={setSelectedDate}
              value={selectedDate ? selectedDate : null}
            />
          </LocalizationProvider>
        </Box>
        <FormControl sx={{ marginTop: "24px", width: "100%" }}>
          <InputLabel
            id="tour-style-label"
            sx={{
              color: "#fff",
              "&:focus": { color: "#fff" },
              "&:active": { color: "#fff" },
            }}
          >
            Rough Budget
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
            <MenuItem value={1}>~ ¥5,000</MenuItem>
            <MenuItem value={2}>~ ¥10,000</MenuItem>
            <MenuItem value={3}>~ ¥25,000</MenuItem>
            <MenuItem value={4}>~ ¥50,000</MenuItem>
          </Select>
        </FormControl>
        <Button
          sx={{
            background: "#5EB6D7",
            mt: 4,
            color: "#fff",
            padding: "4px 16px",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default SearchTours;
