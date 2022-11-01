const btn = document.getElementById("btn");
const input = document.getElementById("input");
const box = document.getElementById("box");
const marvelLogo = document.getElementById("marvelLogo")
const backButton = document.getElementById("backButton")
const resultsCard = document.getElementById("resultsCard")

//variables containing the API URLS for Marvel and YouTube
var youtubeAPIKey = "AIzaSyDQuNvm3AKSVCSzUEPrx5_fRT1Lr9RWSY0"

//function assigns the api to the url, fetches data
function youtubeAPI(search) {
var youtubeRequestURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewcount&q=${search}&key=${youtubeAPIKey}`

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

    //this section will display the results
    //image
    //title
    //sub-title or description
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