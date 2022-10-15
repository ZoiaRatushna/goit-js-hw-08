
import Player from '@vimeo/player';

const player = new Player('handstick', {
    id: 19231868,
    width: 640
});
//плеєр on
player.on('play', function() {
    console.log('played the video!');
});

const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);


// Вимкнути on-плеєр   Видалити обробник події для вказаної події. 
//Буде видалено всіх слухачів цієї події, якщо зворотний виклик не передано, 
//або лише цей конкретний зворотний виклик, якщо він переданий
const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

// If later on you decide that you don’t need to listen for play anymore.
player.off('play', onPlay);

// Alternatively, `off` can be called with just the event name to remove all
// listeners.
player.off('play');


//Завантажте нове відео в це вставлення. Обіцянка буде вирішена, якщо відео буде
//успішно завантажено, або воно буде відхилено, якщо його не вдалося завантажити.

player.loadVideo(76979871).then(function(id) {
    // the video successfully loaded
}).catch(function(error) {
    switch (error.name) {
        case 'TypeError':
            // the id was not a number
            break;

        case 'PasswordError':
            // the video is password-protected and the viewer needs to enter the
            // password first
            break;

        case 'PrivacyError':
            // the video is password-protected or private
            break;

        default:
            // some other error occurred
            break;
    }
});

//Запускати функцію, коли iframe програвача ініціалізовано.
//Вам не потрібно чекати готовності до запуску, щоб почати додавати прослуховувачі
//подій або викликати інші методи.

player.ready().then(function() {
    // the player is ready
});

//Увімкніть текстову доріжку з указаною мовою та, за бажанням, із зазначеним типом (підписи або субтитри).
//Якщо встановити через API, мова доріжки не змінить збережені налаштування користувача.

player.enableTextTrack('en').then(function(track) {
    // track.language = the iso code for the language
    // track.kind = 'captions' or 'subtitles'
    // track.label = the human-readable label
}).catch(function(error) {
    switch (error.name) {
        case 'InvalidTrackLanguageError':
            // no track was available with the specified language
            break;

        case 'InvalidTrackError':
            // no track was available with the specified language and kind
            break;

        default:
            // some other error occurred
            break;
    }
});


