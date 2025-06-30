import { combineReducers } from '@reduxjs/toolkit';

import skillApi from '../../entities/skill/api/skillApi';
import questionsApi from '../../entities/question/api/questionsApi';
import specializationApi from '../../entities/specialization/api/specializationApi';


const rootReducers = combineReducers({
  [questionsApi.reducerPath]: questionsApi.reducer,
  [skillApi.reducerPath]: skillApi.reducer,
  [specializationApi.reducerPath]: specializationApi.reducer
});

export default rootReducers;