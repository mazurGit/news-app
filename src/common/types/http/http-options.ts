import {HttpMethod, HttpContentType} from '~/common/enums/enums';

type HttpOptions = {
  method?: HttpMethod;
  contentType?: HttpContentType;
  payload?: BodyInit_ | null;
  params?: Record<string, unknown>;
};

export type {HttpOptions};
