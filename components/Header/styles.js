const styles = {
  appBar: (theme) => ({
    background: "transparent",
    boxShadow: "none",
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("lg")]: {
      padding: "16px 0",
      margin: "auto",
      maxWidth: "1240px",
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
    display: { xs: "none", lg: "flex" },
    flexGrow: 1,
  },
  logoMob: {
    mr: 2,
    display: { xs: "flex", lg: "none" },
  },
};

export default styles;
