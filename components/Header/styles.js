const styles = {
  appBar: (theme) => ({
    maxWidth: "1240px",
    background: "#ffffff",
    boxShadow: "none",
    zIndex: "9999",
    [theme.breakpoints.up("lg")]: {
      padding: "16px 0",
      maxWidth: "100%",
      margin: "auto",
    },
  }),
  container: (theme) => ({
    [theme.breakpoints.up("lg")]: {
      padding: 0,
      margin: "auto",
      maxWidth: "1240px",
    },
  }),

  logoDesk: {
    mr: 2,
    ml: 2,
    display: { xs: "none", lg: "flex" },
    maxHeight: "60px",
  },
  logoMob: (theme) => ({
    mr: 2,
    display: { xs: "flex", lg: "none" },
    maxHeight: "60px",
    [theme.breakpoints.down("lg")]: {
      maxHeight: "40px",
    },
  }),
};

export default styles;
