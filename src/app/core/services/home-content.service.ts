import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeContentService extends BaseService{

  apiKey = environment.apiKey;

  getNowPlayingMovies(page: number) {
    return this.get('/movie/now_playing', {api_key: this.apiKey, page: page});
  }

  getPopularMovies(page: number) {
    return this.get('/movie/popular', {api_key: this.apiKey, page: page});
  }

  getTopRatedMovies(page: number) {
    return this.get('/movie/top_rated', {api_key: this.apiKey, page: page});
  }


}
