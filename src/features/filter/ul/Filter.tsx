import { useEffect, type MouseEventHandler } from "react";

import { useFilterParams } from '../model/hooks/useFilter';

import CloseBtn from "../../../shared/ui/CloseBtn/CloseBtn";
import Search from "./Search/Search";
import SpecializationsList from "./SpecializationsList/SpecializationsList";
import SkillsList from "./SkillsList/SkillsList";
import FilterBase from "../../../shared/ui/FilterBase/FilterBase";

import { complexity, rating } from "../model/mock/mock";

interface ParamsProp {
  skills: number[];
  rate: number[];
  keywords: string[];
  specialization: number | null;
  complexity: number[];
}

interface QuestionFilterProps {
  setParameters?: React.Dispatch<React.SetStateAction<ParamsProp>>;
  closeFilter: MouseEventHandler<HTMLButtonElement>;
}

const Filter = ({ setParameters, closeFilter }: QuestionFilterProps) => {
  const {
    params,
    setParams,
    updateSpecialization,
    updateSkills,
    updateRate,
    updateComplexity,
  } = useFilterParams({
    skills: [],
    rate: [],
    keywords: [],
    specialization: null,
    complexity: [],
  });

  useEffect(() => {
    if (setParameters) {
      setParameters(params);
    }
  }, [params]);
  
  return (
    <>
      <CloseBtn onClick={closeFilter} />
      <Search onSearch={(keywords) => setParams((prev: ParamsProp) => ({ ...prev, keywords }))} />
      <SpecializationsList link={true} onChange={updateSpecialization} />
      <SkillsList link={true} onChange={updateSkills} />
      <FilterBase title='Уровень сложности' data={complexity} onChange={updateComplexity}  />
      <FilterBase title='Рейтинг' data={rating} onChange={updateRate}  />
    </>
  );
  };
  
export default Filter;