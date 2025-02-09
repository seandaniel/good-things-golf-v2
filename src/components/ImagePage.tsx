import { useParams, useNavigate } from "react-router-dom";
import images from "../data/images";

export const ImagePage = () => {
  const { imageId } = useParams(); // Get the image ID from the URL
  const navigate = useNavigate(); // Hook to navigate programmatically
  const image = images[Number(imageId)]; // Convert ID to number and find image

  return (
    <div className="wrapper">
      <section className={`image-page ${image.className}`}>
        <h1>{image.title}</h1>
        <img src={image.src} alt={image.alt} style={{ width: "100%" }} />
        <div className="date-description-container">
          <p>{image.date}</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </section>
    </div>
  );
};
