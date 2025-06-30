import { createCustomApi } from "../../../shared/api/baseApi";

import type { GetSkillListResponse, GetSkillsListParamsRequest } from "../types/skill";

const skillCreateApi = createCustomApi('skillApi');

const skillApi = skillCreateApi.injectEndpoints({
  endpoints: (build) => ({
    getSkillsList: build.query<GetSkillListResponse, GetSkillsListParamsRequest>({
      query: (params) => ({
        url: 'skills',
        params: { page: 1, limit: 10, ...params },
      }),
    }),
  }),
});

export const {
  useGetSkillsListQuery,
} = skillApi;

export default skillApi;