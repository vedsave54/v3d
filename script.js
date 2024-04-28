document.addEventListener('DOMContentLoaded', function() {
    // Get the moving text element
    const movingText = document.getElementById('movingText');

    // Variables to store mouse position
    let offsetX, offsetY;

    // Event listener for mouse down event
    movingText.addEventListener('mousedown', startDragging);

    // Function to start dragging
    function startDragging(event) {
        // Calculate the offset between mouse position and text position
        offsetX = event.clientX - movingText.offsetLeft;
        offsetY = event.clientY - movingText.offsetTop;

        // Event listeners for mouse move and mouse up events
        document.addEventListener('mousemove', dragText);
        document.addEventListener('mouseup', stopDragging);
    }

    // Function to drag the text
    function dragText(event) {
        // Update text position based on mouse position
        const newX = event.clientX - offsetX;
        const newY = event.clientY - offsetY;
        movingText.style.left = newX + 'px';
        movingText.style.top = newY + 'px';
    }

    // Function to stop dragging
    function stopDragging() {
        // Remove event listeners for mouse move and mouse up events
        document.removeEventListener('mousemove', dragText);
        document.removeEventListener('mouseup', stopDragging);
    }
});
