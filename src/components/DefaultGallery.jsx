import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

/** @jsxImportSource react */
export default function DefaultGallery({ images }) {
  // If no images, render nothing
  if (!images || images.length === 0) {
    return null;
  }

  // Map URLs to gallery items
  const items = images.map(src => ({ original: src, thumbnail: src }));

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">📸 Project Gallery</h2>
      <ImageGallery items={items} showPlayButton={false} />
    </div>
  );
}
