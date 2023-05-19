import { Component } from '@angular/core';
import {HomeContentService} from "../../core/services/home-content.service";

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent {

  isVisible = true;
  nowPlayingMovies?: any[];
  popularMovies?: any[];

  constructor(
    private homeContentService: HomeContentService) {
  }

  getNowPlayingMovies(page: number) {
    this.homeContentService.getNowPlayingMovies(page).subscribe((res) => {
      this.nowPlayingMovies = (res as any).results;
      console.log(this.nowPlayingMovies);

    });
  }
  getpopularMovies(page: number) {
    this.homeContentService.getPopularMovies(page).subscribe((res) => {
      this.popularMovies = (res as any).results;
      console.log(this.popularMovies);

    })
}
  ngOnInit(): void {
    this.getNowPlayingMovies(1);
    this.getpopularMovies(1);
}
}
