<!doctype html>

<html lang="sv-SE">
<head>
  <meta charset="utf-8">
  <title>PHP write data -made by Daniel Torelm 2020</title>
  <meta name="robots" content="noindex">
</head>

<body>

<?php
  $postedData = file_get_contents('php://input');
  file_put_contents('../datastore.json', $postedData);
  
  //$postedData2 = "export const dataStore =" . $postedData;
  //file_put_contents('../datastore.js', $postedData2); 

?>
	
</body>
</html>


