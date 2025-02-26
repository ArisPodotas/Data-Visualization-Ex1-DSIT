// Adding a go to the top button that only shows up when you get down the page
window.addEventListener(
    'scroll', function() {
        const item = document.getElementsByClassName('btn')[0]; // [0] to select and element object from the list
        const scrollPosition = window.scrollY + window.innerHeight; // How much the user has scrolled (from the top)
        const documentHeight = document.documentElement.scrollHeight; // Total page height
        if (scrollPosition >= documentHeight * 0.90) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden'); // Optional: to hide the element again when scrolling back up
        }
    }
);

document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('.link'); // The element you hover over
    const item = document.querySelector('.find'); // The hidden element

    item.addEventListener('mouseenter', function() {
        item.classList.remove('transparent'); // Show the element
    });

    item.addEventListener('mouseleave', function() {
        item.classList.add('transparent'); // Hide the element
    });
});
