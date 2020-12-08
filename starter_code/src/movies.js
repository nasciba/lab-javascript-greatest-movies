const ratesAverage = (array) => {
  let averageRate = array.reduce((acc, item) => {
    return acc + parseFloat(item.rate)
  }, 0)

  return parseFloat((averageRate / array.length).toFixed(2));
}

const dramaMoviesRate = (array) => {
  let filteredArray = array.filter(movie => {
    return movie.genre.includes('Drama')
  });
  if (filteredArray.length === 0) {
    return 0;
  }

  let dramaRate = filteredArray.reduce((acc, item) => {
    if (item.rate === "") {
      return acc;
    }
    return acc + parseFloat(item.rate)
  }, 0)
  return parseFloat((dramaRate / filteredArray.length).toFixed(2));

};

const orderByDuration = (array) => {
  return array.sort((a, b) => {
    if (a.duration === b.duration) {
      return (a.title.localeCompare(b.title));
    }
    return a.duration - b.duration;
  })
}

const howManyMovies = (array) => {
  let dramaSpielberg = array.filter(movie => {
    return movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg");
  })
  return dramaSpielberg.length;
}

function orderAlphabetically(array) {
  let orderedByTitle = array.sort((a, b) => a.title.localeCompare(b.title));
  let onlyTitles = [];
  for (let i = 0; i < orderedByTitle.length; i++) {
    onlyTitles.push(orderedByTitle[i].title);

  }
  if (onlyTitles.length <= 20) {
    return onlyTitles;
  }
  else if (onlyTitles.length > 20) {
    return onlyTitles.slice(0, 20);
  }
}

const turnHoursToMinutes = (arrayOfMovies) => {
  let newArray = arrayOfMovies.map(movie => {
    if (!movie.duration.includes(" ")) {
      if (movie.duration.includes("min")) {
        let minutesSubstring = movie.duration.search("min");
        let minutes = Number(movie.duration.slice(0, minutesSubstring));
        return {
          title: movie.title,
          year: movie.year,
          director: movie.director,
          duration: minutes,
          genre: movie.genre,
          rate: movie.genre
        }
      }
      else if (movie.duration.includes("h")) {
        let hoursSubstring = movie.duration.search("h");
        let minutes = Number(movie.duration.slice(0, hoursSubstring) * 60);
        return {
          title: movie.title,
          year: movie.year,
          director: movie.director,
          duration: minutes,
          genre: movie.genre,
          rate: movie.genre
        }
      }
    }
    else {
      let arrayOfDuration = movie.duration.split(' ')
      let minutesSubstring = arrayOfDuration[1].search("min");
      let hoursSubstring = arrayOfDuration[0].search("h");
      let hoursToMinutes = Number(arrayOfDuration[0].slice(0, hoursSubstring) * 60);
      let minutes = Number(arrayOfDuration[1].slice(0, minutesSubstring));
      const totalMinutes = hoursToMinutes + minutes;
      return {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        duration: totalMinutes,
        genre: movie.genre,
        rate: movie.genre
      }
    }
  })
  return newArray;
}


