// create_course.js

document.getElementById('courseForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    // Call create course API with title and description
    try {
        const response = await fetch('/create_course', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description })
        });
        const data = await response.json();
        // Handle course creation success or failure
    } catch (error) {
        console.error('Error:', error);
    }
});
