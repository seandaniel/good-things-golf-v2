import gambleSands from "../assets/gambleSands-min.jpg";
import wasteland from "../assets/wasteland-min.jpg";
// @ts-expect-error - jpg vs JPG problems
import ghostrider from "../assets/ghostrider-min.JPG";
// @ts-expect-error - jpg vs JPG problems
import fernie from "../assets/fernie-min.JPG";
import pullback from "../assets/pullback-min.jpg";
import uberflip from "../assets/uberflip-min.jpg";
import sundayBag from "../assets/sundayBag-min.jpg";
import carts from "../assets/carts-min.jpg";
import colors from "../assets/colors-min.jpg";
import scholars from "../assets/scholars-min.jpg";
import pushCartMafia from "../assets/pushCartMafia-min.jpg";
import theRise from "../assets/theRise-min.jpg";
import goldenHour from "../assets/goldenHour-min.jpg";
import bigCat from "../assets/bigCat-min.jpg";
// @ts-expect-error - jpg vs JPG problems
import shannonLake from "../assets/shannonLake-min.JPG";
import darts from "../assets/dart-min.jpg";

const images = [
  {
    title: "Sunday Bag",
    alt: "A golf bag and a bench",
    src: sundayBag,
    date: "2024-09-19",
    className: "portrait",
  },
  {
    title: "Beachy",
    alt: "A man with a beer poses in front of a large waste bunker",
    src: wasteland,
    date: "2021-06-22",
    className: "landscape",
  },
  {
    title: "Tigs",
    alt: "Two pictures of Tiger Woods",
    src: bigCat,
    date: "2025-02-08",
    className: "portrait"
  },
  {
    title: "Ghostrider",
    alt: "A train track, fairway and mountain in the distance",
    src: ghostrider,
    date: "2016-08-13",
    className: "portrait",
  },
  {
    title: "Scholars",
    alt: "A golf simulator",
    src: scholars,
    date: "2022-01-19",
    className: "portrait",
  },
  {
    title: "Wild West",
    alt: "A golf cart",
    src: carts,
    date: "2023-10-03",
    className: "portrait",
  },
  {
    title: "Moody",
    alt: "A cloud surrounding a mountain",
    src: shannonLake,
    date: "20218-08-12",
    className: "portrait"
  },
  {
    title: "Tempo",
    alt: "A golfer in the middle of a swing, with a picturesque background",
    src: pullback,
    date: "2022-07-17",
    className: "portrait",
  },
  {
    title: "Golden Hour",
    alt: "The sun poking through a forest",
    src: goldenHour,
    date: "2022-04-08",
    className: "portrait",
  },
  {
    title: "Oakanagan",
    alt: "A breathtaking view from a golf course set in the mountains",
    src: theRise,
    date: "2024-02-08",
    className: "portrait",
  },
  {
    title: "C o l o r s",
    alt: "Golf shoes, towel, push cart",
    src: colors,
    date: "2022-09-03",
    className: "portrait",
  },
  {
    title: "Push Cart Mafia",
    alt: "A group of golfers walking with push carts",
    src: pushCartMafia,
    date: "2022-08-16",
    className: "portrait",
  },
  {
    title: "Darts",
    alt: "A range finder",
    src: darts,
    className: "portrait"
  },
  {
    title: "Good Good",
    alt: "Two golfers walk their pushcarts down a fairway",
    src: gambleSands,
    date: "2023-10-02",
    className: "landscape",
  },
  {
    title: "Spring Melt",
    alt: "A golf ball in front of a mountain",
    src: fernie,
    date: "2016-07-16",
    className: "portrait",
  },
  {
    title: "Dev Priorities",
    alt: "A screenshot of a Slack channel",
    src: uberflip,
    date: "2022-08-09",
    className: "portrait",
  },
];

export default images;
