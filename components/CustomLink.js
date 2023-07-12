import { Link } from "@mui/material";

const CustomLink = ({ children, href, sx }) => {
  return (
    <Link
      sx={{
        fontFamily: "'Red Hat Text', sans-serif",
        fontWeight: 500,
        fontSize: "18px",
        textTransform: "capitalize",
        color: "#121212",
        padding: "0px",
        borderRadius: "42px 42px 0 0",
        background: "transparent",
        borderBottom: "0.5px solid rgba(0,0,0,0)",
        "&:hover": {
          color: "#ec1c1c",
          background: "transparent",
          borderBottom: "0.5px solid #ec1c1c",
          cursor: "pointer",
        },
        "&:active": {
          color: "#ec1c1c",
          background: "transparent",
          borderBottom: "0.5px solid #ec1c1c",
        },
        ...sx, // Merge custom styles passed from Navbar
      }}
      underline="none"
      rel="noreferrer"
      href={href}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
