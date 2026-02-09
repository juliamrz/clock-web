// External deps
import { useEffect, useRef, useState, useMemo } from 'react';
import type { ReactNode, KeyboardEvent } from 'react';
import clsx from 'clsx';
import type { FieldOptionType } from '@s-chat/form-manager';

// Internal deps
import ListItem from '@/components/ui/ListItem';
import ArrowIcon from '@/components/ui/Icons/ArrowIcon';

// Local deps
import './Select.css';

interface SelectProps {
  name: string;
  isOpen?: boolean;
  value: FieldOptionType["value"];
  options: FieldOptionType[];
  placeholder?: string;
  onChange: (newValue: FieldOptionType["value"]) => void;
  renderInput?: (props: { toggleList: () => void }) => ReactNode;
}

const Select = (props: SelectProps) => {
  const {
    name,
    isOpen = false,
    value,
    options,
    onChange,
    placeholder = "Select...",
    renderInput,
  } = props;

  const [ isSelectListOpen, setIsSelectListOpen ] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedOption = useMemo(() => {
    return options.find(item => item.value === value)
  }, [options, value])

  const onSelectItemClickHandler = (item: FieldOptionType) => {
    console.debug('debug item: =======', item);
    onChange(item.value);
    setIsSelectListOpen(false);
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!isSelectListOpen && !isOpen) {
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightedIndex((prev) => Math.min(prev + 1, options.length - 1));
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    }

    if (event.key === 'Enter' && highlightedIndex >= 0) {
      event.preventDefault();
      onSelectItemClickHandler(options[highlightedIndex]);
    }

    if (event.key === 'Escape') {
      setIsSelectListOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setIsSelectListOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      tabIndex={0}
      ref={wrapperRef}
      onKeyDown={handleKeyDown}
      className={clsx("select")}
    >
      {renderInput
        ? renderInput({ toggleList: () => setIsSelectListOpen(prev => !prev) })
        : (
          <div className={clsx("select__input")} onClick={() => setIsSelectListOpen((prev) => !prev)}>
            {selectedOption?.label || placeholder}
            <ArrowIcon rotated={isSelectListOpen} />
          </div>
        )
      }
      <input
        type="hidden"
        name={name}
        value={value}
      />
      {(isSelectListOpen || isOpen) && options.length > 0 && (
        <ul ref={listRef} className={clsx("select__list")}>
          {options.map((item, index) => (
            <ListItem
              key={item.value}
              label={item.label}
              isSelected={item.value === value}
              isHighlighted={index === highlightedIndex}
              onClick={() => onSelectItemClickHandler(item)}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select;
