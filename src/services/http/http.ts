import {getQueryString} from '~/helpers/helpers';
import {HttpOptions} from '~/common/types/types';
import {HttpContentType, HttpMethod, HttpHeaders} from '~/common/enums/enums';

class Http {
  private apiPrefix: string = 'https://newsapi.org/v2/';
  private apiKey: string = '638b98c539d144359b7824876ae99c4f';

  private getUrl(url: string, params?: Record<string, unknown>): string {
    return `${this.apiPrefix}${url}${
      params ? `${getQueryString(params)}` : ''
    }`;
  }

  private getHeaders() {
    const headers = new Headers();
    headers.append(HttpHeaders.CONTENT_TYPE, HttpContentType.APPLICATION_JSON);
    headers.append(HttpHeaders.AUTHORIZATION, this.apiKey);
    return headers;
  }

  async load<T = unknown>(
    url: string,
    options: Partial<HttpOptions> = {},
  ): Promise<T> {
    const {method = HttpMethod.GET, payload = null, params} = options;

    const headers = this.getHeaders();
    const completeUrl = `${this.getUrl(url, params)}`;
    const response = await fetch(completeUrl, {
      headers: headers,
      method,
      body: payload ? JSON.stringify(payload) : payload,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      return response.json();
    }
  }
}

export {Http};
