import golfHole from "../assets/golfHole.svg";

export const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <h1>
          <a href="#">Good Things Golf</a>
        </h1>
        <img src={golfHole} alt="A golf flag" />
      </div>
    </header>
  );
};
