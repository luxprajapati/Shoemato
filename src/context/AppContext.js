import { createContext, useEffect, useState } from "react";
import carouselImg1 from "../assets/CarouselImage1.webp";
import carouselImg2 from "../assets/CarouselImage2.webp";
import carouselImg3 from "../assets/CarouselImage3.png";
import trendImg from "../assets/trendingImage.jpg";

// Here creating the context
const AppContext = createContext();

function AppContextProvider({ children }) {
  const [images, setImage] = useState(0);
  const [isFirstRender, setFirstRender] = useState(true);
  const [showProductList, setShowProductList] = useState(false);
  const [productCard, setProductCard] = useState(false);
  const [offerTime, setOfferTime] = useState("");

  const trendingImg = trendImg;

  // Here we are creating the imgArr
  const imgArr = [`${carouselImg1}`, `${carouselImg2}`, `${carouselImg3}`];
  const currentImg = imgArr[images]; // Here we are creating the currentImg function
  // Here we are creating the imgArr
  // Here we are creating the previousImage function
  const previousImage = () => {
    if (images === 0) {
      setImage(imgArr.length - 1);
    } else {
      setImage(images - 1);
    }
  };
  // Here we are creating the nextImage function
  const nextImage = () => {
    if (images === imgArr.length - 1) {
      setImage(0);
    } else {
      setImage(images + 1);
    }
  };

  // // Here we are creating the countdown timer
  useEffect(() => {
    const countDownDate = new Date(
      Date.now() + 4 * 24 * 60 * 60 * 1000
    ).getTime(); // Get the current time + 4 days

    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime(); // Get the current time
      const difference = countDownDate - currentTime; // Get the difference between the current time and the countdown time

      const days = Math.floor(difference / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setOfferTime(`${days}d :${hours}h :${minutes}m :${seconds}s`);
      if (difference < 0) {
        clearInterval(intervalId);
        setOfferTime("Expired");
      }
    }, 1000);
  }, []);

  // Here we are creating the context value
  const value = {
    images,
    setImage,
    previousImage,
    nextImage,
    currentImg,
    isFirstRender,
    setFirstRender,
    showProductList,
    setShowProductList,
    offerTime,
    productCard,
    setProductCard,
    trendingImg,
  };

  // Here we are providing the context to the children components
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContextProvider };
export default AppContext;
