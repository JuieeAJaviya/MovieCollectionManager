// Movie Collection
const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 },
    { title: "Tenet", genre: "Sci-Fi", rating: 7.5, releaseYear: 2020 },
    { title: "The Matrix", genre: "Sci-Fi", rating: 8.7, releaseYear: 1999 },
    { title: "Gladiator", genre: "Action", rating: 8.5, releaseYear: 2000 }
];

// Function to add a new movie
const addMovie = (collection, movie) => {
    collection.push(movie);
};

// List movies by genre
const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
};

// Find the highest-rated movie
const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};

// Get all movie titles
const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};

// Filter movies by release year
const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear > year);
};

// Display movies on the page
const displayMovies = () => {
    const moviesList = document.getElementById('movies-list');
    moviesList.innerHTML = movies.map(movie => `
        <div class="movie-item">
            <h3>${movie.title}</h3>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Rating:</strong> ${movie.rating}</p>
            <p><strong>Released:</strong> ${movie.releaseYear}</p>
        </div>
    `).join('');

    // Display Sci-Fi Movies
    const sciFiMovies = listMoviesByGenre(movies, "Sci-Fi");
    const sciFiMoviesList = document.getElementById('sci-fi-movies-list');
    sciFiMoviesList.innerHTML = sciFiMovies.map(movie => `
        <li><strong>${movie.title}</strong> (${movie.releaseYear})</li>
    `).join('');

    // Display Highest Rated Movie
    const highestRatedMovie = findHighestRatedMovie(movies);
    const highestRatedMovieElement = document.getElementById('highest-rated-movie');
    highestRatedMovieElement.innerHTML = `
        <strong>${highestRatedMovie.title}</strong> (Rating: ${highestRatedMovie.rating})
    `;

    // Display Movies After 2010
    const after2010Movies = moviesAfterYear(movies, 2010);
    const after2010MoviesList = document.getElementById('movies-after-2010-list');
    after2010MoviesList.innerHTML = after2010Movies.map(movie => `
        <li><strong>${movie.title}</strong> (${movie.releaseYear})</li>
    `).join('');

    // Display Movie Titles
    const allMovieTitles = getMovieTitles(movies);
    const movieTitlesList = document.getElementById('movie-titles-list');
    movieTitlesList.innerHTML = allMovieTitles.map(title => `
        <li>${title}</li>
    `).join('');
};

// Search functionality
const searchMovies = () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchInput) || 
        movie.genre.toLowerCase().includes(searchInput)
    );

    const moviesList = document.getElementById('movies-list');
    moviesList.innerHTML = filteredMovies.map(movie => `
        <div class="movie-item">
            <h3>${movie.title}</h3>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Rating:</strong> ${movie.rating}</p>
            <p><strong>Released:</strong> ${movie.releaseYear}</p>
        </div>
    `).join('');
};

// Initialize movie display
displayMovies();

// Add event listener to the search button
document.getElementById('search-button').addEventListener('click', searchMovies);
