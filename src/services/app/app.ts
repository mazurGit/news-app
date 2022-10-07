import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

class AppService {
  private dayJsInit = () => {
    dayjs.extend(Duration);
    dayjs.extend(relativeTime);
    dayjs.extend(LocalizedFormat);
  };

  public init = () => {
    this.dayJsInit();
  };
}

export {AppService};
