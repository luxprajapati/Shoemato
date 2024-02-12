import React, { useContext, useEffect, useState } from "react";
// import nikeImg from "../assets/nike-just-do-it.png";
import CustomeBtn from "./CustomeBtn";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import AppContext from "../context/AppContext";
import "./HomeSec1.css";

const HomeSec1 = () => {
  const {
    nextImage,
    previousImage,
    currentImg,
    isFirstRender,
    setFirstRender,
  } = useContext(AppContext);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // console.log("currentImg", currentImg);
    const imageElement = document.getElementById("imgAnimation");
    if (imageElement) {
      // remove the class before adding it again
      imageElement.classList.remove("image-animation");
      // using setTimeout to allow for repaint, which is necessary for the animation to trigger again
      setTimeout(() => {
        imageElement.classList.add("image-animation");
      }, 0);
    }

    const tagLineElement = document.getElementById("tagLineSec");
    if (tagLineElement) {
      tagLineElement.classList.remove("bouncing-animation");
      setTimeout(
        () => {
          tagLineElement.classList.add("bouncing-animation");
        },
        isFirstRender ? 1100 : 0
      );
    }
    setFirstRender(false);
  }, [currentImg]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="flex relative justify-center items-center"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <button
        id="slideLeftBtn"
        onClick={() => {
          previousImage();
        }}
        className={`absolute z-30 bg-white rounded-full hover:bg-orange-500 hover:text-white hover:transition-all duration-500 ease-in-out ${showButtons ? "opacity-100 leftBtnAnimation initialPositionleft" : "opacity-0 initialPositionleft"} xl:block lg:block md:block sm:hidden hidden`}
      >
        <CiCircleChevLeft className="text-4xl"></CiCircleChevLeft>
      </button>

      <div className="relative w-full xl:h-[100%] lg:h-[100%] md:h-[60vh] sm:h-[55vh] h-[50vh] overflow-hidden carouselSection">
        <div className="absolute inset-0 z-20 bg-black bg-opacity-60"></div>
        <img
          id="imgAnimation"
          className="object-cover w-full h-full overflow-hidden"
          src={`${currentImg}`}
          alt="Img"
        ></img>
      </div>

      <div
        style={{ scale: "1" }}
        id="tagLineSec"
        className="flex flex-col justify-center mx-auto items-center absolute text-white z-20 select-none bouncing-animation border-purple-700 xl:w-[60vw] lg:w-[60vw] md:w-[60vw] sm:w-[60vw] w-[50vw] h-auto xl:scale-100 lg:scale-100 md:scale-100"
      >
        <div className="text-white flex justify-center items-center mx-auto w-full text-center">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl  text-xl font-jost font-bold tracking-widest">
            FitTry!Perfect Fit Eveytime.
          </h2>
        </div>
        <div className="flex justify-center items-center mx-auto w-full text-center">
          <h4 className="xl:text-xl lg:text-lg md:text-sm text-[10px] flex flex-wrap tracking-wide font-semibold font-jost mx-auto my-6">
            Let Revolutionize Your Style with FitTry
          </h4>
        </div>
        <div className="flex justify-center items-center mx-auto w-full text-center">
          <CustomeBtn></CustomeBtn>
        </div>
      </div>

      <button
        onClick={() => {
          nextImage();
        }}
        className={`absolute z-30 right-20 bg-white rounded-full hover:bg-orange-500 hover:text-white hover:transition-all duration-500 ease-in-out ${showButtons ? "opacity-100 rightBtnAnimation initialPositionRight" : "opacity-0 initialPositionRight"} xl:block lg:block md:block sm:hidden hidden `}
      >
        <CiCircleChevRight className="text-4xl"></CiCircleChevRight>
      </button>
    </div>
  );
};

export default HomeSec1;
