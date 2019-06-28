<?php
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
        header('Access-Control-Allow-Headers: Accept,Accept-Language,Content-Language,Content-Type');

$data = json_decode(file_get_contents("php://input"));
include "db.php";

$sql = "INSERT INTO contacts (name, email, phone, message)
VALUES ('$data->name', '$data->email', '$data->phone', '$data->message')";
if($data->name){
    $qry = $conn->query($sql);
}
        $formdata = json_decode(file_get_contents('php://input'), true);

        $name = $formdata['name'];
        $email = $formdata['email'];
        $phone = $formdata['phone'];
        $message = $formdata['message'];

        $contactData = array(
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'message' => $message,
            'created_at' => date('Y-m-d H:i:s', time())
        );

        $to = "serge.semete@robotile.fr";
        $subject = "Nouveau contact";

        $content = '<p>Bonjour Serge <br />Vous avez reçu un nouveau message du formulaire de contact</p>';
        $content .= '<p><strong>Nom: </strong>'.$name.'</p>';
        $content .= '<p><strong>Email: </strong>'.$email.'</p>';
        $content .= '<p><strong>Téléphone: </strong>'.$phone.'</p>';
        $content .= '<p><strong>Message: </strong>'.$message.'</p>';

        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        $headers .= 'From: <serge.semete@robotile.fr>' . "\r\n";

        mail($to,$subject,$content,$headers);

        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($response));

//        return $contactData;

?>
