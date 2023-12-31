import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#686868",
    },
    slateBlue: {
      main: "#E82B10",
    },
    bg: {
      main: "#121212",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "none",
        },
        input: {
          padding: "8px",
        },
      },
    },
  },
});

theme.typography.h2 = {
  fontFamily: "'Red Hat Text', sans-serif",
  fontWeight: 300,
  fontSize: "32px",
  color: "#010101",
  "@media (min-width:600px)": {
    fontSize: "64px",
    lineHeight: "78px",
  },
};

theme.typography.h3 = {
  fontFamily: "'Red Hat Text', sans-serif",
  fontWeight: 300,
  fontSize: "24px",
  lineHeight: "29px",
  color: "#010101",
  "@media (min-width:600px)": {
    fontSize: "34px",
  },
};

theme.typography.body1 = {
  fontFamily: "'Red Hat Text', sans-serif",
  fontWeight: 400,
  fontSize: "18px",
  color: "#010101",
};

export { theme };
