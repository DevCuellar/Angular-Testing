import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'season',
})
export class SeasonPipe implements PipeTransform {
  transform(episode: string): string {
    const parts = episode.split('E');
    if (parts.length === 2) {
      const temporada = parts[0].substring(1);
      return `${temporada}`;
    }
    return episode;
  }
}
