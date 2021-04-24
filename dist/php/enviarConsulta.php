<?php
// require_once('phpmailer/PHPMailerAutoload.php');
// include('definiciones.php');

extract($_POST);
// $destinatario = "Eva Nicosia<evanicosia@gmail.com>";
$destinatario = "julianra@gmail.com";
$cabeceras  = "MIME-Version: 1.0\r\n";
$cabeceras .= "Content-type: text/html; charset=utf-8\r\n";
$cabeceras .= "From: " . $nombre . "<" . $email . ">\r\n";
$cabeceras .= "Reply-To: " . $email . "\r\n";

$message_success = 'Recibimos su consulta, pronto nos pondremos en contacto';

// Add this only if you use reCaptcha with your Contact Forms
$recaptcha_secret = ''; // Your reCaptcha Secret

$subject = 'Consulta de AgroCoin.com.ar';

$nombre = $nombre !== null ? $nombre . "<br><br>" : '';
$empresa = $empresa !== null ? $empresa . "<br><br>" : '';
$email = $email !== null ? $email . "<br><br>" : '';
$celular = $celular !== null ? $celular . "<br><br>" : '';
$consulta = $consulta !== null ? $consulta . "<br><br>" : '';

$referrer = $_SERVER['HTTP_REFERER'] ? '<br><br><br>Este mensaje fue enviado desde: ' . $_SERVER['HTTP_REFERER'] : '';

// $body = "$name $email $phone $service $message $referrer";

$cuerpo = "<style type='text/css'>
		<!--
		.texto {
			font-family: Tahoma, Verdana, Arial;
			font-size: 12px;
			font-weight:bold}
		.datos {font-family: Tahoma, Verdana, Arial;
		font-size: 12px}
		-->
		</style>
		<table width='352' border='0' align='left' cellpadding='0' cellspacing='0'>
		    <tr class='textos'>
		      <td align='left' nowrap='nowrap' class='texto'><strong>Nombre:</strong></td>
		      <td align='left' class='datos'>$nombre</td>
		    </tr>
		    <tr class='textos'>
		      <td align='left' nowrap='nowrap' class='texto'><strong>Empresa:</strong></td>
		      <td align='left' class='datos'>$empresa</td>
		    </tr>
		    <tr class='textos'>
		      <td align='left' class='texto'><strong>Email:</strong></td>
		      <td align='left' class='datos'>$email</td>
		    </tr>
		    <tr class='textos'>
		      <td align='left' class='texto'><strong>Celular:</strong></td>
		      <td align='left' class='datos'>$celular</td>
		    </tr>
		    <tr class='textos'>
		      <td align='left' valign='top' class='texto'><strong>Mensaje:</strong></td>
		      <td align='left' class='datos'>" . nl2br($consulta) . "</td>
		    </tr>
		</table>";

ini_set("sendmail_from", "info@agrocoin.com.ar");

if ($_SERVER['DOCUMENT_ROOT'] != 'F:/Usuarios/Julian/www')
	mail($destinatario, $subject, $cuerpo, $cabeceras);
header("LOCATION: ..#/confirmacion");
