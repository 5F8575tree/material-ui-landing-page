import { List, Button } from "@mui/material";
import styles from "./styles";

const PostNav = () => {
  return (
    <List sx={styles.postNav}>
      <Button sx={styles.listItem}>Tours</Button>
      <Button sx={styles.listItem}>About Us</Button>
      <Button sx={styles.listItem}>Enquiry</Button>
    </List>
  );
};

export default PostNav;
