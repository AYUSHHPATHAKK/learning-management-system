// enroll_course.php

<?php
session_start();

// Assuming you have a database connection established

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve enrollment data from the request
    $courseId = $_POST['courseId'];
    $userId = $_SESSION['user_id'];

    // Insert enrollment data into the database
    // Handle errors and respond accordingly
}
?>
