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

