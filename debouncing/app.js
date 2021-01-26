let counter = 0;

const getData = () => {
    // request for data
    console.log('Fetching data ...', counter++);
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

const betterSearching = debouncing(getData, 300);
