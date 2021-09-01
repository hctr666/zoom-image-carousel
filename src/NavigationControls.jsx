import React from "react";

const NavigationControls = ({
  activeIndex,
  totalItems,
  onPreviousClick,
  onNextClick
}) => {
  if (!totalItems) return null;

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === totalItems - 1;

  return (
    <div className="ProductCarousel__Navigation">
      {!isFirst && (
        <button
          className="ProductCarousel__Navigation__Button"
          onClick={onPreviousClick}
          type="button"
        >
          Prev
        </button>
      )}
      {!isLast && (
        <button
          className="ProductCarousel__Navigation__Button"
          onClick={onNextClick}
          type="button"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default NavigationControls;
