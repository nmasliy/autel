import Plyr from 'plyr';

import SimpleModal from '../functions/modals';


const player = new Plyr('#player', {
  controls: [
    'play-large',
    'play',
    'progress',
    'current-time',
    'mute',
    'volume',
    'captions',
    'settings',
    'airplay',
    'fullscreen',
  ],
  invertTime: false,
  loadSprite: false,
  iconUrl: '../img/plyr.svg',
  blankVideo: '../video/video-1.mp4',
  // previewThumbnails: false,
  // seekTime
});

const $videoTriggers = document.querySelectorAll('[data-video-trigger]');

$videoTriggers.forEach(($item) => {
  const poster = $item.dataset.videoPoster || '';
  const src = $item.dataset.videoSrc || 'video/video-1.mp4';

  $item.addEventListener('click', function () {
    player.source = {
      type: 'video',
      sources: [
        {
          src: src,
          type: 'video/mp4',
        },
      ],
      poster: poster,
    };
  });
});

const options = {
  disableScroll: true,
  transition: 300,
  onClose: () => {
    player.stop();
  },
  nested: false,
  overlayCloseAll: true,
};
const modals = new SimpleModal(options);
modals.init();
