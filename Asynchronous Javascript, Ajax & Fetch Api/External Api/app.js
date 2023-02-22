document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random/", true);

  xhr.onload = function() {
    if (this.status === 200) {
      const joke = JSON.parse(this.responseText);

      const output = `
      <ul>
          <li>${joke.value}</li>
      </ul>
      `;

      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();
}
