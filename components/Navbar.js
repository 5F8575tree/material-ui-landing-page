import { Box } from "@mui/material";
import CustomLink from "./CustomLink";

const pages = [
  { title: "Tours", href: "#tours" },
  { title: "About", href: "#about" },
  { title: "Reviews", href: "#reviews" },
  { title: "News", href: "#news" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      {pages.map((page, index) => (
        <CustomLink
          key={index}
          href={page.href}
          sx={{
            marginTop: { lg: "0px", xs: "32px" },
            fontSize: { lg: "16px", xs: "24px" },
          }}
        >
          {page.title}
        </CustomLink>
      ))}
    </Box>
  );
};

export default Navbar;
