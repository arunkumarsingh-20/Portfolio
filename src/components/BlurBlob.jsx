import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position, size, color = "bg-purple-500", opacity = "opacity-20" }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="pointer-events-none absolute -z-10"
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
      aria-hidden="true"
    >
      <div
        className={`h-full w-full rounded-full blur-3xl ${color} ${opacity}`}
      />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string,
  opacity: PropTypes.string,
};

export default BlurBlob;
