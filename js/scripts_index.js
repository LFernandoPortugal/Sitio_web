// API para noticias
// Hacer una solicitud a News API
const apiKey = '67a5d580af694c38a553d08afb2b2c9e'; // Reemplaza esto con tu API key
const url = `https://newsapi.org/v2/top-headlines?country=mx&category=technology&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Mostrar los resultados en una sección específica de tu HTML
    const noticias = data.articles;
    let noticiasHtml = '';

    for (let i = 0; i < noticias.length; i++) {
      const imagen = noticias[i].urlToImage ? noticias[i].urlToImage : 'https://via.placeholder.com/150x150.png?text=No+image+available';
      noticiasHtml += `<div class="noticia">`;
      noticiasHtml += `<img src="${imagen}" alt="${noticias[i].title}">`;
      noticiasHtml += `<h2>${noticias[i].title}</h2>`;
      noticiasHtml += `<p>${noticias[i].description}</p>`;
      noticiasHtml += `<a href="${noticias[i].url}" target="_blank">Leer más</a>`;
      noticiasHtml += `</div>`;
    }

    const noticiasContainer = document.querySelector('#noticias-tecnologia');
    noticiasContainer.innerHTML = noticiasHtml;
  })
  .catch(error => console.log(error));
