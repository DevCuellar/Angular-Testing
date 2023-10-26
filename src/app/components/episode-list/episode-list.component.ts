import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../services/episode.service';
import { Episode } from '../../models/episode.model';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css'],
})
export class EpisodeListComponent implements OnInit {
  episodes: Episode[] = [];
  selectedPage: number = 1;
  totalPages: number = -1;

  constructor(private episodeService: EpisodeService) {}

  ngOnInit() {
    this.loadEpisodes(this.selectedPage);
  }

  loadEpisodes(page: number) {
    this.selectedPage = page;
    this.episodeService.getEpisodes(page).subscribe((data) => {
      this.episodes = data.results;

      if (this.totalPages == -1) {
        this.totalPages = data.info.pages;
      }
    });
  }
}
