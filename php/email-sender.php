<?php
session_cache_limiter('nocache');
header('Expires: ' . gmdate('r', 0));
header('Content-type: application/json');

$Recipient = 'juan.pernumian@gmail.com; info@bilog.com.ar;' // <-- Set your email here

if($Recipient) {
  echo json_encode($_POST);
  echo json_encode($_POST['name']);
  echo json_encode($_POST['email']);

	$Name = $_POST['name'];
	$Email = $_POST['email'];
	$Subject = 'Bilog - Contacto desde la Web';
	$Message = $_POST['message'];
	$Phone = $_POST['phone'];
  	$Expertise = $_POST['expertise'];
  	$Preference = $_POST['preference'];
	$TalkTo = $_POST['talkTo'];
  
	$Email_body = "";
	$Email_body .= "De: " . $Name . "\n" .
				   "Email: " . $Email . "\n" .
				   "Asunto: " . $Subject . "\n" .
				   "Telefono: " . $Phone . "\n" .
				   "Profesion: " . $Expertise . "\n" .
				   "Quiere que lo/la contacten por: " . $Preference . "\n" .
				   "Quiere hablar con: " . $TalkTo . "\n" .
           		   "Mensaje: " . $Message . "\n";

	$Email_headers = "";
	$Email_headers .= 'Desde: Web ' . $Name . ' <' . $Email . '>' . "\r\n".
					  "Reply-To: " .  $Email . "\r\n";

	$sent = mail($Recipient, $Subject, $Email_body, $Email_headers);

	if ($sent){
		$emailResult = array ('sent'=>'yes');
	} else{
		$emailResult = array ('sent'=>'no');
	}

	echo json_encode($emailResult);

} else {

	$emailResult = array ('sent'=>'no');
	echo json_encode($emailResult);

}
?>
