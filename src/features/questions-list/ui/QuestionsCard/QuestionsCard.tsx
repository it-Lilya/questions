import { useState } from "react";

import type { Question } from "../../../../entities/question/types/question";

import Arrow from "../../../../shared/ui/Arrow/Arrow";
import LevelInfo from "../../../../shared/ui/LevelInfo/LevelInfo";

import Loader from "../../../../shared/ui/Loader/Loader";

import styles from './QuestionsCard.module.scss';

interface QuestionsCardProps {
  question: Question;
  transitionCard?: (id: number) => void;
  loadCard?: boolean;
}

const QuestionsCard = ({ question, transitionCard, loadCard }: QuestionsCardProps) => {

const [isOpen, setIsOpen] = useState(false);

  if (loadCard) {
    return <Loader />;
  }
  
  if (question) {
  return (
    <div className={styles.container}>
      <div
        className={styles.header_container}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2 className={styles.title}>{question.title}</h2>
        <button
          type="button"
          className={`${styles.toggle} ${isOpen ? styles.open : ""}`}
        ></button>
      </div>

      {isOpen && (
        <div className={styles.show_container}>
          <LevelInfo question={question} />
          <div className={styles.description_container}>
            {question.code && (
              <pre className={styles.code}>
                <code
                  dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
                />
              </pre>
            )}
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
            />
          </div>
          <Arrow
            className={styles.arrow}
            children="Подробнее"
            onClick={() => transitionCard!(question.id)}
          />
        </div>
      )}
    </div>
  );
}

}

export default QuestionsCard;