// Cards animation (Staggered reveal from bottom)
ScrollReveal().reveal('.card', {
  distance: '60px',         // Increased distance for more noticeable effect
  duration: 300,           // Duration increased for a smoother effect
  delay: 300,               // Slight delay for better staggered reveal
  origin: 'bottom',         // Origin from the bottom for the cards
  interval: 150,            // Interval between each card's animation
  easing: 'ease-out',       // Smoother easing for the effect
});

// Navigation container (Fade-in reveal from bottom)
ScrollReveal().reveal('.nav-container, .contact-form', {
  distance: '40px',         // Smaller distance for subtle reveal
  duration: 500,           // Duration remains the same for a smooth transition
  origin: 'bottom',         // Origin from the bottom for a smooth entrance
  delay: 200,               // Delay to sync with other animations
  easing: 'ease-in-out',    // Easing function for a balanced effect
});

// Profile card (Slide in from left with a bit of a delay)
ScrollReveal().reveal('.profile-card,.header', {
  distance: '80px',         // Larger distance to create a strong sliding effect
  duration: 500,           // Duration increased to make it more fluid
  origin: 'left',           // Origin from the left for a profile card
  delay: 400,               // Delay to make it stand out more after other elements
  easing: 'ease-out',       // Smooth easing for the profile card animation
  reset: false              // Do not reset to prevent repeated animations
});
ScrollReveal().reveal('.hero__content', {
  distance: '80px',         // Larger distance to create a strong sliding effect
  duration: 500,           // Duration increased to make it more fluid
  origin: 'right',           // Origin from the left for a profile card
  delay: 400,               // Delay to make it stand out more after other elements
  easing: 'ease-out',       // Smooth easing for the profile card animation
  reset: false              // Do not reset to prevent repeated animations
});


var typewriter = new Typewriter('.text-white', {
  loop: true, // Set to true if you want the typing effect to repeat
  delay: 75,  // Adjust the typing speed (in milliseconds)
});

typewriter.typeString('Abdessamad Kechchaf')
  .pauseFor(5000)  // Wait for 2 seconds before restarting or continuing
  .start();
