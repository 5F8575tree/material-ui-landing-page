import { Box, Typography } from "@mui/material";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SalesPitch = () => {
  return (
    <Box sx={styles.salesPitch}>
      <FontAwesomeIcon
        icon={faCircleInfo}
        style={{ marginRight: "8px", fontSize: "22px" }}
      />
      <Typography sx={{ fontSize: "16px", color: "white" }}>
        View all available dates for 2023-2024 Tours.
      </Typography>
      <FontAwesomeIcon
        icon={faAngleRight}
        style={{ marginLeft: "8px", fontSize: "18px" }}
      />
    </Box>
  );
};

export default SalesPitch;
