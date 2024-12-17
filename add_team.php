
<?php

include('conectdb.php');


$name = $_POST['name'];
$logo = $_POST['logo'];


$requite = "insert into club (name,logo) values ('$name','$logo')";
$query = mysqli_query($conn,$requite);
if($query){
    echo"<h1>success</h1>";
} else{
    echo"<h1> not success</h1>)";
}




?>