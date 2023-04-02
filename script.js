const music = new Audio('audio/2.mp3');
document.querySelector('.play').addEventListener('click', function () {
    music.src = 'audio/2.mp3';
    music.play();
    masterPlay.className = "bi bi-pause-fill"

    Array.from(document.getElementsByClassName('wave1')).forEach((e) => {
        e.classList.add('active1');
    })
})
const songs = [
    {
        id: 1,
        songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/1.jpg'

    },
    {
        id: 2,
        songName: `Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: 'img/2.jpg'

    },
    {
        id: 3,
        songName: `Insane-lofi <br>
        <div class="subtitle">Ap Dhillon</div>`,
        poster: 'img/3.jpg'

    },
    {
        id: 4,
        songName: `Kahani Suno<br>
        <div class="subtitle">Kaifi Khalil</div>`,
        poster: 'img/4.jpg'

    },
    {
        id: 5,
        songName: `Beche Thaker Gaan <br>
        <div class="subtitle">Rupam Islam</div>`,
        poster: 'img/5.jfif'

    },
    {
        id: 6,
        songName: `Electronic Music <br>
        <div class="subtitle">Electro</div>`,
        poster: 'img/6.jpg'

    },
    {
        id: 7,
        songName: `Baller <br>
        <div class="subtitle">Shubh</div>`,
        poster: 'img/7.jfif'

    },
    {
        id: 8,
        songName: `Suna hai <br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster: 'img/8.jpg'

    },
    {
        id: 9,
        songName: `Adharam Madhuram <br>
        <div class="subtitle">Radhe </div>`,
        poster: 'img/9.jfif'

    },
    {
        id: 10,
        songName: `Halka Halka Surur Hai <br>
        <div class="subtitle">Nusrat Fateh Ali Khan</div>`,
        poster: 'img/10.jfif'

    },
    {
        id: 11,
        songName: `Lagdi Lahore Di <br>
        <div class="subtitle">Street dancer 3</div>`,
        poster: 'img/11.jpg'

    },
    {
        id: 12,
        songName: `Apna Bana Le <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: 'img/12.jfif'

    },
    {
        id: 13,
        songName: `Barrishein <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: 'img/13.jpg'

    },
    {
        id: 14,
        songName: `Tere Pyar Mein <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: 'img/14.jfif'

    },
    {
        id: 15,
        songName: `Kabhi Kabhi Aditi  <br>
        <div class="subtitle">A.R Rahaman</div>`,
        poster: 'img/15.jfif'

    },
    {
        id: 16,
        songName: `Gulabi <br>
        <div class="subtitle">Sachin Jigar</div>`,
        poster: 'img/16.jfif'

    },
    {
        id: 17,
        songName: `Shironamhin <br>
        <div class="subtitle">Shironamhin</div>`,
        poster: 'img/17.jfif'

    },
    {
        id: 18,
        songName: `Pasoori <br>
        <div class="subtitle">Ali Shetty</div>`,
        poster: 'img/18.jpg'

    },
    {
        id: 19,
        songName: `Eh Munde Pagal Ne Saree <br>
        <div class="subtitle">Ap Dhillon</div>`,
        poster: 'img/19.jpg'

    },
    {
        id: 20,
        songName: `Barandai Roddur <br>
        <div class="subtitle">Surojit</div>`,
        poster: 'img/20.jfif'

    }
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let waveE1 = document.querySelector('.wave1');
masterPlay.addEventListener('click', function () {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.className = "bi bi-pause-fill"

        Array.from(document.getElementsByClassName('wave1')).forEach((e) => {
            e.classList.add('active1');
        })
    }
    else {
        music.pause();
        masterPlay.className = "bi bi-play-fill";

        Array.from(document.getElementsByClassName('wave1')).forEach((e) => {
            e.classList.remove('active1');
        })
    }
})

function makeAllBackground() {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgba(128, 128, 128, 0)';
    })
}
function makeAllPlay() {
    Array.from(document.getElementsByClassName('playlist-play')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
    })
}
function playNextAndPrevSong(index) {

}



let index = 0;
let songArr;
Array.from(document.getElementsByClassName('playlist-play')).forEach((e) => {
    // let isPlay = false;
    e.addEventListener('click', function (elm) {

        index = elm.target.id;
        // elm.target.classList.add('bi-pause-circle-fill')
        // elm.target.classList.remove('bi-play-circle-fill')
        index = Number.parseInt(index);
        music.src = `audio/${index}.mp3`;
        music.play();
        masterPlay.className = "bi bi-pause-fill"
        Array.from(document.getElementsByClassName('wave1')).forEach((e) => {
            e.classList.add('active1');
        })
        songArr = songs[index - 1];
        document.getElementById('poster-master-play').src = songArr.poster;
        document.getElementById('title').innerHTML = songArr.songName;
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(128, 128, 128, 0.2)';
        makeAllPlay();
        Array.from(document.getElementsByClassName('playlist-play'))[index - 1].classList.add('bi-pause-circle-fill');
        Array.from(document.getElementsByClassName('playlist-play'))[index - 1].classList.remove('bi-play-circle-fill');
    })


})
let next_song = document.getElementById('next-song');
let prev_song = document.getElementById('prev-song');
next_song.addEventListener('click', function () {
    index++;
    makeAllBackground();
    try {
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(128, 128, 128, 0.2)';
    }
    catch (err) {
        console.log(err)
    }
    makeAllPlay();
    try {
        Array.from(document.getElementsByClassName('playlist-play'))[index - 1].classList.add('bi-pause-circle-fill');
        Array.from(document.getElementsByClassName('playlist-play'))[index - 1].classList.remove('bi-play-circle-fill');
    }
    catch (err) {

        console.log(err);
    }
    try {
        songArr = songs[index - 1];
        document.getElementById('poster-master-play').src = songArr.poster;
        document.getElementById('title').innerHTML = songArr.songName;
    }
    catch (err) {
        console.log(err);
    }
    masterPlay.className = "bi bi-pause-fill"
    Array.from(document.getElementsByClassName('wave1')).forEach((e) => {
        e.classList.add('active1');
    })

    music.src = `audio/${index}.mp3`;
    music.play();
    if (index == 20) {
        index = 0;
    }
    else if (index == 21) {
        index = 1;
        songArr = songs[index - 1];
        document.getElementById('poster-master-play').src = songArr.poster;
        document.getElementById('title').innerHTML = songArr.songName;
        music.src = `audio/${index}.mp3`;
        music.play();
    }
})
prev_song.addEventListener('click', function () {

    index--;
    makeAllBackground();
    try {
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(128, 128, 128, 0.2)';
    }
    catch (err) {
        console.log(err)
    }
    makeAllPlay();
    try {
        Array.from(document.getElementsByClassName('playlist-play'))[index - 1].classList.add('bi-pause-circle-fill');
        Array.from(document.getElementsByClassName('playlist-play'))[index - 1].classList.remove('bi-play-circle-fill');
    }
    catch (err) {
        console.log(err)
    }

    try {
        songArr = songs[index - 1];
        document.getElementById('poster-master-play').src = songArr.poster;
        document.getElementById('title').innerHTML = songArr.songName;
    }
    catch (err) {
        console.log(err);
    }
    masterPlay.className = "bi bi-pause-fill"
    Array.from(document.getElementsByClassName('wave1')).forEach((e) => {
        e.classList.add('active1');
    })

    music.src = `audio/${index}.mp3`
    music.play();
    if (index == 1) {
        index = 21;
    }
    else if (index == 0) {
        index = 20;
        songArr = songs[index - 1];
        document.getElementById('poster-master-play').src = songArr.poster;
        document.getElementById('title').innerHTML = songArr.songName;
        music.src = `audio/${index}.mp3`
        music.play();
    }
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.querySelector('.bar2');
let dot = document.querySelector('.dot');
music.addEventListener('timeupdate', function () {
    //here music is variable controls the current time because when we changes the music inex by pressing next button the music variable also updated so we get the current time and final time according to the variable
    let music_curr = music.currentTime;
    let music_duration = music.duration;
    let music_min = Math.floor(music_duration / 60);
    let music_sec = Math.floor(music_duration % 60);
    if (music_sec < 10) {
        currentEnd.innerText = `${music_min}:0${music_sec}`;
    }
    else {
        currentEnd.innerText = `${music_min}:${music_sec}`;
    }
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        currentStart.innerText = `${min2}:0${sec2}`;
    }
    else {
        currentStart.innerText = `${min2}:${sec2}`;
    }
    let progressBar = parseInt((music_curr / music_duration) * 100);

    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = seekbar + '%';
    dot.style.left = seekbar + '%';
    seek.addEventListener('change', function () {
        music.currentTime = seek.value * music_duration / 100;
        console.log(music.currentTime + ' change')
    })
})

let vol_icon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let vol_bar = document.querySelector('.vol-bar');
let vol_dot = document.querySelector('#vol-dot');

vol.addEventListener('change', function () {
    let vol_value = vol.value;
    //for setting vol range range should be in between 0-1
    let vol_control = vol.value / 100;
    music.volume = vol_control;
    vol_bar.style.width = vol_value + '%';
    vol_dot.style.left = vol_value + '%';
    if (vol.value == 0) {
        vol_icon.className = 'bi bi-volume-mute-fill';
        vol_icon.style.color = 'orange'
    }
    else if (vol.value == 100) {
        vol_icon.className = 'bi bi-volume-up-fill'
        vol_icon.style.color = 'white'
    }
    else {
        vol_icon.className = 'bi bi-volume-down-fill'
        vol_icon.style.color = 'white'
    }
})
music.addEventListener('ended', function () {
    index++;
    try {
        songArr = songs[index - 1];
        document.getElementById('poster-master-play').src = songArr.poster;
        document.getElementById('title').innerHTML = songArr.songName;
    }
    catch (err) {
        console.log(err);
    }
    makeAllPlay();
    try {
        Array.from(document.getElementsByClassName('playlist-play'))[index - 1].classList.add('bi-pause-circle-fill');
        Array.from(document.getElementsByClassName('playlist-play'))[index - 1].classList.remove('bi-play-circle-fill');
    }
    catch (err) {

        console.log(err);
    }
    makeAllBackground();
    try {
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(128, 128, 128, 0.2)';
    }
    catch (err) {
        console.log(err)
    }
    music.src = `audio/${index}.mp3`;
    music.play();
    if (index == 20) {
        index = 0;
    }
    else if (index == 21) {
        index = 1;
        songArr = songs[index - 1];
        document.getElementById('poster-master-play').src = songArr.poster;
        document.getElementById('title').innerHTML = songArr.songName;
        music.src = `audio/${index}.mp3`;
        music.play();
    }

})




let pop_song_left = document.getElementById('pop-song-left');
let pop_song_right = document.getElementById('pop-song-right');
let pop_song = document.querySelector('.pop-song');
let itemE1 = document.querySelector('.item');
let artist_right = document.getElementById('artist-right')
let artist_left = document.getElementById('artist-left')
pop_song_right.addEventListener('click', function () {
    pop_song.scrollLeft += 120;

})
pop_song_left.addEventListener('click', function () {
    pop_song.scrollLeft -= 120;
})
artist_right.addEventListener('click', function () {
    itemE1.scrollLeft += 120;

})
artist_left.addEventListener('click', function () {
    itemE1.scrollLeft -= 120;
})
