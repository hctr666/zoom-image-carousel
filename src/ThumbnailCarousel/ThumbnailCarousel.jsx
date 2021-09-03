import React from 'react';

import { useGlobalContext } from '../Context';

import { classnames } from '../helpers';
import IconArrowDown from '../icons/IconArrowDown';
import IconArrowUp from '../icons/IconArrowUp';

const ThumbnailCarousel = ({ data, size }) => {
  const { state, dispatch } = useGlobalContext();
  const { currentIndex } = state;

  const getThumbnailClassname = (idx) =>
    classnames('ThumbnailCarousel__Thumbnail', {
      active: idx === currentIndex
    });

  const handleThumbnailClick = (index) => {
    dispatch({ type: 'SET_CURRENT_INDEX', currentIndex: index });
  };

  if (!data?.length) return null;

  return (
    <div
      style={{
        width: 85,
        height: size
      }}
      className="ThumbnailCarousel"
    >
      <button
        style={{
          position: 'absolute',
          top: 5,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 30,
          height: 30,
          backgroundColor: 'transparent',
          border: 0,
          borderRadius: 30
        }}
      >
        <IconArrowUp />
      </button>
      <div
        style={{
          top: 40,
          height: size - 80
        }}
        className="ThumbnailCarousel__ScrollContent"
      >
        <div className="ThumbnailCarousel__Wrapper">
          {data.length > 0 &&
            data.map(({ alt, thumbnail }, idx) => {
              return (
                <div
                  key={`thumbnail${idx}`}
                  tabIndex={0}
                  className={getThumbnailClassname(idx)}
                  onClick={() => handleThumbnailClick(idx)}
                  role="button"
                  height={85}
                >
                  <img
                    width={85}
                    height={85}
                    alt={alt}
                    src={thumbnail}
                    style={{
                      display: 'block'
                    }}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <button
        style={{
          position: 'absolute',
          bottom: 5,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 30,
          height: 30,
          backgroundColor: 'transparent',
          border: 0,
          borderRadius: 30
        }}
      >
        <IconArrowDown />
      </button>
    </div>
  );
};

export default ThumbnailCarousel;
