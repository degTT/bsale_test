<?php

 $mbd = null;

    try {
        $mbd = new PDO('mysql:host=mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com;dbname=bsale_test;charset=utf8', 'bsale_test', 'bsale_test');
    } catch (PDOException $e) {
        print "¡Error!: " . $e->getMessage() . "<br/>";
        die();
    }
?>