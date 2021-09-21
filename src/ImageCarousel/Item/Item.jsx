import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const styles = {
  wrapper: {
    position: 'relative',
    overflow: 'hidden'
  },
  zoomImgWrapper: {
    position: 'absolute',
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
  const [transform, setTransform] = useState('matrix(1, 0, 0, 1, 0, 0)');

  useEffect(() => {
    setTransform(`matrix(1, 0, 0, 1, ${-mouseX - 1}, ${-mouseY - 1})`);
  }, [mouseX, mouseY]);

  return transform;
};

const Item = ({ imageProps, zoomEnabled, size }) => {
  const { src, zoomSrc, alt } = imageProps;

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
    if (!isZoomActive) {
      setIsZoomActive(true);
    }
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
        height: size,
        width: size
      }}
      {...getZoomMouseEventProps()}
    >
      <img src={src} alt={alt} width={size} height={size} />
      {zoomEnabled && isZoomActive && (
        <div style={styles.zoomImgWrapper}>
          <img
            alt={alt}
            width={size * 2}
            height={size * 2}
            style={{ transform }}
            src={zoomSrc}
          />
        </div>
      )}
    </div>
  );
};

Item.defaultProps = {
  imageProps: {
    alt: 'Product image'
  },
  zoomEnabled: true
};

Item.propTypes = {
  zoomEnabled: PropTypes.bool,
  size: PropTypes.number.isRequired,
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    zoomSrc: PropTypes.string,
    alt: PropTypes.string
  })
};

export default Item;
