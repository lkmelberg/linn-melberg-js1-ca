const charactersContainer = document.querySelector(".characters");

const url = "https://rickandmortyapi.com/api/character";

async function fetchCharacters() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    charactersContainer.innerHTML = "";

    const character = json.results;

    character.forEach(function (character) {
      charactersContainer.innerHTML += `<a href="details.html?id=${character.id}" class="card">
                                                <div class="image" style="background-image: url(${character.image});"></div>
                                                <div class="details">
                                                    <h4 class="char-name">${character.name}</h4>    
                                                    <p class"gender">Gender: ${character.gender}</p>                                                                                                                                                    
                                                </div>
                                            </a>`;
    });
    console.log("Success");
  } catch (error) {
    console.log(error);
    charactersContainer.innerHTML = message("error");
  }
}

fetchCharacters();
