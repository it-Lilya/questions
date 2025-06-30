import type { Question } from '../../../entities/question/types/question';
import type { Skill } from '../../../entities/skill/types/skill';
import Button from '../Button/Button';

import styles from './Level.module.scss';

interface LevelProps {
  title: string;
  children?: (Skill | Question | string)[];
  props?: React.ReactNode;
}

const Level = ({ title, children, props }: LevelProps) => {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      {props}
      <ul className={styles.skills_container}>
        {children?.map((el, i) => {
          if (typeof el === 'string') {
            return <li key={i} className={styles.keywords}>{`#${el}`}</li>;
          } else {
            return (
              <li key={el.id} className={styles.btn}>
                <Button children={el.title} icon={el.imageSrc ? el.imageSrc : undefined} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Level;
