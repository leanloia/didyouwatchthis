'use strict'

const searchMovie = async () => {
    
    // const redirect = () => {
    //     location.assign("/moviedetails.html")
    //     return redirect()
    // }
    
    const searchBar = document.querySelector(".search-bar")
    const searchInput = searchBar.value
    
    const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_r4OyjdJv/${searchInput}`)
    const resultSearch = await response.json()
    const resultId = await resultSearch.results[0].id
    
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
    
    
    
}

const searchBTN = document.querySelector('.search-btn')
searchBTN.addEventListener('click', searchMovie)
// searchBTN.addEventListener('click', redirect)
