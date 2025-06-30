import questionsApi from "../../entities/question/api/questionsApi";
import skillApi from "../../entities/skill/api/skillApi";
import specializationApi from "../../entities/specialization/api/specializationApi";

export const middlewares = [
  skillApi.middleware,
  questionsApi.middleware,
  specializationApi.middleware
];
