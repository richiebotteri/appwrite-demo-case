export function displayMovieCollections(moviesArray) {
   moviesArray.forEach((movie, index) => {
      const { title, genre, year, description, cover, $id } = movie;

      const movieCollectionEl = document.querySelector("#movie-collection");

      const card = document.createElement("div");
      card.classList.add("card");
      card.id = $id;

      const parser = new DOMParser();
      const parserDoc = parser.parseFromString(
         `
      <div class="card-header pt-4">
      <h2>${title}</h2>
      <p>Year: ${year} | ${genre}</p>
      </div>

      <div id="card-settings" class="card-footer bg-light">
      <button class="delete-btn btn btn-danger py-1 px-2">delete</button>
      <button class="update-btn btn btn-outline-dark border py-1 px-2">update</button>
      <p class="validation-msg-${index} fs-6 fw-bold text-danger pt-2 m-0"></p>
      </div>
      
      <img id="cover" src="${cover}" class="card-body movie-cover"/>
      
      <div id="card-desc" class="card-body">
      <h3>Description</h3>
      <p>${description}</p>
      </div>



      `,
         "text/html"
      );

      const cardHeader = parserDoc.querySelector(".card-header");

      const cardSettings = parserDoc.querySelector("#card-settings");

      const cardImage = parserDoc.querySelector("#cover");
      const cardBody = parserDoc.querySelector("#card-desc");

      const cardFooter = parserDoc.querySelector(".card-footer");

      movieCollectionEl.append(card);

      card.append(cardHeader, cardImage, cardBody, cardFooter, cardSettings);
   });
}
