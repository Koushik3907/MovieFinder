const apiKey = "7a42ae41"; // Your OMDb API key

async function fetchMovie() {
  const movieTitle = document.getElementById("movieTitle").value;
  if (!movieTitle) {
    alert("Please enter a movie title.");
    return;
  }

  try {
    const response = await fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`);
    const data = await response.json();
    
    if (data.Response === "True") {
      displayMovieDetails(data);
    } else {
      alert("Movie not found!");
    }
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

function displayMovieDetails(movie) {
  const movieDetails = document.getElementById("movieDetails");
  movieDetails.style.display = "block";
  movieDetails.innerHTML = `
    <h2>${movie.Title} (${movie.Year})</h2>
    <img src="${movie.Poster}" alt="${movie.Title} Poster" />
    <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
    <p><strong>Genre:</strong> ${movie.Genre}</p>
    <p><strong>Director:</strong> ${movie.Director}</p>
    <p><strong>Plot:</strong> ${movie.Plot}</p>
    <p><strong>Release Date:</strong> ${movie.Released}</p>
    <p><strong>Awards:</strong> ${movie.Awards}</p>
  `;
}
