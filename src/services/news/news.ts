import {Http} from '../http/http';
import {HttpUrlPath} from '~/common/enums/enums';
import {NewsQuery, NewsDto} from '~/common/types/types';

type ResponseDto = {
  status: string;
  totalResults: number;
  articles: NewsDto[];
};

class News {
  private http: Http = new Http();
  getNews(requestParams: Readonly<NewsQuery> = {}): Promise<ResponseDto> {
    return this.http.load(`${HttpUrlPath.TOP_HEADLINES}`, {
      params: requestParams,
    });
  }
}

export {News};
