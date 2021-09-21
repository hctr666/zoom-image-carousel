import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item/Item';
import NavigationControls from './NavigationControls/NavigationControls';
import { useGlobalContext } from '../Context';

function ImageCarousel({ data, size }) {
  const { state, dispatch } = useGlobalContext();
  const { currentIndex } = state;

  const handleNextButtonClick = () => {
    dispatch({ type: 'INCREMENT_CURRENT_INDEX' });
  };

  const handlePrevButtonClick = () => {
    dispatch({ type: 'DECREMENT_CURRENT_INDEX' });
  };

  return (
    <div className="ImageCarousel" style={{ width: size }}>
      <div className="ImageCarousel__Mask">
        <div className="ImageCarousel__Wrapper">
          <Item
            id={data[currentIndex]}
            size={size}
            imageProps={{
              src: data[currentIndex].main,
              zoomSrc: data[currentIndex].zoom,
              alt: data[currentIndex].alt
            }}
          />
        </div>
        <NavigationControls
          activeIndex={currentIndex}
          totalItems={data.length}
          onPreviousClick={handlePrevButtonClick}
          onNextClick={handleNextButtonClick}
        />
      </div>
    </div>
  );
}

ImageCarousel.propTypes = {
  data: PropTypes.arrayOf({
    main: PropTypes.string,
    zoom: PropTypes.string,
    alt: PropTypes.string
  }).isRequired,
  size: PropTypes.number.isRequired
};

export default ImageCarousel;
