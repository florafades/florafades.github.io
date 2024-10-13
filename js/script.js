//JS part
var audio_info = document.getElementById('audio2');
audio_info.addEventListener('playing', function(e){
    console.log('Audio playback has started ...');
    console.log('Playback started at : '+ e.target.currentTime +" seconds");
}, false);
audio_info.addEventListener('pause', function(e){
    console.log('Audio playback has been paused ...');
    console.log('Playback paused at : '+ e.target.currentTime +" seconds");
}, false);

audio_info.addEventListener('ended', function(e){
    console.log('Playback has ended');
}, false);
audio_info.addEventListener('volumechange', function(e){
    console.log("Volume has changed ...");
    console.log("Volume is now "+ e.target.volume);
}, false);

function () {
    // Playlist array
    var files = [
        "sample1.mp3",
        "sample2.mp3",
        "sample3.mp3"
    ];

    // Current index of the files array
    var i = 0;

    // Get the audio element
    var music_player = document.querySelector("#music_list audio");

    // function for moving to next audio file
    function next() {
        // Check for last audio file in the playlist
        if (i === files.length - 1) {
            i = 0;
        } else {
            i++;
        }

        // Change the audio element source
        music_player.src = files[i];
    }

    // Check if the player is selected
    if (music_player === null) {
        throw "Playlist Player does not exists ...";
    } else {
        // Start the player
        music_player.src = files[i];

        // Listen for the music ended event, to play the next audio file
        music_player.addEventListener('ended', next, false)
    }

})();