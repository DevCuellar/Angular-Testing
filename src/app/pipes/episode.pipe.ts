import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episode',
})
export class EpisodePipe implements PipeTransform {
  transform(episode: string): string {
    const parts = episode.split('E');
    if (parts.length === 2) {
      const episodio = parts[1];
      return `${episodio}`;
    }
    return episode;
  }
}
