import type { Specialization } from "../../specialization/types/specialization";

type Author = { id: string; username: string };

export interface Skill {
  id: number;
	title: string;
	description: string;
	imageSrc?: string | null;
	createdAt?: string;
	updatedAt?: Author;
	specializations?: Specialization[];
};
export type GetSkillByIdResponse = Skill;

export type GetSkillsListParamsRequest = {
	page?: number;
	title?: string;
	limit?: number;
	specializations?: number[];
};

export type GetSkillListResponse = {data: Skill[]};