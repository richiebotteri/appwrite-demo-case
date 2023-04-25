export function displayMovieCollections(moviesArray) {
   moviesArray.forEach((movie) => {
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

      <div class="card-footer">
      <h3>Description</h3>
      <p>${description}</p>
      </div>

      `,
         "text/html"
      );

      const cardHeader = parserDoc.querySelector(".card-header");

      const cardBody = document.createElement("img");
      cardBody.classList.add("card-body", "movie-cover");
      cardBody.src = `${cover}`;

      const cardFooter = parserDoc.querySelector(".card-footer");

      movieCollectionEl.append(card);

      card.append(cardHeader, cardBody, cardFooter);
   });
}
