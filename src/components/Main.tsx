import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";
import images from "../data/images";

export const Main = () => {
  return (
    <div className="wrapper">
      <main>
        <ResponsiveMasonry columnsCountBreakPoints={{ 500: 2, 900: 3 }}>
          <Masonry>
            {images.map(({ title, alt, src }, i) => (
              <div key={i} className="img-container">
                <Link to={`/image/${i}`}>
                  <img
                    src={src}
                    style={{ width: "100%", display: "block" }}
                    alt={alt}
                  />
                  <h2>{title}</h2>
                </Link>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </div>
  );
};
