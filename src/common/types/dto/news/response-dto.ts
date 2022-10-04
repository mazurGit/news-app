import {NewsDto} from './news-dto';

export type ResponseDto = {
  status: string;
  totalResults: number;
  articles: NewsDto[];
};
