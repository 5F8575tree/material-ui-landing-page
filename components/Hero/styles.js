const styles = {
  hero: (theme) => ({
    height: "75vh",
    padding: "16px",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1562926874-fcc322329ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVub3NoaW1hfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      padding: "32px 20px 20px",
    },
  }),
  wrapper: (theme) => ({
    height: "100%",
    padding: "44px 16px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      maxWidth: 1240,
      padding: "32px 20px 20px",
      gap: "35px",
    },
  }),
};

export default styles;
