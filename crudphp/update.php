<?php

include('../conectdb.php');
if (isset($_GET['id'])) {
    
    $nationality_id = $_GET['id'];
    $requete = "SELECT * FROM nationalite WHERE nationalite_id = $nationality_id";
    $query = mysqli_query($conn, $requete);
    $row = mysqli_fetch_assoc($query);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $nationality_id = $GET['nationalite_id'];
    $name = $_POST['name'];
    $flag = $_POST['flag'];

    $requete = "UPDATE nationalite SET name = '$name', flag = '$flag' WHERE nationalite_id = $nationality_id";
    mysqli_query($conn, $requete);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Nationality</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <h2>Edit Nationality</h2>
    <form action="edit_nationality.php" method="POST">
        <input type="hidden" name="nationalite_id" value="<?php echo $row['nationalite_id']; ?>">
        <input type="text" name="name" value="<?php echo $row['name']; ?>" required>
        <input type="url" name="flag" value="<?php echo $row['flag']; ?>" required>
        <button type="submit">Save</button>
    </form>
</body>
</html>