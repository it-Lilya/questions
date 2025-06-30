import { useState } from 'react';
import styles from './FilterBase.module.scss';
import Button from '../Button/Button';

type OnChangeType = ((value: string) => void) | ((value: number) => void);

type DataProps = {
  id?: number;
  title: string;
  imageSrc?: string | null;
}

interface FilterBaseProps {
  id?: number;
  title: string;
  data?: DataProps[];
  link?: boolean;
  onChange?: OnChangeType;
  iconShow?: boolean;
  children?: React.ReactNode;
}

const FilterBase = ({
  title,
  data,
  link = false,
  onChange,
  iconShow,
  children,
}: FilterBaseProps) => {
  const [expanded, setExpanded] = useState(false);
  const [text, setText] = useState('Посмотреть все');

   function opens() {
    setExpanded((prev) => {
      const newState = !prev;
      setText(newState ? 'Скрыть' : 'Посмотреть все');
      return newState;
    });
  }
  function handleChange(el: DataProps) {
    if (title === 'Уровень сложности') {
       onChange!(el.title as never)
    } else {
      onChange!(el.id as never);
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{title}</h3>
      <ul className={`${styles.btn_container} ${expanded ? styles.open : ''}`}>
        {data?.map((el) => (
          <li key={el.id}>
            <Button
              children={el.title}
              icon={iconShow && el.imageSrc ? el.imageSrc : undefined} 
              onClick={() => handleChange(el)}
            />
          </li>
        ))}
      </ul>
       {link && (
        <button className={styles.open_btn} type='button' onClick={opens}>
          {text}
        </button>
      )}
      {children}
    </div>
  )
}

export default FilterBase;