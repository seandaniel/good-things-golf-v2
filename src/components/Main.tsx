import { useLayoutEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link, useLocation } from "react-router-dom";
import images from "../data/images";

export const Main = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const savedScroll = sessionStorage.getItem("scrollY");
    console.log(savedScroll);
    if (savedScroll) {
      requestAnimationFrame(() => {
        window.scrollTo(0, Number(savedScroll));
      });
      sessionStorage.removeItem("scrollY");
    }
  }, [location]);

  const handleClick = () => {
    sessionStorage.setItem("scrollY", window.scrollY.toString());
    window.scrollTo(0, 0);
  };
  return (
    <div className="wrapper">
      <main>
        <ResponsiveMasonry columnsCountBreakPoints={{ 500: 3, 900: 5 }}>
          <Masonry>
            {images.map(({ title, alt, src }, i) => (
              <div key={i} className="img-container">
                <Link to={`/image/${i}`} onClick={handleClick}>
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
