<?php
session_cache_limiter('nocache');
header('Expires: ' . gmdate('r', 0));
header('Content-type: application/json');

$Recipient = $_POST['recipient'];

if($Recipient) {
  echo json_encode($_POST);

	$Email = 'no-reply@bilog.com.ar'; 
	$Subject = 'Bilog - Soluciones informáticas';
  
	$Email_body = "";
  $Email_body .= "De: " . $Email . "\n\n" . "Hola! Muchas gracias por enviarnos tu consulta." . "\n" . "Nos estaremos contactando a la brevedad!" . "\n" . "Saludos!" . "\n\n" . "Este mensaje es generado automáticamente, por favor no responder.";

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
