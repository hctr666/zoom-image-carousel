import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import ImageViewerCarousel from './ImageViewerCarousel';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <ImageViewerCarousel />
  </StrictMode>,
  rootElement
);
