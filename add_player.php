
<?php

include('conectdb.php');


$name = $_POST['name'];
$position = $_POST['position'];
$rating = $_POST['rating'];

$requite = "insert into joueurs (name, position, rating) values ('$name','$position','$rating')";
$query = mysqli_query($conn,$requite);
if($query){
    echo"<h1>success</h1>";
} else{
    echo"<h1> not success</h1>)";
}




?>