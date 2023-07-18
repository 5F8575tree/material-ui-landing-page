import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import styles from "./styles";

import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import CustomButton from "../Button";
import EmptyTextarea from "../CustomTextArea";

const contactImage =
  "https://images.unsplash.com/photo-1531143991054-06c90e011ab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

const ContactUs = () => {
  return (
    <Box sx={styles.contactUs}>
      <Box sx={styles.wrapper} id="contact">
        <Box sx={styles.form}>
          <Typography variant="h2">Get in touch!</Typography>
          <Typography variant="body1" sx={{ fontSize: "16px", mt: "8px" }}>
            Let us know what you&#39;re looking for and we will help you design
            the perfect tour.
          </Typography>
          <Box sx={styles.info}>
            <Box sx={styles.itemBlockInfo}>
              <Box sx={styles.titleInfo}>
                <EmailIcon />
                <Typography sx={{ marginLeft: "4px" }}>Email us</Typography>
              </Box>
              <Box sx={styles.titleValue}>support@email.com</Box>
            </Box>
            <Box sx={styles.itemBlockInfo}>
              <Box sx={styles.titleInfo}>
                <LocalPhoneIcon />
                <Typography sx={{ marginLeft: "4px" }}>Phone us</Typography>
              </Box>
              <Box sx={styles.titleValue}>7770-9987-9928</Box>
            </Box>
          </Box>

          <Box sx={styles.input}>
            <TextField placeholder="Name" sx={styles.textField} />
            <TextField placeholder="Email" sx={styles.textField} />
          </Box>
          <EmptyTextarea />
          <CustomButton>Send message</CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
