import React from 'react';
import IconArrowRight from '../../icons/IconArrowRight';
import IconArrowLeft from '../../icons/IconArrowLeft';

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
    <div className="ImageCarousel__Navigation">
      {!isFirst && (
        <button
          className="ImageCarousel__Navigation__Button ImageCarousel__Navigation__ButtonPrev"
          onClick={onPreviousClick}
          type="button"
          aria-label="Go to previous item"
        >
          <IconArrowLeft />
        </button>
      )}
      {!isLast && (
        <button
          className="ImageCarousel__Navigation__Button ImageCarousel__Navigation__ButtonNext"
          onClick={onNextClick}
          type="button"
          aria-label="Go to next item"
        >
          <IconArrowRight />
        </button>
      )}
    </div>
  );
};

export default NavigationControls;
