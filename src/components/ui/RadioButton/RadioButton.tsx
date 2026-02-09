// External deps
import clsx from "clsx";

// Local deps
import './RadioButton.css';

interface RadioButtonProps {
  isSelected?: boolean;
}

const RadioButton = (props: RadioButtonProps) => {
  const { isSelected = false } = props;

  return (
    <div
      className={clsx(
        "RadioButton",
        isSelected && "RadioButton--selected",
        !isSelected && "RadioButton--unselected"
      )}
    >
      <span
        className={clsx(
          "RadioButton__circle",
          isSelected && "RadioButton__circle--active"
        )}
      />
    </div>
  );
};

export default RadioButton;
