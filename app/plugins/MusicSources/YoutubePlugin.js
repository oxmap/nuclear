import MusicSourcePlugin from '../musicSources';
import * as Youtube from '../../rest/Youtube';

class YoutubePlugin extends MusicSourcePlugin {
  constructor() {
    super();
    this.name = 'Youtube Plugin';
    this.description = 'A plugin allowing nuclear to search for music and play it from youtube';
  }

  search(terms) {
    console.log('searching youtube for: ', terms);
    Youtube.trackSearch(terms)
    .then(result => result.json())
    .then(result => {
      console.log(result.items[0]);
      return Promise.resolve(result.items[0]);
    });

  }
}

export default YoutubePlugin;