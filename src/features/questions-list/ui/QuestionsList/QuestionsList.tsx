import type { Question } from "../../../../entities/question/types/question";

import QuestionsCard from "../QuestionsCard/QuestionsCard";
import HeadCards from "../../../../shared/ui/HeadCards/HeadCards";

import styles from './QuestionsList.module.scss';

interface QuestionsListProps {
	questions: Question[];
	transitionCard: (id: number) => void;
	onButtonClick: () => void;
}

const QuestionsList = ({
	questions,
	transitionCard,
	onButtonClick
}: QuestionsListProps) => {
	const questionsList = questions || [];

  return (
    <div className={styles.header}>
			<HeadCards title='Вопросы React, JavaScript' onButtonClick={onButtonClick} btn={true} />
		<ul>
			{questionsList.map((question) => (
				<li key={question.id}>
					<QuestionsCard question={question} transitionCard={transitionCard} />
				</li>
			))}
		</ul>
		</div>
  )
}

export default QuestionsList;