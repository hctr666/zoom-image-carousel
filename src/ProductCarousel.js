import React, { useState } from "react";

import ProductImage from "./ProductImage/ProductImage";

const createImageUrl = ({ width, height, lock }) => {
  return `https://loremflickr.com/${width}/${height}?lock=${lock}`;
};

function ProductCarousel(props) {
  const { products, size } = props;
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNextButtonClick = () => {
    setActiveIdx((prevState) => prevState + 1);
  };

  const handlePrevButtonClick = () => {
    setActiveIdx((prevState) => prevState - 1);
  };

  const handleThumbnailClick = (idx) => {
    setActiveIdx(idx);
  };

  const isFirst = activeIdx === 0;
  const isLast = activeIdx === products.length - 1;

  const thumbnailClasses = (idx) => {
    let defaultClass = "ProductCarousel__Thumbnails__Thumbnail  ";

    if (idx === activeIdx) return `${defaultClass} active`;

    return defaultClass;
  };

  return (
    <div className="ProductCarousel">
      <div className="ProductCarousel__Mask">
        <div className="ProductCarousel__Wrapper">
          <ProductImage
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
        {products.length > 0 && (
          <div className="ProductCarousel__Navigation">
            {!isFirst && (
              <button
                className="ProductCarousel__Navigation__Button"
                onClick={handlePrevButtonClick}
                type="button"
              >
                Prev
              </button>
            )}
            {!isLast && (
              <button
                className="ProductCarousel__Navigation__Button"
                onClick={handleNextButtonClick}
                type="button"
              >
                Next
              </button>
            )}
          </div>
        )}
        <div className="ProductCarousel__Thumbnails">
          {products.length > 0 &&
            products.map((_, idx) => {
              return (
                <div
                  tabIndex={0}
                  className={thumbnailClasses(idx)}
                  onClick={() => handleThumbnailClick(idx)}
                  role="button"
                >
                  <img
                    alt=""
                    src={createImageUrl({
                      width: 80,
                      height: 80,
                      lock: products[idx]
                    })}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;
