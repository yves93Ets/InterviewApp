import { Button } from '../components/common';
import useGlobalState from '../hooks/useGlobalState';
function Events() {
  const { images, currentImageIndex, changeImageIndex } = useGlobalState();
  if (!images) return <p>No images</p>;
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
          <div> {images.length} total images </div>
          <div> Index: {currentImageIndex} </div>
        </div>
        {images.length > 0 && (
          <img alt="image to show" src={images[currentImageIndex].jpg} />
        )}
        {images[currentImageIndex]?.createdOn && (
          <div> Scan Timestamp: {images[currentImageIndex].createdOn} </div>
        )}
        {/* TODO: Finish adding image metadata!  */}
        <div> Image Metadata: INCOMPLETE </div>
        <div> Number of Detections: INCOMPLETE </div>
      </div>
      <Button onClick={() => changeImageIndex('N')} label="Next Image" />
    </div>
  );
}

export default Events;
