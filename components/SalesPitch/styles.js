const styles = {
  salesPitch: (theme) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    color: "white",
    background: "red",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  }),
};

export default styles;
