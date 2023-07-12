import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

const Drawer = ({ open, onClose }) => {
  return (
    <MuiDrawer
      PaperProps={{
        sx: { width: "100%" },
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
        <Box sx={{ padding: "4em" }}>
          <Navbar />
        </Box>
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
