<!doctype html>

<html lang="sv-SE">
<head>
  <meta charset="utf-8">
  <title>PHP edit structure -made by Daniel Torelm 2021</title>
  <meta name="robots" content="noindex">
</head>

<body>

<?php
  $postedData = file_get_contents('php://input');
  file_put_contents('index-modules.html', $postedData);
  
?>
	
</body>
</html>


