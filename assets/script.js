const btn = document.getElementById("btn");
const input = document.getElementById("input")

// can access 6 Resource types with API: Comics, Comic series, Creators, Characters

var MarvelApiKey = "1c3019aa0e938e0391efafe45582ed7e"
var MarvelPrivKey = "2431def99f1e36f46b07b9e4473c79f556d6be99"

function chosenSearch () {
    var selectedSearch = document.getElementById("Dropdown")
    var searchText = selectedSearch.options[selectedSearch.selectedIndex].text
    var searchText = searchText.toLowerCase()
    console.log (searchText)
}
chosenSearch()
function marvelApi (characterName) {
    const marvelRequestURL =`https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&apikey=${MarvelApiKey}`
    
    return fetch(marvelRequestURL)
    .then((res) => {
        return res.json();
    })
    .then((results) => {
        const result = results.data.results;
        console.log(result);
        return result;
    })
}

function displayCards(data) {

    // any interaction with return data happens to DOM //


    console.log(data);
}


btn.addEventListener("click", async function(e) {
    const value = input.value;
    const data = await marvelApi(value);
    displayCards(data);
})

const input = document.getElementById("input");
const box = document.getElementById("box");
const marvelLogo = document.getElementById("marvelLogo")
const backButton = document.getElementById("backButton")
const resultsCard = document.getElementById("resultsCard")

//variables containing the API URLS for Marvel and YouTube
var youtubeAPIKey = "AIzaSyDQuNvm3AKSVCSzUEPrx5_fRT1Lr9RWSY0"

//function assigns the api to the url, fetches data
function youtubeAPI(search) {
var youtubeRequestURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=relevance&q=${search}&key=${youtubeAPIKey}`

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
function displayCards(data){

    // code to display results will go here //
    console.log(data)
}

//button click to call the function
btn.addEventListener("click", async function(e){
    const value = input.value;
    const youtubeResults = await youtubeAPI(value);
    const marvelApiREsults = await "alec'sfunction(value)"
    displayCards(youtubeResults, marvelApiREsults);
})

//hide UI elements on click and display back button + results card
 function hideBox(){
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
