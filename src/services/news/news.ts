import {Http} from '../http/http';
import {HttpUrlPath} from '~/common/enums/enums';
import {NewsQuery, NewsDto, ResponseDto} from '~/common/types/types';

class News {
  private http: Http = new Http();
  getNews(requestParams: Readonly<NewsQuery> = {}): Promise<ResponseDto> {
    return this.http.load(`${HttpUrlPath.TOP_HEADLINES}`, {
      params: requestParams,
    });
  }
}

export {News};
