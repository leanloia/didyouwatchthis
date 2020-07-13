'use strict';

const getRandomMovies = async () => {

    const response = await fetch('https://imdb-api.com/en/API/Top250Movies/k_r4OyjdJv')
    const info = await response.json()
    const arrMovies = info.items

    let randomNum = Math.floor((Math.random()) * (arrMovies.length))
    let randomMovie = arrMovies[randomNum];




    console.log(randomMovie)

    const movieId = randomMovie.id
    const movieTitle = randomMovie.title
    const movieYear = randomMovie.year
    const movieImDbRating = randomMovie.imDbRating
    const movieCrew = randomMovie.crew
    // const movieImage = randomMovie.image

    const resp = await fetch(`https://imdb-api.com/en/API/Posters/k_r4OyjdJv/${movieId}`)
    const postersObj = await resp.json()
    const movieImage = postersObj.posters[0].link



    const titleCont = document.querySelector('#title-moreinfo')
    const yearCont = document.querySelector('#year-moreinfo')
    const imDbRatingCont = document.querySelector('#imDbRating-moreinfo')
    const crewCont = document.querySelector('#crew-moreinfo')
    const imageCont = document.querySelector('#image-random')

    titleCont.innerHTML = `Title: ${movieTitle}`
    yearCont.innerHTML = `Year: ${movieYear}`
    imDbRatingCont.innerHTML = `imDbRating: ${movieImDbRating}`
    crewCont.innerHTML = `Crew: ${movieCrew}`
    const imgCont = document.createElement(`img`)
    imgCont.src = `${movieImage}`
    imageCont.appendChild(imgCont)

};

window.addEventListener('load', getRandomMovies)