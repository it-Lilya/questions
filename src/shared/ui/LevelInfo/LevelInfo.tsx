import type { Question } from '../../../entities/question/types/question';
import Dedicated from '../Dedicated/Dedicated';

import styles from './LevelInfo.module.scss';

interface LevelInfoProps {
  question: Question;
}

const LevelInfo = ({ question }: LevelInfoProps) => {
  return (
    <div className={styles.container_info}>
      <p className={styles.info}>
        Рейтинг: <Dedicated children={question.rate} classname={true} />
      </p>
      <p className={styles.info}>
        Сложность: <Dedicated children={question.complexity} classname={true} />
      </p>
    </div>
  );
};

export default LevelInfo;
