"use strict";

const personalMovieDB = {
    count: 0, 
    movies: {}, 
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt ('Сколько фильмов вы уже посмотрели?' , '');
        while (this.count === '' || this.count === null || isNaN(this.count)){
            this.count = +prompt ('Сколько фильмов вы уже посмотрели?' , '');
        }
        personalMovieDB.rememberMyFilms();
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt ('Один из последних просмотренных фильмов?' , ''),
                  b = prompt ('На сколько оцените его?' , '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
        personalMovieDB.detectPersonalLevel();  
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if(personalMovieDB.count >= 30 ) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
        personalMovieDB.whriteYourGenres();
    },
    whriteYourGenres: function () {
        for (let i = 1 ; i <= 3 ; i++) {
            let genre = prompt(`Bаш любимый жанр под номером ${i}`);
            if (genre === '' || genre === null) {
                console.log('error');
                i--;
            } else {
                this.genres[i - 1] = genre;
            }
        }
        this.genres.forEach((item, i) => {console.log(`Любимый жанр ${i + 1} - это ${item}`);});
        this.showMyBD();
    },
    toggleVisibleMyDB: function () {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },
    showMyBD: function  () {
        if (!this.privat) {
            console.log(personalMovieDB);
        }
    }
};

personalMovieDB.start();

// personalMovieDB.toggleVisibleMyDB ();