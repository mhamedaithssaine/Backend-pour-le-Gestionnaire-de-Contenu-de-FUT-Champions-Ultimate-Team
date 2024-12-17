<?php

include('conectdb.php');


$name = $_POST['name'];
$flag = $_POST['flag'];


$requite = "insert into nationalite (name,flag) values ('$name','$flag')";
$query = mysqli_query($conn,$requite);
if($query){
    echo"<h1>success</h1>";
} else{
    echo"<h1> not success</h1>)";
}

?>