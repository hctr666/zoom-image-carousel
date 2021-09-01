import React from "react";

import { createImageUrl, classnames } from "../helpers";

const ThumbnailNavigator = ({ items, activeIndex, onChange }) => {
  if (!items?.length) return null;

  const getThumbnailClassname = (idx) =>
    classnames("Carousel__Thumbnails__Thumbnail", {
      active: idx === activeIndex
    });

  return (
    <div className="Carousel__Thumbnails">
      {items.length > 0 &&
        items.map((_, idx) => {
          return (
            <div
              tabIndex={0}
              className={getThumbnailClassname(idx)}
              onClick={() => onChange(idx)}
              role="button"
            >
              <img
                alt=""
                src={createImageUrl({
                  width: 80,
                  height: 80,
                  lock: items[idx]
                })}
              />
            </div>
          );
        })}
    </div>
  );
};

export default ThumbnailNavigator;
