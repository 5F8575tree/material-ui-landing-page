import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { KeyboardArrowDown } from "@mui/icons-material";

import { useState } from "react";
import { Typography } from "@mui/material";

export default function ClickAway() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: "absolute",
    top: 30,
    right: 8,
    // left: 0,
    zIndex: 1,
    border: "1px solid",
    p: 1,
    bgcolor: "#121212",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    borderRadius: "6px",
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: "relative" }}>
        <button
          type="button"
          onClick={handleClick}
          style={{ border: "none", background: "transparent" }}
        >
          <Box
            component="img"
            src="/uk-flag-circle.svg"
            style={{ marginLeft: "8px" }}
          />
          <KeyboardArrowDown
            style={{
              color: "#121212",
              paddingLeft: "8px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.cursor = "pointer")}
          />
        </button>
        {open ? (
          <Box sx={styles}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <button
                type="button"
                onClick={handleClick}
                style={{ border: "none", background: "transparent" }}
              >
                <Box
                  component="img"
                  src="/aus-flag-circle.svg"
                  style={{
                    height: "20px",
                  }}
                />
              </button>
              <Typography sx={{ fontSize: "15px", ml: 1, color: "#fff" }}>
                Australia
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <button
                type="button"
                onClick={handleClick}
                style={{ border: "none", background: "transparent" }}
              >
                <Box
                  component="img"
                  src="/us-flag-circle.svg"
                  style={{
                    height: "20px",
                  }}
                />
              </button>
              <Typography sx={{ fontSize: "15px", ml: 1, color: "#fff" }}>
                USA
              </Typography>
            </Box>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
