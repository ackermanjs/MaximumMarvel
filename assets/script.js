const btn = document.getElementById("btn");
const displayResults = document.getElementById("Marvel-Results")
const tableBody = document.getElementById("apiTable")



var youtubeAPIKey = "AIzaSyDQuNvm3AKSVCSzUEPrx5_fRT1Lr9RWSY0"
var MarvelApiKey = "1c3019aa0e938e0391efafe45582ed7e"


function chosenSearch () {
    var selectedSearch = document.getElementById("Dropdown")
    var searchText = selectedSearch.options[selectedSearch.selectedIndex].text
    var searchText = searchText.toLowerCase()
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
       
        return marvelResults;
    })
}


var container = document.createElement("div");
function displayCards(data, youtubeResults) {          
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
    
        for (var i = 0; i < 1; i++) {
           
            const comic = comics.items[i];
           
        
        }
    

   


      
            const youtubeVideo = document.createElement("div");
            const videoId = youtubeResults.items[2].id.videoId 

            
           
            youtubeVideo.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            container.append(youtubeVideo);
      

   card.append(container);


         
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


var youtubeAPIKey = "AIzaSyDQuNvm3AKSVCSzUEPrx5_fRT1Lr9RWSY0"


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

btn.addEventListener("click", async function(e){
    const value = input.value;
    const youtubeResults = await youtubeAPI(value);
    const marvelApiREsults = await marvelApi(value);
})


 function hideBox(){
    container.remove();
    box.style.display="none";
    marvelLogo.style.display="none";
    backButton.style.display="block";
    resultsCard.style.display="block";
 }

 function showBox(){
    box.style.display="block";
    marvelLogo.style.display="block";
    backButton.style.display="none";
    resultsCard.style.display="none";
 }
