import useGlobalState from '../hooks/useGlobalState';
import EventsCard from '../components/EventsCard';
function Events() {
  const { images, currentImageIndex } = useGlobalState();
  if (!images) return <p>No images</p>;
  const image = images[currentImageIndex];
  const totalImages = images.length;

  return <EventsCard {...{ image, currentImageIndex, totalImages }} />;
}

export default Events;
