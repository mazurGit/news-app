import {Http} from '../http/http';
import {HttpUrlPath} from '~/common/enums/enums';
import {NewsQuery, ResponseDto} from '~/common/types/types';

class News {
  private http: Http = new Http();
  getNews(requestParams: Readonly<NewsQuery> = {}): Promise<ResponseDto> {
    return this.http.load(`${HttpUrlPath.BASE}${HttpUrlPath.DOMAINS}`, {
      params: {...requestParams, pageSize: 20},
    });
  }
  getNewsWithSearchValue(
    requestParams: Readonly<NewsQuery> = {},
  ): Promise<ResponseDto> {
    return this.http.load(`${HttpUrlPath.BASE}`, {
      params: {...requestParams, pageSize: 20},
    });
  }
}

export {News};
