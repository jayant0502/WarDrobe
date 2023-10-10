import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import requireContext from "require-context.macro";

const AutoPlaySlider = () => {
  const imagesContext = requireContext(
    "../../assets/sliderImages",
    false,
    /\.(png|jpe?g|gif|svg)$/
  );
  const imageFilenames = imagesContext.keys();
  return (
    <Carousel
      autoPlay
      infiniteLoop

      interval={3000}
      showArrows
        showThumbs={false}
        emulateTouch
        selectedItem={0} // Adjust the initially selected item
        transitionTime={1300} // Adjust transition time
        showStatus={false}
        useKeyboardArrows
        dynamicHeight
        stopOnHover

    >
      {imageFilenames.map((filename, index) => (
        <span key={index} >
          <img src={imagesContext(filename)} alt={`Image ${index}`} style={{maxHeight:"150px", width:"150px"}} />
        </span>
      ))}
     
    
    </Carousel>
  );
};

export default AutoPlaySlider;
