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
        return $contactData;

//        sendemail($contactData);

//        $response = array('id' => $id);
//
//        if( ! empty($formdata)) {
//
//            $name = $formdata['name'];
//            $email = $formdata['email'];
//            $phone = $formdata['phone'];
//            $message = $formdata['message'];
//
//            $contactData = array(
//                'name' => $name,
//                'email' => $email,
//                'phone' => $phone,
//                'message' => $message,
//                'created_at' => date('Y-m-d H:i:s', time())
//            );
//
//            $id = insert_contact($contactData);
//
//            sendemail($contactData);
//
//            $response = array('id' => $id);
//        }
//        else {
//            $response = array('id' => '');
//        }
//
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($response));
//
//    function sendemail($contactData)
//    {
//        $message = '<p>Hi, <br />Some one has submitted contact form.</p>';
//        $message .= '<p><strong>Name: </strong>'.$contactData['name'].'</p>';
//        $message .= '<p><strong>Email: </strong>'.$contactData['email'].'</p>';
//        $message .= '<p><strong>Phone: </strong>'.$contactData['phone'].'</p>';
//        $message .= '<p><strong>Name: </strong>'.$contactData['message'].'</p>';
//        $message .= '<br />Thanks';
//
//        $this->load->library('email');
//
//        $config['protocol'] = 'sendmail';
//        $config['mailpath'] = '/usr/sbin/sendmail';
//        $config['charset'] = 'iso-8859-1';
//        $config['wordwrap'] = TRUE;
//        $config['mailtype'] = 'html';
//
//        $this->email->initialize($config);
//
//        $this->email->from('bemo@rsgitech.com', 'RSGiTECH');
//        $this->email->to('demo2@rsgitech.com');
//        $this->email->cc('another@rsgitech.com');
//        $this->email->bcc('them@rsgitech.com');
//
//        $this->email->subject('Contact Form');
//        $this->email->message($message);
//
//        $this->email->send();
//    }

//    function insert_contact($contactData)
//    {
//        $this->db->insert('contacts', $contactData);
//        return $this->db->insert_id();
//    }
?>
