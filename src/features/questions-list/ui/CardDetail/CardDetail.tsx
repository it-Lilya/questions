import type { Question } from "../../../../entities/question/types/question";

import Answer from "../../../../shared/ui/Answer/Answer";
import HeadCards from "../../../../shared/ui/HeadCards/HeadCards";

import { Logo } from "../../../../shared/assets";
import styles from './CardDetail.module.scss';

interface CardDetailProps {
  classname: string;
  question: Question;
	onButtonClick: () => void;
}

const CardDetail = ({ classname, question, onButtonClick }: CardDetailProps) => {
  if (question) {
  return (
      <div className={styles.card_container}>
      <div className={`${classname} ${styles.main_header}`}>
        <img src={Logo} className={styles.logo}></img>
        <div className={styles.head_container}>
          <HeadCards title={question.title} btn={true} onButtonClick={onButtonClick} />
        <p className={styles.description}>{question.description}</p>
        </div>
      </div>
      <Answer title='Краткий ответ' children={question.shortAnswer} />
      <Answer title='Развёрнутый ответ' children={question.longAnswer} />
      </div>
    )
  }
}

export default CardDetail;