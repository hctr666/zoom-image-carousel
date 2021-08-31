import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const styles = {
  wrapper: {
    position: "relative",
    overflow: "hidden"
  },
  zoomImgWrapper: {
    position: "absolute",
    top: 0,
    left: 0
  }
};

const useElementPosition = (element) => {
  const [position, setPosition] = useState({});

  useEffect(() => {
    if (element) {
      const { x, y } = element.getBoundingClientRect();
      setPosition({ x, y });
    }
  }, [element]);

  return position;
};

const useTransform = ({ mouseX, mouseY }) => {
  const [transform, setTransform] = useState("matrix(1, 0, 0, 1, 0, 0)");

  useEffect(() => {
    setTransform(`matrix(1, 0, 0, 1, ${-mouseX - 1}, ${-mouseY - 1})`);
  }, [mouseX, mouseY]);

  return transform;
};

const ProductImage = ({
  src,
  zoomSrc,
  zoomEnabled,
  classNames,
  ...imgProps
}) => {
  const [isZoomActive, setIsZoomActive] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const transform = useTransform({ mouseX, mouseY });

  const wrapperRef = useRef(null);
  const wrapperPos = useElementPosition(wrapperRef.current);

  const currentMousePosition = (e) => {
    let x = e.clientX - wrapperPos.x;
    let y = e.clientY - wrapperPos.y;

    x = Math.max(x, x < 0 ? 0 : x);
    y = Math.max(y, y < 0 ? 0 : y);

    return { x, y };
  };

  const handleImageMouseEnter = (e) => {
    const { x, y } = currentMousePosition(e);
    setMouseX(x);
    setMouseY(y);
    setIsZoomActive(true);
  };

  const handleImageMouseLeave = () => {
    setIsZoomActive(false);
  };

  const handleImageMouseMove = (e) => {
    const { x, y } = currentMousePosition(e);
    setMouseX(x);
    setMouseY(y);
  };

  const getZoomMouseEventProps = () => {
    if (!zoomEnabled) return {};
    return {
      onMouseMove: handleImageMouseMove,
      onMouseLeave: handleImageMouseLeave,
      onMouseEnter: handleImageMouseEnter
    };
  };

  return (
    <div
      ref={wrapperRef}
      style={{
        ...styles.wrapper,
        height: imgProps.height,
        width: imgProps.width
      }}
      {...getZoomMouseEventProps()}
    >
      <img src={src} alt={imgProps.alt} {...imgProps} />
      {zoomEnabled && isZoomActive && (
        <div style={styles.zoomImgWrapper}>
          <img
            alt={imgProps.alt}
            width={imgProps.width * 2}
            height={imgProps.height * 2}
            style={{ transform }}
            src={zoomSrc}
          />
        </div>
      )}
    </div>
  );
};

ProductImage.defaultProps = {
  alt: "Product image",
  zoomEnabled: true
};

ProductImage.propTypes = {
  src: PropTypes.string.isRequired,
  zoomSrc: PropTypes.string,
  zoomEnabled: PropTypes.bool,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default ProductImage;
