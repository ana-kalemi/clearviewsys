<?php
if (!$_POST) {
    exit;
}
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    foreach ($_POST as $key => $value) {
        if (ini_get('magic_quotes_gpc')) {
            $_POST[$key] = stripslashes($_POST[$key]);
        }
        $_POST[$key] = htmlspecialchars(strip_tags($_POST[$key]));
    }
    $email = @$_POST["email"];
    $subject = "Message from visitor of Blue rate money exchange Website";
    $name = @$_POST['name'];
    $office_address = @$_POST['address'];
    $to = 'cindychen2088@gmail.com';

    /**@var \PHPMailer\PHPMailer\PHPMailer $mail */
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);// Passing `true` enables exceptions
    try {
        $mailBody = '<html><head><meta http-equiv="content-type" content="text/html; charset=utf-8" />';
        $mailBody .= '</head><body>';
        $mailBody .= '<table  border="0" cellpadding="0" cellspacing="0" style=\'width:100%; font-size:12px; margin:0; padding:0;\' >';
        $mailBody .= '<tr><td>';
        $mailBody .= "Message From Blue rate money exchange Website!<br>";
        $mailBody .= "Visitor name: $name<br>";
        $mailBody .= "Email: $email<br>";
        $mailBody .= "Message: $message<br>";
        $mailBody .= "Blue rate money exchange Office: $address<br>";
        $mailBody .= "------------------------------------------------------------------------------------------- <br>";
        $mailBody .= '</td>';
        $mailBody .= '<td>';
        $mailBody .= '</td></tr>';
        $mailBody .= "</table></body></html>";

        //From email address and name
        $mail->From = $email;
        $mail->FromName = 'Blue rate money exchange Website';

        //To address and name
        $mail->addAddress($to, "Blue rate money exchange");

        //Address to which recipient will reply
        $mail->addReplyTo($email, $name);

        //Send HTML or Plain Text email
        $mail->isHTML(true);
        $mail->CharSet = "UTF-8";
        $mail->Subject = $subject;
        $mail->Body = $mailBody;
        $mail->send();
        echo "<div class='mail-response success'>Thank you, Your message was sent</div>";

    } catch (Exception $e) {
        $response = "<div class='mail-response error'>Sorry, your message wasn't sent. Please will try later or contact us by phone</div>";
        echo $response;
    }
}