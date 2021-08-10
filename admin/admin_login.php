<?php

#kill the session
session_destroy();


#Check if the user is logged in, if so then take them through to the search page
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] == true){
   header("location: admin_home.php");
    exit;
}

#include config file
require_once '../sql//config.php';

#define variables and initialize with empty values
$username = $password = "";
$username_err = $password_err = "";



#Processing for data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){

    #check if username is empty
    if(empty(trim($_POST["username"]))){
        $username_err = "PLease enter username.";
    } else{
        $username = trim($_POST["username"]);
    }

    #check if passwrod is empty
    if(empty(trim($_POST["password"]))){
        $password_err = "Please enter your password.";
    }else{
        $password = trim($_POST["password"]);
    }


    #validate credentials
    if(empty($username_err) && empty($password_err)){

        #prepare a select statement
        $sql = "SELECT id, username, password, priv FROM users WHERE username = ?";

        if($stmt = mysqli_prepare($link, $sql)){
            #bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_username);

            #set parameters
            $param_username = $username;

            #attempt tp execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // store result
                mysqli_stmt_store_result($stmt);
                #read out the number of rows returned
                echo mysqli_stmt_num_rows($stmt);

                #check if username exists, if yes then verify password
                if(mysqli_stmt_num_rows($stmt) == 1){
                    #bind result variables
                    mysqli_stmt_bind_result($stmt, $id, $username, $hashedpassword, $priv);
                    if(mysqli_stmt_fetch($stmt)){
                        if(password_verify($password, $hashedpassword)){
                            # password is correct so start a new session
                            error_log("setting session after successful login");
                            session_start();

                            # store data in session variables
                            $_SESSION["loggedin"] = true;
                            $_SESSION["id"] = $id;
                            $_SESSION["username"] = $username;
                            $_SESSION["priv"] = $priv;

                            #redirect user to welcome page
                            header("location: admin_home.php");


                        } else{
                            #display error message
                            $password_err = "The password you entered was not valid.";
                        }
                    }
                } else{
                    #display an error message if the password is not valid
                    $password_err = "The password is not valid.";
                }
            }


        } else{
            #display an error message if username doesnt exist
            $username_err = "NO account found with that username. ";
        }
    }

    #close statement
    mysqli_close($link);

}
?>

<html>
    <head>
        <title>title</title>
        <link rel="stylesheet" href="../css/login.css" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div class="login-page">
          <div class="form" >
            <form class="login-form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
              <input type="text" placeholder="username" name="username" value="<?php echo $username; ?>"/>
              <input type="password" placeholder="password" name="password" />
              <input type="submit" class="btn btn-primary" value="Login">
              <p class="message"><?php echo $username_err + $password_err; ?></p>
            </form>
          </div>
        </div>
        <script src="../js/main.js"></script>
    </body>
</html>
