'use strict';

const getRandomMovies = async () => {
    // fetch a end-point de Top250Movies
    // APIkey = k_r4OyjdJv
    

    const response = await fetch('https://imdb-api.com/en/API/Top250Movies/k_r4OyjdJv')
    const info = await response.json()
    const arrMovies = info.items
    // random sobre nº de elementos en el array obtenido
    let randomNum = Math.floor((Math.random()) * (arrMovies.length))
    let randomMovie = arrMovies[randomNum];
    
    
    const movieId = randomMovie.id
    const movieTitle = randomMovie.title
    const movieYear = randomMovie.year
    const movieImDbRating = randomMovie.imDbRating
    const movieCrew = randomMovie.crew
    
    
    //fetch a 2do end-point de Posters (por mejor calidad de imágenes)
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
    imgCont.alt = `${movieTitle}`
    imageCont.appendChild(imgCont)
    
};
window.addEventListener('load', getRandomMovies)


const searchMovie = async () => {
    
    redirect = () => {
        location.assign("/moviedetails.html")
    }
    
    const searchBar = document.querySelector(".search-bar")
    const searchInput = searchBar.value
    
    const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_r4OyjdJv/${searchInput}`)
    const resultSearch = await response.json()
    const resultId = resultSearch.results[0].id
    
    const idSearch = await fetch(`https://imdb-api.com/en/API/Title/k_r4OyjdJv/${resultId}`)
    const movieResult = await idSearch.json()
    
    
    const movieFullTitle = movieResult.fullTitle
    const movieReleaseDate = movieResult.releaseDate
    const movieDuration = movieResult.runtimeStr
    const moviePlot = movieResult.plot
    const movieAwards = movieResult.awards
    const movieDirector = movieResult.directors
    const movieStars = movieResult.stars
    const movieWriters = movieResult.writers
    const movieGenre = movieResult.genres
    const movieImDbRate = movieResult.imDbRating
    const movieBoxOffice = movieResult.boxOffice.cumulativeWorldwideGross
    const movieImg = movieResult.image
    
    const imgDetailCont = document.querySelector('.container-details')
    const imgContainer = document.createElement(`img`)
    const titleCont = document.createElement(`p`)
    imgContainer.src = `${movieImg}`
    imgContainer.alt = `${movieFullTitle}`
    imgContainer.classList.add('img-cont')
    titleCont.innerHTML = `${movieFullTitle}`
    titleCont.classList.add('titleMovieSearch')
    imgDetailCont.innerHTML = ''
    imgDetailCont.appendChild(titleCont);
    imgDetailCont.appendChild(imgContainer);
    
    redirect();

}

const searchBTN = document.querySelector('.search-btn')
searchBTN.addEventListener('click', searchMovie)
