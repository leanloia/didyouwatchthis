'use strict'

const searchMovie = async () => {
    
     
    const searchBar = document.querySelector(".search-bar")
    const searchInput = searchBar.value
    
    const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_r4OyjdJv/${searchInput}`)
    const resultSearch = await response.json()
    const resultId = await resultSearch.results[0].id
    
    const idSearch = await fetch(`https://imdb-api.com/en/API/Title/k_r4OyjdJv/${resultId}`)
    const movieResult = await idSearch.json()
    
    //obtengo variables de objeto que traje
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
    
    //busco elemento contenedor
    const resultContainer = document.querySelector('.container-details')
    //creo contenedor para título
    const titleCont = document.createElement(`p`)
    titleCont.innerHTML = `${movieFullTitle}`
    titleCont.classList.add('titleMovieSearch')
    
    //creo contenedor para imagen
    const imgContainer = document.createElement(`img`)
    imgContainer.src = `${movieImg}`
    imgContainer.alt = `${movieFullTitle}`
    imgContainer.classList.add('img-cont')
    
    //creo contenedor para detalles  
    const detailsContainer = document.createElement(`div`)
    detailsContainer.innerHTML = `
        <section class="sect-infoMovie">
        <p class="info-paragraph"><i>Full Title:  </i> ${movieFullTitle}</p>
        <p class="info-paragraph"><i>Director: </i>${movieDirector}</p>
        <p class="info-paragraph"><i>Release date: </i>${movieReleaseDate}</p>
        <p class="info-paragraph"><i>Duration: </i>${movieDuration}</p>
        <p class="info-paragraph"><i>Plot: </i>${moviePlot}</p>
        <p class="info-paragraph"><i>Awards: </i>${movieAwards}</p>
        <p class="info-paragraph"><i>Cast: </i>${movieStars}</p>
        <p class="info-paragraph"><i>Writers: </i>${movieWriters}</p>
        <p class="info-paragraph"><i>Genre: </i>${movieGenre}</p>
        <p class="info-paragraph"><i>Imdb Rating: </i>${movieImDbRate}</p>
        <p class="info-paragraph"><i>BoxOffice: </i>${movieBoxOffice}</p>
    </section>`
    
    //vacio elementos contenedores
    resultContainer.innerHTML = ''
    //hago appendChild de los elementos creados
    resultContainer.appendChild(titleCont);
    const detailsSubContainer = document.createElement('div')
    detailsSubContainer.classList.add('detailsSubCont')
    resultContainer.appendChild(detailsSubContainer)
    detailsSubContainer.appendChild(imgContainer);
    detailsSubContainer.appendChild(detailsContainer)
    
}

const searchBTN = document.querySelector('.search-btn')
searchBTN.addEventListener('click', searchMovie)

