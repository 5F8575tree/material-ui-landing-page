import { theme } from "../../theme"; // Import your custom theme

const styles = {
  card: (theme) => ({
    display: "flex",
    flexDirection: "column",
    background: "transparent",
    boxShadow: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.015)",
      opacity: "0.75",
      cursor: "pointer",
    },
  }),
  title: {
    color: "#006886",
    fontSize: "16px",
    fontWeight: 500,
    textAlign: "left",
  },
  listItem: {
    fontFamily: "Red Hat Text, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    padding: "12px 0",
  },
  image: {
    width: "100%",
    height: "350px",
    maxWidth: "350px",
    maxHeight: "250px",
    mt: "24px",
  },
};

export default styles;
