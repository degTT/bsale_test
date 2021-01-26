function getProduct(){
  document.getElementById('customDiv').innerHTML = ''
  let search = document.getElementById('search').value
  fetch('http://localhost:8080/bsale_fin/API/productos.php?search='+search,{
    mode: 'cors',
    'headers': {
      'Access-Control-Allow-Origin': '*',
    }
  })
  .then( response => response.json())
  .then(data => {
    if(data.length !== 0){
      for(let product in data){
        renderProduct(data[product])
      }
    }else{
      notResult();
    }
  })
}

window.onload = () => {
  getProduct()
}

document.getElementById('search').addEventListener('keyup', function (e) {
  if (e.keyCode == 13) {

    getProduct()
  }
});

function renderProduct(product){

    let template = ` 
    <div class="column">
      <div class="demo-title">${product.category_name}</div>
      <div class="post-module">
      <div class="thumbnail">
        <div class="date">
          <div class="day">27</div>
          <div class="month">Mar</div>
        </div><img src="${ product.url_image !== null && product.url_image !== '' ? product.url_image : './img/sin_imagen.jpg'}"/>
      </div>
      <!-- Post Content-->
      <div class="post-content">
        <div class="category" style="display:${product.discount > 0 ? 'block': 'none'}"> Dscto. de $ ${product.discount ? product.discount: 'Sin descuento'}</div>
        <h1 class="sub_title">$ ${product.price ? product.price : 'Sin Precio'}</h1>
        <h2 class="title">${product.name ? product.name : 'Sin Nombre'}</h2>
        <p class="description"></p>
      </div>
    </div>
  </div>
  `
  document.getElementById('customDiv').innerHTML += template
}

function notResult(){
  template = `
  <div class="notResult">
    <h1>Busqueda sin resultados................</h1>
  </div>
  `
  document.getElementById('customDiv').innerHTML += template
  document.getElementById('search').value = ''

}