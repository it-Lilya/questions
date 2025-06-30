import type { ReactNode } from 'react';

import styles from './Dedicated.module.scss';

interface DedicatedProps {
  children?: ReactNode; 
  classname?: boolean;
}

const Dedicated = ({ children, classname }: DedicatedProps) => {
  return <span className={`${styles.span} ${classname ? styles.classname : {}}`}>{children}</span>
}

export default Dedicated;