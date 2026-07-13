let songs = [

    {
        title:"Dekha Ek Khwaab Toh Yeh Silsile Hue",
        artist:"Kishore Kumar & Lata Mangeshkar",
        src:"song/song1.mp3"
    },


    {
        title:"Ghunghat Ki Aad Se Dilbar Ka",
        artist:"Alka Yagnik & Kumar Sanu",
        src:"song/song2.mp3"
    },


    {
        title:"Yeh Bandhan Toh Pyaar Ka Bandhan Hai",
        artist:"Kumar Sanu, Alka Y, Udit N",
        src:"song/song3.mp3"
    }

];



let audio = document.getElementById("audio");

let title = document.getElementById("title");

let artist = document.getElementById("artist");

let progress = document.getElementById("progress");

let volume = document.getElementById("volume");

let time = document.getElementById("time");

let playlist = document.getElementById("playlist");


let currentSong = 0;



// Load song

function loadSong(index){

    audio.src = songs[index].src;

    title.innerHTML = songs[index].title;

    artist.innerHTML = songs[index].artist;

}


loadSong(currentSong);



// Play and Pause

function playPause(){

    if(audio.paused){

        audio.play();

    }
    else{

        audio.pause();

    }

}



// Next song

function nextSong(){

    currentSong++;

    if(currentSong >= songs.length){

        currentSong = 0;

    }


    loadSong(currentSong);

    audio.play();

}



// Previous song

function previousSong(){

    currentSong--;


    if(currentSong < 0){

        currentSong = songs.length-1;

    }


    loadSong(currentSong);

    audio.play();

}




// Progress bar and duration

audio.addEventListener("timeupdate",function(){


    progress.max = audio.duration;

    progress.value = audio.currentTime;



    let current = formatTime(audio.currentTime);

    let total = formatTime(audio.duration);



    time.innerHTML = current + " / " + total;


});




// Change song time

progress.addEventListener("input",function(){

    audio.currentTime = progress.value;

});




// Volume

volume.addEventListener("input",function(){

    audio.volume = volume.value;

});




// Auto play next song

audio.addEventListener("ended",function(){

    nextSong();

});





function formatTime(seconds){


    if(isNaN(seconds)){

        return "0:00";

    }


    let min = Math.floor(seconds / 60);

    let sec = Math.floor(seconds % 60);



    if(sec < 10){

        sec = "0" + sec;

    }


    return min + ":" + sec;

}





// Playlist

songs.forEach(function(song,index){


    let li = document.createElement("li");


    li.innerHTML = song.title;



    li.onclick = function(){


        currentSong = index;


        loadSong(currentSong);


        audio.play();


    };



    playlist.appendChild(li);


});