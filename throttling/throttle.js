const throttle = (fn, limit) => {
    let flag = true;
    return (...args) => {
        if (flag) {
            fn(...args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    };
};

const getData = () => {
    // Make an API call for get some data
    let count = 0;
    console.log('api called and data fetched', count++);
};

const throttle = (fn, limit) => {
    let flag = true;
    return (...args) => {
        if (flag) {
            fn(...args);
            flag = false;

            setTimeout(() => {
                flag = true;
            }, limit);
        }
    };
};
