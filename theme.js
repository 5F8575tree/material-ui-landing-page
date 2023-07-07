import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#686868",
    },
    slateBlue: {
      main: "#777FEB",
    },
    bg: {
      main: "#121212",
    },
  },
});

theme.typography.h2 = {
  fontFamily: "'Red Hat Text', sans-serif",
  fontWeight: 300,
  fontSize: 32,
  color: "#010101",
  "@media (min-width:600px)": {
    fontSize: 64,
  },
};

theme.typography.body1 = {
  fontFamily: "'Red Hat Text', sans-serif",
  fontWeight: 400,
  fontSize: 14,
  color: "#010101",
  "@media (min-width:600px)": {
    fontSize: 16,
  },
};

export { theme };
