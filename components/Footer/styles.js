const styles = {
  footer: (theme) => ({
    maxWidth: "1240px",
    padding: "44px 20px",
    textAlign: "left",
    margin: "auto",
    [theme.breakpoints.up("lg")]: {
      padding: "88px 20px",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  }),
  gridWrapper: (theme) => ({
    padding: "44px 0px",
    borderTop: `0.5px solid ${theme.palette.slateBlue.main}`,
    borderBottom: `0.5px solid ${theme.palette.slateBlue.main}`,
    rowGap: "24px",
    [theme.breakpoints.up("lg")]: {
      padding: "88px 0px",
    },
  }),
  linkTitle: {
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "29px",
  },
  title: (theme) => ({
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "29px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "48px",
      lineHeight: "59px",
    },
  }),
  text: (theme) => ({
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "28px",
    mt: "24px",
    color: "#000000",
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px",
      lineHeight: "28px",
    },
  }),
  paper: {
    p: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#f5f5f5",
    borderRadius: "8px",
    border: "0.5px solid rgba(0,0,0,0.2)",
    boxShadow: "none",
    mt: "20px",
  },
  subscribeFooter: (theme) => ({
    width: "100%",
    maxWidth: "372px",
    [theme.breakpoints.up("lg")]: {
      width: "372px",
    },
  }),
  icon: {
    width: "24px",
    height: "24px",
    color: "#777FEB",
  },
  emailBlock: (theme) => ({
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "flex-end",
    },
  }),
  inputBase: {
    ml: 1,
    flex: 1,
    "& input::placeholder": {
      fontSize: "20px",
      lineHeight: "20px",
    },
  },
  itemList: (theme) => ({
    marginLeft: "-16px",
    fontFamily: "'Red Hat Text', sans-serif",
  }),
};

export default styles;
