// Select all items
const items = document.querySelectorAll('.item');

// Add event listener to each item
items.forEach(item => {
    item.addEventListener('click', function() {
        // Disable hover on all items after one click
        items.forEach(i => {
            i.classList.add('disabled-hover');
        });
        
        // You can add custom behavior after the click
        item.style.backgroundColor = 'green'; // Example: Change color of clicked item
    });
});
