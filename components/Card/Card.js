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
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <MuiCard>
      <CardContent sx={{ padding: "0" }}>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1570146275065-ae13a9edd4de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFwYW4lMjBzZWFmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        />
        <Typography variant="h3" sx={styles.title}>
          Cuisine
        </Typography>
        <List>
          <ListItem sx={styles.listItem}>
            <FontAwesomeIcon icon={faArrowRight} />
            Find the best local restaurants
          </ListItem>
          <ListItem sx={styles.listItem}>
            <FontAwesomeIcon icon={faArrowRight} />
            Share a drink while gazing at the ocean
          </ListItem>
          <ListItem sx={styles.listItem}>
            <FontAwesomeIcon icon={faArrowRight} />
            Visit the local fish market
          </ListItem>
        </List>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <Button>Learn More</Button>
        <FontAwesomeIcon icon={faArrowRight} />
      </CardActions>
    </MuiCard>
  );
};

export default Card;
