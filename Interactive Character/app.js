$(document).ready(function() {
    $('.box').on('click', function() {
        var clickedBox = $(this);

        // Mark the clicked box with a special class to move it and show text
        clickedBox.addClass('moved');

        // Hide all other boxes by adding 'hidden' class
        $('.box').not(clickedBox).addClass('hidden');

        // Add a class to the container to apply the hide effect to others
        $('#container').addClass('hide-others');
    });
});
