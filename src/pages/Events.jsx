import { Button } from '../components/common';
import useGlobalState from '../hooks/useGlobalState';
import { Card, CardContent, Typography } from '@mui/material';
function Events() {
  const { images, currentImageIndex, changeImageIndex } = useGlobalState();
  if (!images) return <p>No images</p>;
  const image = images[currentImageIndex];
  console.log(`images`, image);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: '85%',
        height: '100%',
      }}
    >
      <Button onClick={() => changeImageIndex('P')} label="previous Image" />
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div>total images: {images.length}</div>
          <div> Index: {currentImageIndex} </div>
        </div>
        {images.length > 0 && <img alt={image.blobContainer} src={image.jpg} />}

        {/* TODO: Finish adding image metadata!  */}
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {image?.createdOn && (
                <div> Scan Timestamp: {image.createdOn} </div>
              )}
            </Typography>
            <Typography variant="body2">
              {`Overall confidence: ${image.overallConf}`}
              <br />
              {`Noise floor metric: ${image.noiseFloorMetric}`}
              <br />
              {`Number of Detections: ${image.detectionsList.length}`}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Button onClick={() => changeImageIndex('N')} label="Next Image" />
    </div>
  );
}

export default Events;
