<?php
$login=$_POST["login"];
$email=$_POST["email"];
$password=$_POST["password"];
$login=trim($login);
$login=htmlspecialchars($login);
$login=strip_tags($login);
$email=trim($email);
$email=htmlspecialchars($email);
$email=strip_tags($email);
$password=trim($password);
$password=htmlspecialchars($password);
$password=strip_tags($password);
if(isset($login) && isset($password) && isset($email)){
	include "db.php";
	mysql_query("INSERT INTO users (login, email, password) values('$login','$email','$password');");
	mail("pasha.kuzmuk@gmail.com", "My Subject", "Line 1\nLine 2\nLine 3");
	header('Location:success.html');
}
else{
	header('Location:error.html');
}
?>