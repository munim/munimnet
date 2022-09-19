import './style.css';

document.addEventListener("DOMContentLoaded", () => {
    var replacers = document.querySelectorAll('[data-replace]');
    replacers.forEach(replItem => {
        let replaceClasses = JSON.parse(replItem.dataset.replace.replace(/'/g, '"'));
        Object.keys(replaceClasses).forEach(key => {
            replItem.classList.remove(key);
            var replaceObj = replaceClasses[key]
            if (Array.isArray(replaceObj)) {
                replaceObj.forEach(obj => replacers[i].classList.add(obj));
            }
            else if (typeof replaceObj === 'string') {
                replItem.classList.add(replaceClasses[key]);
            }
        });
    });

    document.querySelector(".my-em").href = window.atob("bWFpbHRvOmhlbGxvQG11bmltLm5ldA==");
    document.querySelector(".my-tg").href = window.atob("aHR0cHM6Ly90Lm1lL211bmltMzE2");
});

