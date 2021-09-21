import React, { useReducer } from 'react';

import ImageCarousel from './ImageCarousel/ImageCarousel';
import ThumbnailCarousel from './ThumbnailCarousel/ThumbnailCarousel';
import { GlobalContext } from './Context';
import { reducer, initialState } from './reducer';
import imageSrcData from './data';

import './styles.css';

const carouselSize = 400;

const ImageViewerCarousel = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="ImageViewerCarousel">
        <ImageCarousel size={carouselSize} data={imageSrcData} />
        <ThumbnailCarousel data={imageSrcData} size={carouselSize} />
      </div>
    </GlobalContext.Provider>
  );
};

export default ImageViewerCarousel;
