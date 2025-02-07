import { useParams, useNavigate } from "react-router-dom";
import images from "../data/images";

export const ImagePage = () => {
  const { imageId } = useParams(); // Get the image ID from the URL
  const navigate = useNavigate(); // Hook to navigate programmatically
  const image = images[Number(imageId)]; // Convert ID to number and find image

  return (
    <section className="image-page">
      <h1>{image.title}</h1>
      <img src={image.src} alt={image.alt} style={{ width: "100%" }} />
      <p>Date: {image.date}</p>
      <button onClick={() => navigate(-1)}>← Back</button>
    </section>
  );
};
