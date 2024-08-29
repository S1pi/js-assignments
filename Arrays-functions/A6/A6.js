'use strict';

const movies = [];

const movieAmount = parseInt(prompt('How many movies you want to rate?'));

for (let i = 1; i <= movieAmount; i++) {
  const movieName = prompt(`Name of the ${i} movie`);
  const movieRating = parseInt(prompt(`rating of the ${i} movie`));
  const title = movieName;
  const rating = movieRating;
  movies.push({
    title,
    rating,
  });

  // movies.push({
  //   title: `${movieName}`,
  //   rating: `${movieRating}`,
  // });
}

movies.sort((a, b) => b.rating - a.rating);

const data = document.querySelector('#result');

const h3 = document.createElement('h3');
h3.textContent = `Highest rated movie is: ${movies[0].title}`;
data.appendChild(h3);

const table = document.createElement('table');

const tht = document.createElement('th');
tht.textContent = 'Movie Title';
tht.style.border = '1px solid black';

const thr = document.createElement('th');
thr.textContent = 'Movie Rating';
thr.style.border = '1px solid black';

const trh = document.createElement('tr');
trh.append(tht, thr);

table.appendChild(trh);

for (let i = 0; i < movies.length; i++) {
  const tdt = document.createElement('td');
  tdt.textContent = movies[i].title;

  const tdr = document.createElement('td');
  tdr.textContent = movies[i].rating;

  const tr = document.createElement('tr');
  tr.append(tdt, tdr);
  table.appendChild(tr);
}

data.appendChild(table);
