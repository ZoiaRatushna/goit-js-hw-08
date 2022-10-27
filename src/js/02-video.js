
import Player from '@vimeo/player';
const _ = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const localStorage = window.localStorage;
let needTime = localStorage.getItem('videoplayer-current-time');

if (needTime) {
    player.setCurrentTime(needTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });  
}

const setData = _(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log(data.seconds);
}, 1000);

player.on('timeupdate', function(data) {
    // data is an object containing properties specific to that event 
    setData(data);
});



