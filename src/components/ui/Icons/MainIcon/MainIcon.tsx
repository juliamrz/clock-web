import React from "react";

type MainIconProps = React.SVGProps<SVGSVGElement>;

const MainIcon: React.FC<MainIconProps> = (props) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={true}
      {...props}
    >
      <path
        d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
        stroke="#8A8F9B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MainIcon;
