import { useMemo } from "react";

interface QuestionParams {
  skills?: number[];
  rate?: number[];
  keywords?: string[];
  specialization?: number | null;
  complexity?: number[];
}

const useRemoveQuestionsParams = (params: QuestionParams) => {
  return useMemo(() => {
    const cleanedParams: Partial<QuestionParams> = {};
    if (params.skills?.length) cleanedParams.skills = params.skills;
    if (params.rate?.length) cleanedParams.rate = params.rate;
    if (params.keywords?.length) cleanedParams.keywords = params.keywords;
    if (params.specialization !== null && params.specialization !== undefined) {
      cleanedParams.specialization = params.specialization;
    }
    if (params.complexity?.length) cleanedParams.complexity = params.complexity;
    return cleanedParams;
  }, [params]);
}

export default useRemoveQuestionsParams;