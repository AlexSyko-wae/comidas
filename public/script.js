document.getElementById('fetchMeal').addEventListener('click', async () => {
    const response = await fetch('/api/random-meal');
    const data = await response.json();
    
    const mealContainer = document.getElementById('mealContainer');
    mealContainer.innerHTML = `
        <h2>${data.meals[0].strMeal}</h2>
        <img src="${data.meals[0].strMealThumb}" alt="${data.meals[0].strMeal}" width="300">
        <p>${data.meals[0].strInstructions}</p>
    `;
});


