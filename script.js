let fetchjoke = document.getElementById('fetchButton');
let thumbsup = document.getElementById('thumbsUpButton');
let thumbsDownButton = document.getElementById('thumbsDownButton');

fetchjoke.addEventListener('click', () => {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((res) => res.json())
    .then((data) => {
      let amount = 0;

      let joke = document.getElementById('joke');
      joke.textContent = data.value;
      document.getElementById(
        'like-dislike-counter'
      ).textContent = `total like dislike:0`;

      thumbsup.addEventListener('click', () => {
        amount++;
        document.getElementById(
          'like-dislike-counter'
        ).textContent = `total like dislike:${amount}`;
      });

      thumbsDownButton.addEventListener('click', () => {
        amount--;
        document.getElementById(
          'like-dislike-counter'
        ).textContent = `total like dislike:${amount}`;
      });
    });
});
