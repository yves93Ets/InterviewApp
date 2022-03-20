import { Button } from './common';
import useGlobalState from '../hooks/useGlobalState';
import { Card, CardContent, Typography, Box } from '@mui/material';
import EventsDetectionCard from './EventsDetectionCard';

function EventsCard({ totalImages, image, currentImageIndex }) {
  const { changeImageIndex } = useGlobalState();
  const {
    detectionsList,
    jpg,
    createdOn,
    overallConf,
    noiseFloorMetric,
    blobContainer,
  } = image;
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        height: '100%',
      }}
    >
      <Button onClick={() => changeImageIndex('P')} label="previous Image" />
      <Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box>total images: {totalImages}</Box>
          <Box> Index: {currentImageIndex} </Box>
        </Box>
        <img alt={blobContainer} src={jpg} />

        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {image?.createdOn && <Box> Scan Timestamp: {createdOn} </Box>}
            </Typography>
            <Typography variant="body2">
              {`Overall confidence: ${overallConf}`}
              <br />
              {`Noise floor metric: ${noiseFloorMetric}`}
              <br />
              {`Number of Detections: ${detectionsList.length}`}
            </Typography>
          </CardContent>
          <EventsDetectionCard detectionsList={detectionsList} />
        </Card>
      </Box>
      <Button onClick={() => changeImageIndex('N')} label="Next Image" />
    </Box>
  );
}

export default EventsCard;
