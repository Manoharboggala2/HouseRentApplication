export function getImageUrl(imageId, size = 's') {
  return (
    '' +
    imageId +
    size +
    '.jpg'
  );
}