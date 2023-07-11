import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Navbar";
import Drawer from "../Drawer";

import styles from "./styles";
import { Typography } from "@mui/material";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl" sx={styles.container}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters>
          <Box component="img" href="/" sx={styles.logoDesk} src="/logo.png" />
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
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
            <Box component="img" href="/" sx={styles.logoMob} src="/logo.png" />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ fontSize: "28px", color: "#121212" }}
                onMouseEnter={(e) => (e.currentTarget.style.cursor = "pointer")}
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
              <Box
                component="img"
                src="/uk-flag-circle.svg"
                style={{ marginLeft: "8px" }}
              />
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{
                  color: "#121212",
                  paddingLeft: "8px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.cursor = "pointer")}
              />
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            <Navbar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
