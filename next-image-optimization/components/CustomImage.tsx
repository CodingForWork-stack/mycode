// components/CustomImage.tsx
import { useState, useMemo, useCallback } from 'react';
import NextImage from 'next/image';

// Define the props for the CustomImage component using TypeScript
interface CustomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  placeholderSrc?: string; // Optional placeholder image
}

// The CustomImage component
const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  placeholderSrc = '/placeholder.png' // Default placeholder image
}) => {
  const [isLoading, setIsLoading] = useState(true); // State to track if the image is still loading

  // Callback to handle when the image finishes loading
  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Memoize the image element to avoid unnecessary re-renders
  const imageElement = useMemo(() => (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoadingComplete={handleLoad}
      placeholder="blur" // Blur up the image while loading
      blurDataURL={placeholderSrc} // Use the placeholder as the blur data
      loading="lazy" // Lazy load the image
    />
  ), [src, alt, width, height, placeholderSrc, handleLoad]);

  return (
    <div style={{ position: 'relative', width, height }}>
      {isLoading && (
        <img
          src={placeholderSrc}
          alt="placeholder"
          style={{ width: '100%', height: '100%', position: 'absolute' }} // Cover the entire area with the placeholder
        />
      )}
      {imageElement}
    </div>
  );
};

export default CustomImage;


