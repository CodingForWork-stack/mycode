// pages/optimized-image.js
import CustomImage from '../components/CustomImage';

export default function Home() {
  return (
    <div>
      <h1>Optimized Custom Image Component from the TSX</h1>
      <CustomImage
        src="/images/next_example.webp"
        alt="Optimized Image"
        width={600}
        height={400}
        placeholderSrc="/images/Orange-colored-cat-yawns-displaying-teeth.jpg"
      />
    </div>
  );
}

