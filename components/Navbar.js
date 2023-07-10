import { Box, Button } from "@mui/material";

const pages = [
  { title: "Tours", arrow: false },
  { title: "About", arrow: false },
  { title: "Reviews", arrow: false },
  { title: "Japan Blog", arrow: false },
  { title: "Contact", arrow: false },
];

const styles = {
  btnLink: {
    color: "#121212",
    display: "flex",
    fontSize: 18,
    lineHeight: "26px",
    fontWeight: 500,
    textTransform: "capitalize",
    marginRight: "4em",
  },
};

const Navbar = () => {
  return (
    <Box
      sx={{ flexGrow: 1, display: { lg: "flex" }, justifyContent: "flex-end" }}
    >
      {pages.map((page, index) => {
        return (
          <Button key={index} sx={styles.btnLink}>
            {page.title}
          </Button>
        );
      })}
    </Box>
  );
};

export default Navbar;
