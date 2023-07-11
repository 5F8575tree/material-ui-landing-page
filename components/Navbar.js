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
        display: { lg: "flex" },
        justifyContent: "flex-end",
      }}
    >
      {pages.map((page, index) => (
        <CustomLink key={index} href={page.href}>
          {page.title}
        </CustomLink>
      ))}
    </Box>
  );
};

export default Navbar;
