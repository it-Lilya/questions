import { useState, type ReactNode } from "react";

import styles from './Accordion.module.scss';

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion = ({ title = 'Text', children }: AccordionProps) => {
  const [ open, setOpen ] = useState(false);

  return (
    <div className={`${styles.accordion} ${open && styles.open}`}>
      <div className={styles.head}>
        <button className={styles.btn} onClick={() => setOpen(prev => !prev)}>
          {title}
          <img alt='accordion'></img>
        </button>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
  
}

export default Accordion;