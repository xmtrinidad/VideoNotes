import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(youtubeUrl: string) {
    return `http://img.youtube.com/vi/${this.YouTubeGetID(youtubeUrl)}/maxresdefault.jpg`;
  }


  /**
   * Get youtube ID taken from https://gist.github.com/takien/4077195
   * @param url - the youtube link
   * @return {string} - youtube video id
   */
  YouTubeGetID(url) {
    let ID = '';
    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    } else {
      ID = url;
    }
    return ID;
  }

}
