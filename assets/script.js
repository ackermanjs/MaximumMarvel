const btn = document.getElementById("btn");
const displayResults = document.getElementById("Marvel-Results")
const tableBody = document.getElementById("apiTable")
//const input = document.getElementById("input")

// can access 6 Resource types with API: Comics, Comic series, Creators, Characters

var MarvelApiKey = "1c3019aa0e938e0391efafe45582ed7e"
//var MarvelPrivKey = "2431def99f1e36f46b07b9e4473c79f556d6be99"

function chosenSearch () {
    var selectedSearch = document.getElementById("Dropdown")
    var searchText = selectedSearch.options[selectedSearch.selectedIndex].text
    var searchText = searchText.toLowerCase()
    console.log (searchText)
}
chosenSearch()

function marvelApi (value) {
    const marvelRequestURL =`https://gateway.marvel.com:443/v1/public/characters?name=${value}&apikey=${MarvelApiKey}`
    
    return fetch(marvelRequestURL)
    .then((res) => {
        return res.json();
    })
    .then((results) => {
        var marvelResults = results.data.results[0];

        // console.log(marvelResults);
        // for (var i = 0; i < marvelResults.length; i++) {



        //     var tableRow = document.createElement('tr');
        //     var tableContent = document.createElement('td');
        //     tableRow.appendChild(tableContent)
        //     tableBody.appendChild(tableRow)
        // }
        return marvelResults;
    })
}

// any interaction with return data happens to DOM //
var container = document.createElement("div");
function displayCards(data, youtubeResults) {
    console.log(data);           
    const card = document.querySelector(".card-image");
    container = document.createElement("div");
    const displayedImg = document.createElement("img");
    const h2 = document.createElement("h2");
    const p = document.createElement("p")
    
    const {name, comics, thumbnail, description} = data;
    
    h2.textContent = name;
    p.textContent = description;

    const img = thumbnail.path + "." + thumbnail.extension;
    displayedImg.setAttribute("src", img);
    container.append(displayedImg, h2, p);
    card.append(container);
        for (var i = 0; i < 1; i++) {
            // each comic
            const comic = comics.items[i];
            console.log(comic.name)
            console.log(comic.resourceURI)
            // fetch(comic.resourceURI + `&apikey=${MarvelApiKey}`)
            // .then((e) => {
            //     return e.json()
            // })
            // .then((r)=> {
            //     console.log(r)
            // })
            
            // var tableRow = document.createElement('tr');
            // var tableContent = document.createElement('td');
            // tableRow.appendChild(tableContent)
            // tableBody.appendChild(tableRow)
        }
    // tableRow.appendChild(tableContent)
}


btn.addEventListener("click", async function(e) {
    const value = input.value;
    const data = await marvelApi(value);
    const youtubeResults = await youtubeAPI(value);
    displayCards(data, youtubeResults);
})

const input = document.getElementById("input");
const box = document.getElementById("box");
const marvelLogo = document.getElementById("marvelLogo")
const backButton = document.getElementById("backButton")
const resultsCard = document.getElementById("resultsCard")
const search = input

//variables containing the API URLS for Marvel and YouTube
var youtubeAPIKey = "AIzaSyDQuNvm3AKSVCSzUEPrx5_fRT1Lr9RWSY0"

//function assigns the api to the url, fetches data
function youtubeAPI(search) {
var youtubeRequestURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=relevance&q=${search}&marvel&key=${youtubeAPIKey}`

return fetch(youtubeRequestURL)
.then((res) => {
    return res.json();
})
.then((result) => {
    console.log(result)
    return result
})
}

//interaction with returned data
/*function displayCards(data){

    //this section will display the results
    //image
    //title
    //sub-title or description
    console.log(data)
}*/

//button click to call the function
btn.addEventListener("click", async function(e){
    const value = input.value;
    const youtubeResults = await youtubeAPI(value);
    const marvelApiREsults = await marvelApi(value);
    //displayCards(youtubeResults, marvelApiREsults);
})

//hide UI elements on click and display back button + results card
 function hideBox(){
    container.remove();
    box.style.display="none";
    marvelLogo.style.display="none";
    backButton.style.display="block";
    resultsCard.style.display="block";
 }

 //Show UI elements on back button click + hide back button
 function showBox(){
    box.style.display="block";
    marvelLogo.style.display="block";
    backButton.style.display="none";
    resultsCard.style.display="none";
 }
