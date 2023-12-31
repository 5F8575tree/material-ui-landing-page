import { Box, Typography } from "@mui/material";
import CustomLink from "./CustomLink";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CustomButton from "./Button";
import { Instagram, Twitter, Facebook } from "@mui/icons-material";

const pages = [
  { title: "Reviews", href: "#" },
  { title: "Experiences", href: "#tours" },
  { title: "About KTG", href: "#about" },
  { title: "Travel Tips", href: "#" },
  { title: "Japanese Culture", href: "#" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", lg: "none" },
        justifyContent: "flex-end",
        flexDirection: { xs: "column" },
      }}
    >
      <Box sx={{ marginTop: "32px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#A50000", fontWeight: 500, letterSpacing: "1px" }}
          >
            Small Group Tours
          </Typography>
          <ChevronRightIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#E82B10", fontWeight: 500, letterSpacing: "1px" }}
          >
            Private Day Tours
          </Typography>
          <ChevronRightIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#006886", fontWeight: 500, letterSpacing: "1px" }}
          >
            Multi-Day Tours
          </Typography>
          <ChevronRightIcon />
        </Box>
      </Box>
      {pages.map((page, index) => (
        <CustomLink
          key={index}
          href={page.href}
          sx={{
            color: "#525252",
            marginTop: { lg: "0px", xs: "16px" },
            fontSize: { lg: "16px", xs: "18px" },
          }}
        >
          {page.title}
        </CustomLink>
      ))}
      <Box
        sx={{
          marginTop: "44px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomButton>Make a Booking</CustomButton>
        <Box sx={{ display: "flex", marginTop: "32px" }}>
          <Instagram
            sx={{
              color: "#4d4d4f",
              marginRight: "8px",
              height: "40px",
              width: "40px",
            }}
          />
          <Twitter
            sx={{
              color: "#4d4d4f",
              marginRight: "8px",
              height: "40px",
              width: "40px",
            }}
          />
          <Facebook sx={{ color: "#4d4d4f", height: "40px", width: "40px" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
