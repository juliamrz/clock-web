import type {ReactNode} from "react";
import './CardListItem.css';

interface CardListItemProps {
  label: string;
  title?: ReactNode;
}

const CardListItem = (props: CardListItemProps) => {
  const {
    label,
    title,
  } = props;

  return (
    <div className="CardListItem">
      <span className="CardListItem__label">{label}</span>
      {title && (
        <span className="CardListItem__title">{title}</span>
      )}
    </div>
  )
}

export default CardListItem;
