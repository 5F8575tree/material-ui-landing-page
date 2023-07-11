const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const styles = {
  contactUs: (theme) => ({
    padding: "44px 20px",
    textAlign: "left",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      padding: "200px 20px 190px",
    },
  }),
  wrapper: (theme) => ({
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      alignItems: "center",
      maxWidth: "1240px",
      gap: "120px",
    },
  }),
  info: (theme) => ({
    marginTop: "20px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
    },
  }),
  form: (theme) => ({
    maxWidth: "613px",
    [theme.breakpoints.up("sm")]: {
      margin: "auto",
    },
  }),
  titleInfo: (theme) => ({
    display: "flex",
    alignItems: "center",
    color: `${theme.palette.slateBlue.main}`,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "capitalize",
  }),
  titleValue: {
    color: "#121212",
    fontFamily: "Red Hat Text, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    mt: "3px",
  },
  itemBlockInfo: {
    marginBottom: "24px",
    flex: 1,
  },
  input: (theme) => ({
    display: "flex",
    gap: "25px",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
    },
  }),
  textField: (theme) => ({
    width: "300px",
    fontFamily: "Red Hat Text, sans-serif",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: 1.5,
    padding: "4px",
    borderRadius: "0px",
    color: "#121212",
    background: `${theme.palette.mode === "dark" ? grey[900] : "#fff"}`,
    border: `1px solid ${
      theme.palette.mode === "dark" ? grey[700] : grey[200]
    }`,
    boxShadow: `0px 2px 24px ${
      theme.palette.mode === "dark" ? blue[900] : blue[100]
    }`,
    "& input:hover": {
      borderColor: "#3399FF",
    },

    "& input::placeholder": {
      color: "#9902hn",
    },
  }),
  photo: {
    width: "100%",
    margin: "44px auto 0",
    borderRadius: "75px",
    maxWidth: "509px",
    display: "block",
  },
  textArea: {
    margin: "24px 0",
    padding: "12px",
    width: "100%",
    fontSize: "20px",
    lineHeight: "20px",
    border: "0.5px solid #777FEB",
    borderRadius: "8px",
    outline: "none",
    boxSizing: "border-box",
  },
};

export default styles;
