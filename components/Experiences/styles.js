const styles = {
  experiences: (theme) => ({
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    background: "#F5F5F5",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "88px 20px",
    },
  }),
  wrapper: {
    maxWidth: "1240px",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1678105627738-fa7e5ae584f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amFwYW4lMjBnZWlzaGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.1,
  },
  links: (theme) => ({
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    maxWidth: "240px",
    [theme.breakpoints.up("sm")]: {
      gap: "40px",
      maxWidth: "100%",
    },
  }),
  image: (theme) => ({
    width: "100%",
    marginTop: "24px",
    maxWidth: "402px",
    height: "auto",
    maxHeight: "209px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "44px",
    },
  }),
  contentTitle: (theme) => ({
    fontSize: "14px",
    lineHeight: "17px",
    maxWidth: "402px",
    textAlign: "left",
    margin: "4px auto 0",
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
      lineHeight: "29px",
    },
  }),
};

export default styles;
