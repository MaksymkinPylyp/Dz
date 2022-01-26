"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?' , '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?' , '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt ('Один из последних просмотренных фильмов?' , ''),
              b = prompt ('На сколько оцените его?' , '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }    
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if(personalMovieDB.count >= 30 ) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }    
}

detectPersonalLevel(); 

function showMyBD () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyBD();

function whriteYourGenres () {
    for (let i = 1 ; i <= 3 ; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Bаш любимый жанр под номером ${i}`); 
    }
}

whriteYourGenres();