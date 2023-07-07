import { Button } from "@mui/material";

const styles = {
  btn: (theme) => ({
    fontFamily: "'Red Hat Text', sans-serif",
    fontWeight: 300,
    fontSize: "16px",
    textTransform: "capitalize",
    color: "#ffffff",
    padding: "8px 16px",
    background: theme.palette.slateBlue.main,
    borderRadius: "8px",
    "&:hover": {
      background: "#646ab0",
    },
  }),
};

const CustomButton = ({ children }) => {
  return <Button sx={styles.btn}>{children}</Button>;
};

export default CustomButton;
