// function handleClick(button) {
//     // Optional: Add any custom behavior here
//     alert(`${button.textContent} clicked`);
// }

// JavaScript to handle scroll event and hide the scroll indicator
// document.addEventListener('scroll', () => {
//     const scrollIndicator = document.getElementById('scroll-indicator');
//     alert("Bottom")


//     // Function to check scroll position
//     function handleScroll() {
//         if (window.scrollY < 1) { // Adjust this value to set when the arrow should disappear
//             scrollIndicator.classList.add('hidden');
//         } else {
//             // scrollIndicator.classList.remove('hidden');
//         }
//     }

//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Initial check in case the user has already scrolled down
//     handleScroll();
// });

document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.container');
    
    function checkOverflow() {
        if (container.scrollHeight > container.clientHeight) {
            container.classList.add('scrollable');
        } else {
            container.classList.remove('scrollable');
        }
    }

    checkOverflow();
    window.addEventListener('resize', checkOverflow); // Check on window resize
});
