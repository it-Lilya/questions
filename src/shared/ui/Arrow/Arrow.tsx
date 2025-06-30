import type { ReactNode, ButtonHTMLAttributes } from 'react';

import styles from './Arrow.module.scss';

interface ArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Arrow = ({
  children,
  onClick = () => {},
  disabled = false,
  className = '',
}: ArrowProps) => {
  return (
    <div className={styles.arrow_contain}>
      <button
        className={`${styles.btn} ${className}`}
        type='button'
        onClick={onClick}
        disabled={disabled}
      >
        {children}
        <span></span>
      </button>
    </div>
  );
};

export default Arrow;
