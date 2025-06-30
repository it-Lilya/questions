import type { MouseEventHandler } from "react";

import type { Question } from "../../../entities/question/types/question";

import CloseBtn from "../../../shared/ui/CloseBtn/CloseBtn";
import LevelInfo from "../../../shared/ui/LevelInfo/LevelInfo";
import Level from "../../../shared/ui/Level/Level";

import styles from './MapSummary.module.scss';

interface MapSummaryProps {
  closeFilter: MouseEventHandler<HTMLButtonElement>;
  data: Question;
}

const MapSummary = ({ closeFilter, data }: MapSummaryProps) => {
  return (
    <div className={styles.info_container}>
      <CloseBtn onClick={closeFilter} />
      <Level title='Уровень:' props={<LevelInfo question={data} />} />
      <Level title='Навыки:' children={data.questionSkills} />
      <Level title='Ключевые слова:' children={data.keywords} />
     <div className={styles.author}>
        <p>Автор: <span>{data.createdBy?.username}</span></p>
     </div>
    </div>
  )
}

export default MapSummary;