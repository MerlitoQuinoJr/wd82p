document.addEventListener("DOMContentLoaded", function () {
  showFavoriteHeroes();
});

const showFavoriteHeroes = () => {
  const favoritesList = document.getElementById("favorites-list");
  favoritesList.innerHTML = "";

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.length === 0) {
    favoritesList.innerHTML = "<p>No favorite superheroes yet.</p>";
    return;
  }

  // Fetch and display details for each favorite hero
  favorites.forEach(async (heroId) => {
    const heroDetails = await fetchHeroDetails(heroId);
    displayHeroDetails(heroDetails, favoritesList);
  });
};

const fetchHeroDetails = async (heroId) => {
  const apiKey = 7526865600681411;
  const url = `https://www.superheroapi.com/api.php/${apiKey}/${heroId}`;
  const response = await fetch(url);
  return await response.json();
};

const displayHeroDetails = (heroDetails, favoritesList) => {
  // Create elements to display hero details (similar to showSuperheroDetails)
  const heroElem = document.createElement("div");
  heroElem.classList.add("favorite-hero");

  // Modify heroElem.innerHTML to display hero details as you want
  // ...

  favoritesList.appendChild(heroElem);
};
