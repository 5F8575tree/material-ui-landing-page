import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";

import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

import Navbar from "../Navbar";
import Drawer from "../Drawer";
import PostNav from "@/components/PostNav/PostNav";
import SalesPitch from "@/components/SalesPitch/SalesPitch";

import styles from "./styles";
import ClickAwayListener from "../ClickAwayListener";
import { Typography } from "@mui/material";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <AppBar position="static" sx={styles.appBar}>
        <Container maxWidth="xl" sx={styles.container}>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
          <Toolbar disableGutters>
            <Box
              component="img"
              href="/"
              sx={styles.logoDesk}
              src="/logo.png"
            />
            <Typography
              variant="body1"
              sx={{
                display: { xs: "none", lg: "flex" },
                fontWeight: 700,
              }}
            >
              KAMAKURA TOUR GUIDE
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", lg: "none" },
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                size="large"
                aria-label="menu"
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Box
                component="img"
                href="/"
                sx={styles.logoMob}
                src="/logo.png"
              />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon
                  style={{ fontSize: "28px", color: "#121212" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.cursor = "pointer")
                  }
                />
                <Typography
                  variant="h2"
                  sx={{
                    color: "#121212",
                    fontSize: "28px",
                    padding: "8px",
                    marginBottom: "4px",
                    display: { xs: "flex", sm: "none" },
                  }}
                >
                  |
                </Typography>
                <ClickAwayListener />
              </Box>
            </Box>
          </Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            <Navbar />
            {/* TODO: Need a conditional here to render some links on desktop version! */}
          </Box>
        </Container>
      </AppBar>
      <PostNav />
      <SalesPitch />
    </>
  );
};

export default Header;
