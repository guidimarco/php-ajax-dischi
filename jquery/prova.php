<?php
    $dischi = $_GET;

    header('Content-Type: application/json');
    echo json_encode($dischi);
?>
