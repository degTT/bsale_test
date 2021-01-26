<?php
include('./inc/connection.php');
$search = $_GET['search'];
if($mbd){
    if( $search == ''){
        $stmt = $mbd->prepare("SELECT product.name, product.url_image, product.price, product.discount, category.name as category_name  FROM product INNER JOIN category ON product.category = category.id ORDER BY product.category");
    }else{
        $stmt = $mbd->prepare("SELECT product.name, product.url_image, product.price, product.discount, category.name as category_name FROM product INNER JOIN category ON product.category = category.id WHERE product.name LIKE :product ORDER BY category");
        $search = '%'.$search.'%';
        $stmt->bindParam(':product',$search, PDO::PARAM_STR);
    }
    // Ejecutamos
    $stmt->execute();
    // Mostramos los resultados
    if(! $stmt){
        echo "Error al ejecutar la consulta";
    }else{
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($results);
    }
}

?>