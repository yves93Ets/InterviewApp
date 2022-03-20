import { useState } from 'react';
import useGlobalState from '../hooks/useGlobalState';
import EventsCard from '../components/EventsCard';
import { Stack, Box } from '@mui/material';
import { Toggle } from '../components/common';
function Events() {
  const { images, currentImageIndex, resetImageIndex } = useGlobalState();
  const [filteredImages, setfilteredImages] = useState(images);
  const [checked, setChecked] = useState(true);

  if (!images) return <p>No images</p>;
  const image = filteredImages[currentImageIndex];
  const totalImages = filteredImages.length;

  const handleChange = () => {
    setChecked(!checked);
    const filteredList = checked
      ? images.filter((img) => img.detectionsList.length > 0)
      : images;
    resetImageIndex();
    setfilteredImages(filteredList);
  };

  return (
    <Box sx={{ width: '85%' }}>
      <Stack spacing={1} alignItems="center">
        <Toggle prefix="all" suffix="filtered" handleChange={handleChange} />
        <EventsCard {...{ image, currentImageIndex, totalImages }} />
      </Stack>
    </Box>
  );
}

export default Events;
