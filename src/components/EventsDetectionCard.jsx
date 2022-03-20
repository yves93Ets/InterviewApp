import { useState } from 'react';
import {
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Collapse,
  Box,
  Divider,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
function EventsDetectionCard({ detectionsList }) {
  const [expanded, setExpanded] = useState(false);
  const hasList = detectionsList.length > 0;

  const handleExpandClick = () => {
    if (hasList) {
      setExpanded(!expanded);
    }
  };

  const Expand = styled((props) => {
    const { expand, color, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand, color }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    color,
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Box style={{ with: '50%' }}>
      <CardActions disableSpacing>
        <Expand
          expand={expanded}
          color={hasList ? 'black' : 'lightgrey'}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </Expand>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {detectionsList.map((det, index) => {
          return (
            <CardContent key={index}>
              <Typography as="h1"> {index}</Typography>
              <Typography paragraph>UUID {det.uuid}</Typography>
              <Typography paragraph>Mean confidence {det.meanconf}</Typography>
              <Typography paragraph>Sum confidence {det.sumconf}</Typography>
              <Divider />
            </CardContent>
          );
        })}
      </Collapse>
    </Box>
  );
}

export default EventsDetectionCard;
