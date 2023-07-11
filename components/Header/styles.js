const styles = {
  appBar: (theme) => ({
    background: "#fff",
    boxShadow: "none",
    position: "sticky",
    top: 0,
    zIndex: "9999",
    [theme.breakpoints.up("lg")]: {
      padding: "16px 0",
      margin: "auto",
    },
  }),
  container: (theme) => ({
    [theme.breakpoints.up("lg")]: {
      padding: 0,
      margin: 0,
    },
  }),

  logoDesk: {
    mr: 2,
    ml: 2,
    display: { xs: "none", lg: "flex" },
    flexGrow: 1,
  },
  logoMob: {
    mr: 2,
    display: { xs: "flex", lg: "none" },
  },
};

export default styles;
