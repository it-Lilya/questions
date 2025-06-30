import { createCustomApi } from "../../../shared/api/baseApi";

import type { GetSpecializationResponse, GetSpecializationsListParamsRequest } from "../types/specialization";

const specializationCreateApi = createCustomApi('specialization');

const specializationApi = specializationCreateApi.injectEndpoints({
  endpoints: (build) => ({
    getSpecializations: build.query<GetSpecializationResponse, GetSpecializationsListParamsRequest>({
      query: (params) => ({
        url: 'specializations',
        params: { page: 1, limit: 10, ...params },
      }),
    }),
  }),
});

export const {
  useGetSpecializationsQuery,
} = specializationApi;

export default specializationApi;
