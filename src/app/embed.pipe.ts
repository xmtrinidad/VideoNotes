import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'embed'
})
export class EmbedPipe implements PipeTransform {

  transform(url: string) {
    const base_url = 'https://www.youtube.com/embed/';
    // Get youtube link ID
    const vid_id = url.split('v=')[1].split('&')[0];
    return base_url + vid_id;
  }

}
