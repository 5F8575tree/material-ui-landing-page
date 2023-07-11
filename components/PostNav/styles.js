const styles = {
  postNav: (theme) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    background: "#121212",
    padding: "0px",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  }),
  listItem: {
    fontFamily: "'Red Hat Text', sans-serif",
    color: "white",
    padding: "8px",
    borderRadius: 0,
    "&:hover": {
      background: "white",
      color: "#121212",
    },
  },
};

export default styles;
