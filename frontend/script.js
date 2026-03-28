// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Console log to confirm script loading
    console.log('Ni-Naad Bramha Sangeet Vidyalaya website loaded successfully.');

    // Future functionality can be added here
    // Example: specific interactions for the frames or navigation
    
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            // Optional: Subtle sound effect or advanced animation trigger
        });
    });
});
