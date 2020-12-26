<?php
    require 'PHPMailer-master/PHPMailerAutoload.php';

    $mail = new PHPMailer();

    try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      
    $mail->isSMTP();                                           
    $mail->Host       = 'smtp.gmail.com';                       
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'fejsalpervatest@gmail.com';           
    $mail->Password   = '***';                 
    $mail->Port       = 465;                                   
    $mail->SMTPSecure = 'ssl';

    //Recipients
    $mail->setFrom('fejsalpervatest@gmail.com', 'Mailer');
    $mail->addAddress('fejsal.perva1705@gmail.com', 'Me');      

    // Content
    $mail->isHTML(true);                                     
    $mail->Subject = $_POST['subject'];
    $name = $_POST['first_name'];
    $surname = $_POST['last_name'];
    $email = $_POST['email'];
    $reason = $_POST['reason'];
    $message = $_POST['message'];
    
    $mail->Body = $name." ".$surname.", asked following:<br><br>".$message. "<br><br>The reason for contact was: ".$reason."<br><br>Contact: ".$email;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    header('Location: index.html?error');
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
header("Location: index.html");
?>