import type { MouseEventHandler } from 'react';
import styles from './CloseBtn.module.scss';

interface CloseBtnProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}
const CloseBtn = ({ onClick}: CloseBtnProps ) => {
  return <button className={styles.close} onClick={onClick}></button>
}

export default CloseBtn;