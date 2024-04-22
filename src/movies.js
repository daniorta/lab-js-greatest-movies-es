// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directores = moviesArray.map((movie) => movie.director)

  const directDupli = directores.filter((director, index) => {
    return directores.indexOf(director) === index;
  })
  return directDupli;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const direct = moviesArray.filter((movie) => {
    return movie.director === "Steven Spielberg";
  });

  const genero = direct.filter((movie) => {
    return movie.genre.includes("Drama");
  })

  return genero.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const totalScore = moviesArray.reduce((accumulatorumulator, totalDrama) => {
    if (totalDrama.score) {
      return accumulatorumulator + totalDrama.score;
    } else {
      return accumulatorumulator;
    }

  }, 0)

  const mediaScore = totalScore / moviesArray.length;
  return parseFloat(mediaScore.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  const dramaScore = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama")
  });

  if (dramaScore.length === 0) {
    return 0;
  }

  const totalScore = dramaScore.reduce((uaccumulatorumulator, movie) => {
    return uaccumulatorumulator + (movie.score || 0);
  }, 0);

  const mediaScore = totalScore / dramaScore.length;
  return parseFloat(mediaScore.toFixed(2));
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  const añosEstrenos = moviesArray.slice().toSorted((a, b) => {
    return a.year - b.year || a.title.localeCompare(b.title);
  });
  return añosEstrenos;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  if (moviesArray.length < 20) {
    return moviesArray.map(movie => movie.title).sort((a, b) => a.localeCompare(b));
  }
  const titleMovies = moviesArray.map((movie) => movie.title);
  return titleMovies.sort((a, b) => a.localeCompare(b)).slice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesWithDurationInMinutes = moviesArray.map((movie) => {
    const duration = movie.duration;
    const [hours, minutes] = duration.match(/\d+/g);

    const durationInMinutes = parseInt(hours) * 60 + (parseInt(minutes) || 0);  // en caso de que no se especifiquen minutos, establecemos 0

    return {
      ...movie,
      duration: durationInMinutes
    };

  });

  return moviesWithDurationInMinutes;  // Hay que devolver el nuevo array de películas con la duración transformada a minutos
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  const ratingByYear = moviesArray.reduce((acc, movie) => {
    if (!acc[movie.year]) {
      acc[movie.year] = { sum: 0, count: 0 };
    }
    acc[movie.year].sum += movie.score;
    acc[movie.year].count++;
    return acc;
  }, {});

  const averages = Object.keys(ratingByYear).map(year => ({
    year,
    avg: ratingByYear[year].sum / ratingByYear[year].count
  }));

  const sortedAverages = averages.sort((a, b) => {
    if (a.avg !== b.avg) {
      return b.avg - a.avg;
    } else {
      return a.year - b.year; // Si hay un empate, elegir el año más antiguo
    }
  });

  return `The best year was ${sortedAverages[0].year} with an average score of ${sortedAverages[0].avg}`;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
