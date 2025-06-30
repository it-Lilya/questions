import { useState } from "react";

interface ParamsProp {
  skills: number[];
  rate: number[];
  keywords: string[];
  specialization: number | null;
  complexity: number[];
}


export const useFilterParams = (initialParams: ParamsProp) => {
  const [params, setParams] = useState<ParamsProp>(initialParams);
  
  const updateSpecialization = (newSpecialization: number) => {
    setParams((prev) => ({
      ...prev,
      specialization:
        prev.specialization === newSpecialization ? null : newSpecialization,
    }));
  };

  const updateSkills = (newSkill: number) => {
    setParams((prev) => {
      const updatedSkills = prev.skills.includes(newSkill)
        ? prev.skills.filter(skill => skill !== +newSkill)
        : [...prev.skills, +newSkill];
      return { ...prev, skills: updatedSkills };
    });
  };

  const updateRate = (id: number) => {
  setParams((prev) => {
    const updatedRate = prev.rate.includes(id)
      ? prev.rate.filter(rateId => rateId !== id)
      : [...prev.rate, id];
    return { ...prev, rate: updatedRate };
  });
};

  const updateComplexity = (newComplexity: string) => {
    const newComplexities = parseRange(newComplexity);
    setParams((prev) => {
      const updatedComplexities = newComplexities.reduce((acc, comp) => {
        return acc.includes(comp) ? acc.filter((item) => item !== comp) : [...acc, comp];
      }, prev.complexity);
      return { ...prev, complexity: updatedComplexities };
    });
  };

  const parseRange = (range: string) => {
    const [start, end] = range.split('-').map(Number);
    const result: number[] = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  };

  return {
    params,
    setParams,
    updateSpecialization,
    updateSkills,
    updateRate,
    updateComplexity,
  };
};
