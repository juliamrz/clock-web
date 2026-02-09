// External deps
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

// Local deps
import './Card.css';

interface CardProps {
  onClick?: () => void;
  className?: string;
}

const Card = (props: PropsWithChildren<CardProps>) => {
  const {
    children,
    onClick,
    className,
  } = props;

  return (
    <article className={clsx("CardContainer", className)} onClick={onClick}>
      {children}
    </article>
  )
}

export default Card;
