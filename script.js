document.addEventListener('DOMContentLoaded', () => {
    const toggleTextBtn = document.getElementById("toggle-text-btn")
    const threeDots = document.getElementById("three-dots")
    const fullTextFragment = document.getElementById("full-text-fragment")
    const searchBtn = document.getElementById("search-btn")
    const searchBar = document.getElementById("search-bar")
    const filmList = document.querySelectorAll(".film-list")

    //toggleTextBtn.addEventListener('click', () => {
    //    //Change value of toggle div
    //    
    //    if(toggleTextBtn.textContent === "Read More"){
    //        //Add hidden class to three-dots
    //        threeDots.classList.add('hidden')
    //
    //        fullTextFragment.classList.remove('hidden')
    //
    //        //Change value of div to "Read Less"
    //        toggleTextBtn.textContent = "Read Less"
    //    } else if(toggleTextBtn.textContent === "Read Less"){
    //        threeDots.classList.remove('hidden')
    //
    //        fullTextFragment.classList.add('hidden')
    //
    //        //Change value of div to "Read Less"
    //        toggleTextBtn.textContent = "Read More"
    //
    //    }
    //})
    
    //http://www.omdbapi.com/?t=speed&apikey=9b17cba4
    //When Search btn clicked, read searchbar
    
    //searchbar


    
    searchBtn.addEventListener('click', async () => {
        const response = await fetch(`http://www.omdbapi.com/?t=${searchBar.value}&apikey=9b17cba4`)
        const movie = await response.json()        
        
        //if no films are found: do nothing. else hide symbol. 
        if(!movie.Title){
            console.log("No movie found...")
        
        //}else if(movie.title === undefined){
        //    console.log("else block here...")
        } else {
            
            document.getElementsByClassName("no-data-initial")[0].classList.add("hidden")

            filmList.forEach(list => {
                let filmEntry = 
                `<li class="film-entry">
                    <img class="movie-image" src="${movie.Poster}">
                    <main class="movie-data">
                        <div class="headline-container">
                            <h2 class="movie-title">${movie.Title}</h2>
                            <div class="rating-container">
                                <img class="rating-symbol" src="/img/star-icon.png" alt="Star as a rating symbol">
                                <p class="numerical-rating">${movie.ImdbRating}</p>
                            </div>
                        </div>
    
                        <div class="meta-data">
                            <p class="time">${movie.Runtime}</p>
                            <p class="genres">${movie.Genre}</p>
                            <div class="watchlist-container">
                                <img class="watchlist-symbol" src="/img/add-symbol.svg" alt="add symbol"><a class="watchlist" href="watchlist.html">Watchlist</a>
                            </div>
                        </div>
                        <div class="details">${movie.Plot}</div>
                    </main>
                </li>`
                list.innerHTML += filmEntry

            })

            
            //console.log(movie)
        }
    })
    console.log(searchBarInput)
})

