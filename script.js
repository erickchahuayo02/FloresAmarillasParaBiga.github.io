onload = () => {
    document.body.classList.remove("container");
  };

  function loadPage(url) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        document.getElementById('content').innerHTML = data;
    })
    .catch(error => console.error('Error al cargar la página:', error));
}