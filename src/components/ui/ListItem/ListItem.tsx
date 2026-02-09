// `External deps
import clsx from 'clsx';
import type {FieldOptionType} from '@s-chat/form-manager';

// Local deps
import './ListItem.css';

interface ListItemProps {
  label: FieldOptionType['label'];
  isSelected: boolean;
  isHighlighted: boolean;
  onClick: () => void;
}

const ListItem = (props: ListItemProps) => {
  const {
    label,
    isSelected,
    isHighlighted,
    onClick,
  } = props;

  return (
    <li
      onClick={onClick}
      className={clsx("listItem", {
        "listItem--active": isSelected,
        "listItem--highlighted": isHighlighted,
      })}
    >
      <span>{label}</span>
    </li>
  );
}

export default ListItem;
