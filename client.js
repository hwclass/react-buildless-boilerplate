import { React, ReactDOM, useState, useEffect } from '/web_modules/es-react.js';
import htm from '/web_modules/htm.js';

const html = htm.bind(React.createElement)

const FILMS = 'https://swapi.co/api/films/'

const FilmList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    function getFilms() {
      fetch(FILMS)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setFilms(data.results);    
        });
    }
    
    getFilms();
  }, []);

  return html`
    <section>
      <ul>
        ${films.map((film) => {
          return html`<li>${film.title}</li>`
        })}
      </ul>
    </section>
  `;
};


ReactDOM.render(
  html`
    <h1>≠ React Buildless Boilerplate</h1>
    <${FilmList} />
  `,
  document.body
)