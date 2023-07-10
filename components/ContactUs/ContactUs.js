import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import styles from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../Button";
import EmptyTextarea from "../CustomTextArea";

const contactImage =
  "https://images.unsplash.com/photo-1531143991054-06c90e011ab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

const ContactUs = () => {
  return (
    <Box sx={styles.contactUs}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.form}>
          <Typography variant="h2">Get in touch!</Typography>
          <Typography variant="body1">
            Let us know what you&#39;re looking for and we will help you design
            the perfect tour.
          </Typography>
          <Box sx={styles.info}>
            <Box sx={styles.itemBlockInfo}>
              <Box sx={styles.titleInfo}>
                <FontAwesomeIcon icon={faEnvelope} sx={styles.imgInfo} />
                <Typography sx={{ marginLeft: "4px" }}>Email us</Typography>
              </Box>
              <Box sx={styles.titleValue}>support@email.com</Box>
            </Box>
            <Box sx={styles.itemBlockInfo}>
              <Box sx={styles.titleInfo}>
                <FontAwesomeIcon icon={faPhone} />
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
          <CustomButton>
            Send message
            <FontAwesomeIcon icon={faArrowRight} />
          </CustomButton>
        </Box>
        <Box>
          <Box component="img" src={contactImage} sx={styles.photo} />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
