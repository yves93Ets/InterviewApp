import { useState } from 'react';
import useGlobalState from '../hooks/useGlobalState';
import EventsCard from '../components/EventsCard';
import { Switch, Typography, Stack, Box, Grid } from '@mui/material';

function Events() {
  const { images, currentImageIndex, resetImageIndex } = useGlobalState();
  const [filteredImages, setfilteredImages] = useState(images);
  const [checked, setChecked] = useState(false);

  if (!images) return <p>No images</p>;
  const image = filteredImages[currentImageIndex];
  const totalImages = filteredImages.length;

  const handleChange = () => {
    setChecked(!checked);
    const filteredList = checked
      ? images.filter((img) => img.detectionsList.length > 0)
      : images;
    console.log(`filteredList`, filteredList);
    resetImageIndex();
    setfilteredImages(filteredList);
  };

  return (
    <Box>
      <Stack spacing={1} alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>All</Typography>
          <Switch color="warning" defaultChecked onChange={handleChange} />
          <Typography>Filtered</Typography>
        </Stack>
        <EventsCard {...{ image, currentImageIndex, totalImages }} />
      </Stack>
    </Box>
  );
}

export default Events;
