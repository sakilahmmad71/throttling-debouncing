const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const searchText = document.getElementById('search');
const searchItems = document.getElementById('searchItems');

const cities = [];

// Fetching data while page loading
const getCities = () => {
    fetch(endpoint)
        .then((blob) => blob.json())
        .then((data) => cities.push(...data))
        .catch((err) => console.log(err));
};

const filterCities = (filterText, cities) => {
    return cities.filter((place) => {
        const regex = new RegExp(filterText, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
};

const displayCities = () => {
    getCities();

    const matchedCities = filterCities(searchText.value, cities);

    const html = matchedCities
        .map((place) => {
            return `
            <li>
                <span>${place.city}, ${place.state}</span>
                <span>${place.population}</span>
            </li>
        `;
        })
        .join('');

    searchItems.innerHTML = html;
};

const debouncing = (fn, delay) => {
    let timer;
    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

const getNewData = debouncing(displayCities, 300);

searchText.addEventListener('focus', getCities);
searchText.addEventListener('keyup', getNewData);
