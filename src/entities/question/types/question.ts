import type { Skill } from "../../skill/types/skill";
import type { Specialization } from "../../specialization/types/specialization";

type Author = { id: string; username: string };

export interface Question {
	id: number;
	title: string;
	description: string;
	code?: string | null;
	imageSrc?: string | null;
	keywords?: string[];
	longAnswer?: string;
	shortAnswer: string;
	status: 'public';
	rate: number;
	complexity: number;
	createdAt: Author;
	updatedAt: Author;
	createdBy: Author;
	updatedBy: string | null;
	questionSpecializations: Specialization[];
	questionSkills: Skill[];
	checksCount?: number;
	isLearned?: boolean;
	profileId?: string;
}

interface Response<T> {
	data: T;
	limit: number;
	total: number;
	page: number;
}

export type GetQuestionsListResponse = Response<Question[]>;

export interface GetQuestionsListParamsRequest {
	page?: number;
	limit?: number;
	title?: string;
	skills?: number[];
	complexity?: number[];
	rate?: number[];
	keywords?: string[];
	specialization?: number | null;
}

export type GetQuestionByIdResponse = Question