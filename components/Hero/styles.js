const styles = {
  hero: (theme) => ({
    padding: "16px",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      padding: "32px 20px 20px",
    },
  }),
  wrapper: (theme) => ({
    padding: "16px",
    [theme.breakpoints.up("md")]: {
      maxWidth: 1240,
      display: "flex",
      alignItems: "center",
      padding: "32px 20px 20px",
      gap: "35px",
    },
  }),
  photo: {
    width: "100%",
    maxWidth: "509px",
    display: "block",
    margin: "44px auto 0",
    borderRadius: "75px",
  },
  text: (theme) => ({
    margin: "25px 0",
    [theme.breakpoints.up("md")]: {
      mb: "44px",
    },
  }),
};

export default styles;
