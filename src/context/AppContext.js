import { createContext, useState } from "react";
import carouselImg1 from "../assets/CarouselImage1.webp";
import carouselImg2 from "../assets/CarouselImage2.webp";
import carouselImg3 from "../assets/CarouselImage3.png";

// Here creating the context
const AppContext = createContext();

function AppContextProvider({ children }) {
  const [images, setImage] = useState(0);
  const [isFirstRender, setFirstRender] = useState(true);
  const [isHover, setIsHover] = useState(false);
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

  // Here we are creating the context value
  const value = {
    images,
    setImage,
    previousImage,
    nextImage,
    currentImg,
    isFirstRender,
    setFirstRender,
    isHover,
    setIsHover,
  };

  // Here we are providing the context to the children components
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContextProvider };
export default AppContext;
