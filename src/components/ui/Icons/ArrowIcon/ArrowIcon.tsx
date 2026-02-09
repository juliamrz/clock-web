import React from "react";

type ArrowIconProps = React.SVGProps<SVGSVGElement> & {
  rotated?: boolean;
};

const ArrowIcon: React.FC<ArrowIconProps> = (props) => {
  const {
    rotated,
    ...svgProps
  } = props;

  return (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: rotated ? 'rotate(180deg)' : undefined,
      }}
      {...svgProps}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
