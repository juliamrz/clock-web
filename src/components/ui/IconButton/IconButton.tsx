import type {ReactNode} from "react";
import clsx from "clsx";
import './IconButton.css';

interface IconButtonProps {
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const IconButton = (props: IconButtonProps) => {
  const {
    icon,
    className,
    onClick,
  } = props;

  return (
    <button
      className={clsx("IconButton", className)}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export default IconButton;
