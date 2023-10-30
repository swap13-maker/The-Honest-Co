<?php
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin (not recommended for production)

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Max-Age: 86400");
    header("HTTP/1.1 200 OK");
    exit();
}

header("Content-Type: application/json");

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'suraj.paul.69@gmail.com'; // Replace with the recipient's email address
    $subject = 'Query Form Enquiry';
    // Get the POST data
    $data = json_decode(file_get_contents("php://input"));

    // Extract form data
    $name = $data->name;
    $email = $data->email;
    $mobile = $data->mobile;
    $query = $data->query;
    $interests = implode(', ', $data->interests);

    // Compose the email message
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Mobile: $mobile\n";
    $message .= "Query: $query\n";
    $message .= "Interests: $interests\n";

    $fromAddress = 'karthik@thehonestco.in'; // Replace with the "From" email address
    $fromName = 'The Honest Company';

    // Additional headers
    $headers = "From: $fromName <$fromAddress>" . "\r\n";
    $headers .= "Reply-To: $fromAddress" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        // Your form data is now in the $data variable
        // You can access it like: $data->name, $data->email, $data->mobile, $data->query, $data->interests

        // print_r($data);die();
        // For example, you can prepare a response
        $response = array(
            "success" => true,
            "message" => "Data received successfully",
            "data" => $data
        );

        echo json_encode($response);
    } else {
        $response = array(
            "success" => false,
            "message" => "Invalid data received"
        );

        echo json_encode($response);
    }
} else {
    $response = array(
        "success" => false,
        "message" => "Invalid request method"
    );

    echo json_encode($response);
}
?>
