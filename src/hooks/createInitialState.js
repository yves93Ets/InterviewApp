export const createInitialState = (data) => {
  return {
    currentImageIndex: 0,
    maxIndex: data.scanResults.length - 1,
    images: data.scanResults,
  };
};
