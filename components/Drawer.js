import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

const Drawer = ({ open, onClose }) => {
  return (
    <MuiDrawer
      PaperProps={{
        sx: { width: "100%", overflow: "hidden" },
      }}
      anchor="left" // Drawer comes out from the left
      open={open}
      onClose={onClose}
    >
      <Box sx={{ padding: "0px" }}>
        <IconButton
          onClick={onClose}
          // stlyes for this element are in globals.css for specificity
        >
          <FontAwesomeIcon icon={faTimes} />
        </IconButton>
        <Box
          sx={{
            padding: "4em",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backgroundImage:
                'url("https://images.unsplash.com/photo-1554797589-7241bb691973?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGphcGFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.1,
            }}
          />
          <Typography
            variant="body1"
            sx={{ marginBottom: "4px", color: "#525252" }}
          >
            info@kamakuratourgguide.com
          </Typography>
          <Typography variant="body1">
            Tel:{" "}
            <span>
              <strong>+81 390 3983 2200</strong>
            </span>
          </Typography>
          <Navbar />
        </Box>
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
