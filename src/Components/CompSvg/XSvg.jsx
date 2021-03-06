import React, { memo } from "react";

// SVG path COPIED FROM YOUTUBE

const XSvg = ({ Theme }) => {
  return (
    <div className="ytb_svg_y">
      <svg className="ytb_svg_y__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            fill={Theme ? "#fff" : "#000"}
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default memo(XSvg);
