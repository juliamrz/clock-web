import React from "react";

type MenuIconProps = React.SVGProps<SVGSVGElement> & {
  isOpen?: boolean;
};

const MenuIcon = (props: MenuIconProps) => {
  const {
    isOpen = false,
  } = props;

  return (
    <svg
      width="40"
      height="32"
      viewBox="0 0 26 20"
      fill="none"
      style={{
        transform: isOpen ? 'translateX(0)' : 'translateX(-6px)',
        transition: 'transform 200ms ease',
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.5 10L23.5 10" stroke="#cccccc" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.5 5H23.5" stroke="#cccccc" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.5 15H23.5" stroke="#cccccc" stroke-linecap="round" stroke-linejoin="round"/>
      {isOpen && (
        <path d="M5.5 6.5L2 10L5.5 13.5" stroke="#cccccc" stroke-linecap="round" stroke-linejoin="round"/>
      )}
    </svg>
  );
};

export default MenuIcon;
