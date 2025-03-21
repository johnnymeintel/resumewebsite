// main.js - Cloud Resume Challenge visitor counter functionality
// Johnny Meintel - 2025

document.addEventListener('DOMContentLoaded', () => {
    // Get the counter element from the DOM
    const counterElement = document.getElementById('counter');
    
    // API URL - replace with your actual Azure Function URL
    const API_URL = 'https://your-function-app-name.azurewebsites.net/api/GetResumeCounter';
    
    // Function to fetch and update the counter
    async function updateVisitorCounter() {
      try {
        // Show loading state
        counterElement.textContent = 'loading...';
        
        // Fetch the counter data from Azure Function
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        // Check if the request was successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse the response data
        const data = await response.json();
        
        // Format the counter number with commas for thousands
        const formattedCount = new Intl.NumberFormat().format(data.count);
        
        // Update the counter display
        counterElement.textContent = formattedCount;
        
        // Add a subtle animation
        counterElement.classList.add('counter-updated');
        
        // Remove the animation class after animation completes
        setTimeout(() => {
          counterElement.classList.remove('counter-updated');
        }, 1000);
        
      } catch (error) {
        console.error('Error updating visitor counter:', error);
        counterElement.textContent = 'many';
      }
    }
    
    // Initial counter update
    updateVisitorCounter();
  });