import { createCustomApi } from "../../../shared/api/baseApi";

import type { GetQuestionByIdResponse, GetQuestionsListParamsRequest, GetQuestionsListResponse } from "../types/question";

const questionsCreateApi = createCustomApi('questions');

const questionsApi = questionsCreateApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestionsList: build.query<GetQuestionsListResponse, GetQuestionsListParamsRequest>({
      query: (params) => ({
        url: 'questions/public-questions',
        params: { page: params.page, limit: 10, ...params},
      }),
    }),
    getQuestionById: build.query<GetQuestionByIdResponse, { id: number }>({
      query: ({ id }) => ({
        url: `${`questions/public-questions`}/${id}`
      }),
    }),
  }),
});

export const {
	useGetQuestionsListQuery,
	useGetQuestionByIdQuery
} = questionsApi;

export default questionsApi;