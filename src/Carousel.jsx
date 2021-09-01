import React, { useState } from "react";

import Image from "./Image/Image";
import NavigationControls from "./NavigationControls";
import ThumbnailNavigator from "./ThumbnailNavigator";

import { createImageUrl } from "./helpers";

function ProductCarousel(props) {
  const { products, size } = props;
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
    <div className="ProductCarousel">
      <div className="ProductCarousel__Mask">
        <div className="ProductCarousel__Wrapper">
          <Image
            id={products[activeIdx]}
            src={createImageUrl({
              width: size,
              height: size,
              lock: products[activeIdx]
            })}
            zoomSrc={createImageUrl({
              width: size * 2,
              height: size * 2,
              lock: products[activeIdx]
            })}
            width={size}
            height={size}
          />
        </div>
        <NavigationControls
          activeIndex={activeIdx}
          totalItems={products.length}
          onPreviousClick={handlePrevButtonClick}
          onNextClick={handleNextButtonClick}
        />
        <ThumbnailNavigator
          items={products}
          activeIndex={activeIdx}
          onChange={handleThumbnailChange}
        />
      </div>
    </div>
  );
}

export default ProductCarousel;
