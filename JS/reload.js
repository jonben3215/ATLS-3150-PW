window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 0);
};

function scrollByPercentage(percentage) {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const scrollTo = windowHeight * percentage;
    window.scroll(0, scrollTo);
}