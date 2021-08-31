import React from "react";
import PropTypes from "prop-types";

const ZoomImage = (props) => {
  const { src, zoomSrc, width, height } = props;

  return (
    <div
      ref={wrapperRef}
      className="ProductImage__Wrapper"
      style={getWrapperStyles()}
      onMouseMove={handleImageMouseMove}
      onMouseEnter={handleImageMouseEnter}
      onMouseLeave={handleImageMouseLeave}
    >
      <img
        className="ProductImage"
        alt="Some Alt"
        src={src}
        width={props.size}
        height={props.size}
        {...props}
      />
    </div>
  );
};

ZoomImage.propTypes = {
  src: PropTypes.string,
  zoomSrc: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default ZoomImage;
