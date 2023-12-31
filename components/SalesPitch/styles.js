const styles = {
  salesPitch: (theme) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    color: "white",
    background: "#A50000",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  }),
};

export default styles;
