<!doctype html>

<html lang="sv-SE">
<head>
  <meta charset="utf-8">
  <title>PHP form handler -made by Daniel Torelm 2020</title>
  <meta name="robots" content="noindex">
</head>

<body>
<?php 

/*if(isset($_POST['submit'])) {
    $email = $_POST['E-post'];
    $name = $_POST['Namn'];
    $nominated = $_POST['Nominerad'];
    $motivation = $_POST['Motivering'];
    $category = $_POST['Nomineringskategori'];
    // Check whether submitted data is not empty
    if(!empty($email) && !empty($name) && !empty($subject) && !empty($message)  && !empty($category)){
        
        if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
           echo 'Du behöver fylla i korrekt e-postadress';
          
        } else {
            // Recipient email
            $toEmail = 'glade79@hotmail.com';
            $emailSubject = 'Skickat via Glädjefabriken av '.$name;
            $htmlContent = '<h2>Formulärdata.</h2>
                <h4>Name</h4><p>'.$name.'</p>
                <h4>Email</h4><p>'.$email.'</p>
                <h4>Nominated</h4><p>'.$nominated.'</p>
                <h4>Nomineringskategori</h4><p>'.$category.'</p>
                <h4>Motivation</h4><p>'.$motivation.'</p>';
            
            // Set content-type header for sending HTML email
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
            
            // Additional headers
            $headers .= 'From: '.$name.'<'.$email.'>'. "\r\n";
            
            // Send email
            if(mail($toEmail,$emailSubject,$htmlContent,$headers)){
                echo 'Your contact request has been submitted successfully !';
                file_put_contents('formdata.txt', $htmlContent);
                echo '<script type="text/javascript">
                window.location = "http://www.google.com/"
           </script>';
            }else{
                echo 'Your contact request submission failed, please try again.';
               
            }
        }
    } else{
        echo 'Please fill all the fields.';
        
    }
}*/
?>
<?php
  //$postedData = file_get_contents('php://input');
  $output = "";
  foreach($_POST as $key => $value) {
    //echo "'$key' : '$value' <br>";
    $output .= "$key : $value, ";
  }
  $output .= "\r\n\r\n"; //for linebreake

  $to = 'gladje2020@gmail.com';
  $subject = 'Från glädjefabriken';
  

  $message = $output;
  // In case any of our lines are larger than 70 characters, we should use wordwrap()
  $message = wordwrap($message, 70, "\r\n");
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html; charset=UTF-8" . "\r\n";

  file_put_contents('formdata.txt', $output, FILE_APPEND);
  mail($to, $subject, $message, $headers);

  
 
?>
<script>
window.location.replace('formHandler_thx.php');
</script>	
</body>
</html>


