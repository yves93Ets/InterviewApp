import { Button } from './common';
import useGlobalState from '../hooks/useGlobalState';
import { Card, CardContent, Typography, Box } from '@mui/material';
import EventsDetectionCard from './EventsDetectionCard';
import { useTranslation } from 'react-i18next';

function EventsCard({ totalImages, image, currentImageIndex }) {
  const { t } = useTranslation();
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
      <Button onClick={() => changeImageIndex('P')} label="previousImage" />
      <Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            {t('totalImages')}: {totalImages}
          </Box>
          <Box>
            {' '}
            {t('index')}: {currentImageIndex}{' '}
          </Box>
        </Box>
        <img alt={blobContainer} src={jpg} />

        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {image?.createdOn && (
                <>
                  {t('scannedAt')}: {createdOn}{' '}
                </>
              )}
            </Typography>
            <Typography variant="body2">
              {`${t('overalConfidence')}: ${overallConf}`}
              <br />
              {`${t('noiseMetric')}: ${noiseFloorMetric}`}
              <br />
              {`${t('nDetections')}: ${detectionsList.length}`}
            </Typography>
          </CardContent>
          <EventsDetectionCard detectionsList={detectionsList} />
        </Card>
      </Box>
      <Button onClick={() => changeImageIndex('N')} label="nextImage" />
    </Box>
  );
}

export default EventsCard;
