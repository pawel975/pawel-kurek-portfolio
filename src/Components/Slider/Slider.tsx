import { useEffect, useRef, useState } from "react";
import "../Slider/Slider.scss";
import {
  BiChevronLeft as ArrowLeft,
  BiChevronRight as ArrowRight,
} from "react-icons/bi";

interface SliderInterface {
  images: string[];
  liveVersionLink: string;
  isFadedBeforeHover: boolean;
}

const Slider = ({
  images,
  liveVersionLink,
  isFadedBeforeHover = true,
}: SliderInterface) => {
  let allImages = null;

  const areThereMultipleImages = images.length > 1;

  allImages = images.map((image) => (
    <img className="slider__app-image" src={image} alt="app screen shot" />
  ));

  const sliderRef = useRef<HTMLDivElement>(null);
  const btnLeft = useRef<HTMLButtonElement>(null);
  const btnRight = useRef<HTMLButtonElement>(null);

  const [sliderOffset, setSliderOffset] = useState(0);

  useEffect(() => {
    // Disables button if slider tries to get out of its range
    const handleSliderDisable = (
      btnRef: React.MutableRefObject<HTMLButtonElement | null>,
      isDisabled: boolean
    ) => {
      if (btnRef.current) btnRef.current.disabled = isDisabled;
    };

    // Check if left button should be disabled
    handleSliderDisable(btnLeft, false);

    if (sliderOffset >= 0) {
      handleSliderDisable(btnLeft, true);
    }

    // Check if right button should be disabled
    handleSliderDisable(btnRight, false);
    if (sliderOffset <= -((images.length - 1) * 100)) {
      handleSliderDisable(btnRight, true);
    }

    if (sliderRef.current) sliderRef.current.style.left = `${sliderOffset}%`;
  }, [images.length, sliderOffset]);

  const handleRightMovement = () => {
    if (btnRight.current) if (btnRight.current.disabled) return;
    setSliderOffset(sliderOffset - 100);
  };

  const handleLeftMovement = () => {
    if (btnLeft.current) if (btnLeft.current.disabled) return;
    setSliderOffset(sliderOffset + 100);
  };

  return (
    <>
      <div
        className="slider__container"
        style={isFadedBeforeHover ? {} : { filter: "none" }}
      >
        <a href={liveVersionLink} target="_blank" rel="noreferrer">
          <div ref={sliderRef} className="slider__images-container">
            {allImages}
          </div>
        </a>

        <>
          <button
            ref={btnLeft}
            className="slider__move move-left"
            onClick={handleLeftMovement}
            style={{
              visibility: `${areThereMultipleImages ? "visible" : "hidden"}`,
            }}
          >
            <ArrowLeft />
          </button>

          <button
            ref={btnRight}
            className="slider__move move-right"
            onClick={handleRightMovement}
            style={{
              visibility: `${areThereMultipleImages ? "visible" : "hidden"}`,
            }}
          >
            <ArrowRight />
          </button>
        </>
      </div>
    </>
  );
};

export default Slider;
