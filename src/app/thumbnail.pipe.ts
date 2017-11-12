import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(youtubeUrl: string) {
    const id = youtubeUrl.split('v=')[1].split('&')[0];
    return `http://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  }

}
