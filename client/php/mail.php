<?
require("class.phpmailer.php");


	//form validation vars
	$formok = true;
	$errors = array();
	
	//sumbission data
	$ipaddress = $_SERVER['REMOTE_ADDR'];
	$date = date('d/m/Y');
	$time = date('H:i:s');
	
	//form data
	$firstName = $_POST['name'];
	$email = $_POST['email'];
	$mobile = $_POST['phone'];
	$sujet = $_POST['sujet'];
	$message = $_POST['message'];


	$mail = new PHPMailer();

	$mail->IsSMTP();                                 				 // send via SMTP - mail or smtp.domain.com
	$mail->Host     = "mail.domain.com"; 							 // SMTP servers
	$mail->SMTPAuth = true;    										 // turn on SMTP authentication
	$mail->Username = "noreply@domain.com"; 						 // SMTP username
	$mail->Password = "passowrd";									 // SMTP password

	$mail->From     = "noreply@domain.com";							 // SMTP username
	$mail->AddAddress("your@domain.com");					  		 // Your Adress
	$mail->Subject  =  "New mail from Food Lover";
	$mail->IsHTML(true);  
	$mail->CharSet = 'UTF-8';
	$mail->Body     =  "<p>You have recieved a new message from the enquiries form on your website.</p>
						  <p><strong>First name: </strong> {$firstName} </p>
						  <p><strong>Email Address: </strong> {$email} </p>
						  <p><strong>Mobile: </strong> {$mobile} </p>
						  <p><strong>Sujet: </strong> {$sujet} </p>
						  <p><strong>Message: </strong> {$message} </p>
						  <p>This message was sent from the IP Address: {$ipaddress} on {$date} at {$time}</p>";

	if(!$mail->Send())
	{
	   echo "Mail Not Sent <p>";
	   echo "Mailer Error: " . $mail->ErrorInfo;
	   exit;
	}

	echo "Mail Sent";


?>
