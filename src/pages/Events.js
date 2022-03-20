import { Button } from './components/common';

function NavigationBar() {
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
      {/* TODO: This button does nothing!  */}
      <Button label="previous Image" />
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
        {images.length > 0 && <img src={images[currentImageIndex].jpg} />}
        {images[currentImageIndex]?.createdOn && (
          <div> Scan Timestamp: {images[currentImageIndex].createdOn} </div>
        )}
        {/* TODO: Finish adding image metadata!  */}
        <div> Image Metadata: INCOMPLETE </div>
        <div> Number of Detections: INCOMPLETE </div>
      </div>
      {/* TODO: This button also does nothing  */}
      <Button label="Next Image" />
    </div>
  );
}

export default NavigationBar;
