import {Http} from './http/http';
import {News} from './news/news';
import {AppService} from './app/app';
const http = new Http();
const news = new News();
const appService = new AppService();
export {http, news, appService};
