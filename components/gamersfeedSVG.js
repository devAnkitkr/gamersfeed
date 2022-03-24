import * as React from 'react';

const GamersFeedSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={180}
    height={43}
    viewBox="0 0 1305 284"
    {...props}
  >
    <image
      y={38}
      width={1305}
      height={207}
      xlinkHref="data:img/png;base64,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"
    />
  </svg>
);

export default GamersFeedSvg;
