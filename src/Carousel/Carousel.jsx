import React, { useState } from "react";

import Image from "../Image/Image";
import NavigationControls from "../NavigationControls/NavigationControls";
import ThumbnailNavigator from "../ThumbnailNavigator/ThumbnailNavigator";

import { createImageUrl } from "../helpers";

function Carousel(props) {
  const { items, size } = props;
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNextButtonClick = () => {
    setActiveIdx((prevState) => prevState + 1);
  };

  const handlePrevButtonClick = () => {
    setActiveIdx((prevState) => prevState - 1);
  };

  const handleThumbnailChange = (idx) => {
    setActiveIdx(idx);
  };

  return (
    <div className="Carousel">
      <div className="Carousel__Mask">
        <div className="Carousel__Wrapper">
          <Image
            id={items[activeIdx]}
            src={createImageUrl({
              width: size,
              height: size,
              lock: items[activeIdx]
            })}
            zoomSrc={createImageUrl({
              width: size * 2,
              height: size * 2,
              lock: items[activeIdx]
            })}
            width={size}
            height={size}
          />
        </div>
        <NavigationControls
          activeIndex={activeIdx}
          totalItems={items.length}
          onPreviousClick={handlePrevButtonClick}
          onNextClick={handleNextButtonClick}
        />
        <ThumbnailNavigator
          items={items}
          activeIndex={activeIdx}
          onChange={handleThumbnailChange}
        />
      </div>
    </div>
  );
}

export default Carousel;
