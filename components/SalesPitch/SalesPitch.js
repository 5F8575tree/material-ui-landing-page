import { Box, Typography } from "@mui/material";
import styles from "./styles";
import InfoIcon from "@mui/icons-material/Info";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SalesPitch = () => {
  return (
    <Box sx={styles.salesPitch}>
      <InfoIcon style={{ marginRight: "4px", fontSize: "18px" }} />
      <Typography sx={{ fontSize: "16px", color: "white" }}>
        View all available dates for 2023-2024 Tours.
      </Typography>
      <ChevronRightIcon style={{ marginLeft: "4px", fontSize: "18px" }} />
    </Box>
  );
};

export default SalesPitch;
