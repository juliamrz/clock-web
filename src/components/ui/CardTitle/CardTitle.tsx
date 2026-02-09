// External deps
import type {ReactNode} from 'react';
import clsx from 'clsx';

// Local deps
import './CardTitle.css';

interface CardTitleProps {
  title: string;
  icon?: ReactNode;
}

const CardTitle = (props: CardTitleProps) => {
  const {
    title,
    icon,
  } = props;

  return (
    <div className={clsx('CardTitle')}>
      {icon ? icon : null}
      <span className={clsx('CardTitle__title')}>{title}</span>
    </div>
  )
}

export default CardTitle;
