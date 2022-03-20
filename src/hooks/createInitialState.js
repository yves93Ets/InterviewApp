export const createInitialState = (data) => {
  return {
    currentImageIndex: 0,
    images: data.scanResults,
  };
};
