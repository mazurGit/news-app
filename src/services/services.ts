import {HttpServices} from './http/http';
import {NewsServices} from './news/news';
import {AppService} from './app/app';
import {NotificationService} from './notification/notification';

const http = new HttpServices();
const news = new NewsServices();
const appService = new AppService();
const notification = new NotificationService();

export {http, news, appService, notification};
