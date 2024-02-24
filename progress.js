// progress_tracking.php

// progress_tracking.js

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/progress_tracking', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const progressData = await response.json();
        // Process progress data and update UI accordingly
    } catch (error) {
        console.error('Error:', error);
    }
});
