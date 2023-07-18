import { Button } from "@mui/material";

const styles = {
  btn: (theme) => ({
    alignItems: "center",
    backgroundClip: "padding-box",
    backgroundColor: "#5EB6D7",
    border: "1px solid transparent",
    borderRadius: ".25rem",
    boxShadow: "rgba(0, 0, 0, 0.02) 0 1px 3px 0",
    boxSizing: "border-box",
    color: "#fff",
    cursor: "pointer",
    display: "inline-flex",
    fontFamily: "'Red Hat Text',sans-serif",
    fontSize: "16px",
    fontWeight: 600,
    justifyContent: "center",
    lineHeight: "1.25",
    margin: 0,
    minHeight: "3rem",
    padding: "calc(.875rem - 1px) calc(1.5rem - 1px)",
    position: "relative",
    textDecoration: "none",
    textTransform: "capitalize",
    transition: "all 250ms",
    userSelect: "none",
    webkitUserSelect: "none",
    touchAction: "manipulation",
    verticalAlign: "baseline",
    width: "auto",
    "&:hover": {
      backgroundColor: "#006886",
      transform: "translateY(-1px)",
    },
  }),
};

const CustomButton = ({ children }) => {
  return <Button sx={styles.btn}>{children}</Button>;
};

export default CustomButton;
