import { useEffect, useState } from "react";

import { useGetQuestionByIdQuery, useGetQuestionsListQuery } from "../../../entities/question/api/questionsApi";

import useRemoveQuestionsParams from "../../../shared/hooks/useRemoveQuestionsParams";

import AllQuestionsList from "../../../features/questions-list/ui/QuestionsList/QuestionsList";
import MapSummary from "../../../features/map-summary/ui/MapSummary";
import Filter from "../../../features/filter/ul/Filter";
import Pagination from "../../../shared/ui/Pagination/Pagination";
import ContentTransition from "../../../shared/ui/ContentTransition/ContentTransition";

import styles from './QuestionPage.module.scss';
import CardDetail from "../../../features/questions-list/ui/CardDetail/CardDetail";
import Loader from "../../../shared/ui/Loader/Loader";
import Error from "../../../shared/ui/Error/Error";

interface ParamsProps {
  skills: number[];
  rate: number[];
  keywords: string[];
  specialization: number | null;
  complexity: number[];
}

const QuestionsPage = () => {
  const [page, setPage] = useState<number>(1);
  const [idCard, setIdCard] = useState<number | null>(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [flag, setFlag] = useState<boolean>(false);

  const [params, setParameters] = useState<ParamsProps>({
    skills: [],
    rate: [],
    keywords: [],
    specialization: null,
    complexity: [],
  });

  const newParams = useRemoveQuestionsParams(params);
  
  const { data: questions, error: errorList, isLoading: questionsLoad } = useGetQuestionsListQuery({ 
    page: page,
    ...newParams
  });

  const { data: question, isLoading: loadCard} = useGetQuestionByIdQuery({ id: idCard! });

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => setFlag(windowSize < 1440), [windowSize]);

  if (questionsLoad || loadCard) return <Loader />;
  if (errorList) return <Error />;

  const handleBackClick = () => {
    setIdCard(null);
    setIsOpen(false);
  };

  function transitionCard(id: number) {
    setIdCard(id);
    setIsOpen(true);
  }

  const handleButtonClick = () => {
    setFlag(false)
  };

  function closeFilter() {
    setFlag(true)
  }

  if (questions) {
    return (
      <div className={styles.main}>
        {isOpen && (
          <button
            type="button"
            className={styles.close}
            onClick={handleBackClick}
          >
            <span className={styles.icon_prev}></span>
            Назад
          </button>
        )}
        <div className={styles.main_container}>
          {!isOpen ? (
            <div className={styles.container}>
              <ContentTransition keyProp={page}>
                <AllQuestionsList
                  questions={questions.data}
                  transitionCard={transitionCard}
                  onButtonClick={handleButtonClick}
                />
                <Pagination
                  page={page}
                  setPage={setPage}
                  totalPage={questions.total}
                />
              </ContentTransition>
            </div>
          ) : (
            question && (
              <CardDetail
                classname={styles.container}
                question={question}
                onButtonClick={handleButtonClick}
              />
            )
          )}
          <div className={`${styles.right} ${flag ? styles.hidden : ""}`}>
            {!isOpen ? (
              <Filter setParameters={setParameters} closeFilter={closeFilter} />
            ) : (
              <MapSummary closeFilter={closeFilter} data={question!} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionsPage;