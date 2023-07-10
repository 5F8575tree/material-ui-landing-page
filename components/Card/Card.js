import {
  Box,
  Button,
  CardActions,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import MuiCard from "@mui/material/Card";

import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, image, listItem1, listItem2, listItem3 }) => {
  return (
    <MuiCard sx={styles.card}>
      <CardContent sx={{ padding: "0" }}>
        <Box component="img" src={image} sx={styles.image} />
        <Typography variant="h3" sx={styles.title}>
          {title}
        </Typography>
        <List>
          <ListItem sx={styles.listItem}>
            <FontAwesomeIcon icon={faCheck} />
            <Typography
              variant="body1"
              sx={{
                marginLeft: "5px",
              }}
            >
              {listItem1}
            </Typography>
          </ListItem>
          <ListItem sx={styles.listItem}>
            <FontAwesomeIcon icon={faCheck} />
            <Typography
              variant="body1"
              sx={{
                marginLeft: "5px",
              }}
            >
              {listItem2}{" "}
            </Typography>
          </ListItem>
          <ListItem sx={styles.listItem}>
            <FontAwesomeIcon icon={faCheck} />
            <Typography
              variant="body1"
              sx={{
                marginLeft: "5px",
              }}
            >
              {listItem3}
            </Typography>
          </ListItem>
        </List>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <Button sx={styles.btn}>Learn More</Button>
        <FontAwesomeIcon icon={faArrowRight} />
      </CardActions>
    </MuiCard>
  );
};

export default Card;
