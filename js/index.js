
let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');


let listadoCarrito = document.getElementById('carrito');
let total = document.getElementById('total');

let carrito = [];
let contador = 0;

btn1.onclick = function(){
    let precio = document.getElementById('precio-1').innerText;
    let posicion = carrito.findIndex(element => element.producto === 'Sarten-Aqua')

    if(posicion != -1){
        carrito[posicion].cantidad = carrito[posicion].cantidad + 1;
    }else{
        
        carrito.push({id:contador++,producto:'Sarten-Aqua', precio: precio, cantidad: 1})
    }
    Swal.fire({
         title: 'Se ha añadido al Carrito',
         text: 'Sarten Aqua 🛒✔️',
         icon: undefined,
        width: '300px',
        padding: 'rem',
        background: '#fff',
        grow: false,
        backdrop: false,
        timer: 4500,
        timerProgressBar: true,
        toast: false,
        position: 'bottom-end',
        allowOutsideClick: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
        showConfirmButton: false,
        showCancelButton: false,
        showCloseButton: false,
        closeButtonAriaLabel: 'Cerrar esta alerta',
        imageUrl: 'img/sarten-fin.jpg',
        imageWidth: '100%'
    });
    
    renderizaElementos()
};

btn2.onclick = function(){
    let precio = document.getElementById('precio-2').innerText;
    let posicion = carrito.findIndex(element => element.producto === 'Cacerola')

    if(posicion != -1){
        carrito[posicion].cantidad = carrito[posicion].cantidad + 1;
    }else{
        
        carrito.push({id:contador++,producto:'Cacerola',precio: precio, cantidad: 1})
    }

    Swal.fire({
        title: 'Se ha añadido al Carrito',
        text: 'Cacerola 24cm 🛒✔️',
        icon: undefined,
       width: '300px',
       padding: 'rem',
       background: '#fff',
       grow: false,
       backdrop: false,
       timer: 4500,
       timerProgressBar: true,
       toast: false,
       position: 'bottom-end',
       allowOutsideClick: false,
       allowEscapeKey: false,
       stopKeydownPropagation: false,
       showConfirmButton: false,
       showCancelButton: false,
       showCloseButton: false,
       closeButtonAriaLabel: 'Cerrar esta alerta',
       imageUrl: 'img/aquacacerola24cm.jpg',
       imageWidth: '100%'
   });

    renderizaElementos()
};

btn3.onclick = function(){
    
    let precio = document.getElementById('precio-3').innerText;
    let posicion = carrito.findIndex(element => element.producto === 'Rectangular')

    if(posicion != -1){
    
        carrito[posicion].cantidad = carrito[posicion].cantidad + 1;
    }else{
        
        carrito.push({id:contador++,producto:'Rectangular',precio: precio, cantidad: 1})
    }

    Swal.fire({
        title: 'Se ha añadido al Carrito',
        text: 'Rectangular Aqua 🛒✔️',
        icon: undefined,
       width: '300px',
       padding: 'rem',
       background: '#fff',
       grow: false,
       backdrop: false,
       timer: 4500,
       timerProgressBar: true,
       toast: false,
       position: 'bottom-end',
       allowOutsideClick: false,
       allowEscapeKey: false,
       stopKeydownPropagation: false,
       showConfirmButton: false,
       showCancelButton: false,
       showCloseButton: false,
       closeButtonAriaLabel: 'Cerrar esta alerta',
       imageUrl: 'img/RectangularAqua.jpg',
       imageWidth: '100%'
   });

    renderizaElementos()
};

btn4.onclick = function(){
    let precio = document.getElementById('precio-4').innerText;
    let posicion = carrito.findIndex(element => element.producto === 'Aqua-Flip')

    if(posicion != -1){
        carrito[posicion].cantidad = carrito[posicion].cantidad + 1;
    }else{
        
        carrito.push({id:contador++,producto:'Aqua-Flip',precio: precio, cantidad: 1})
    }

    Swal.fire({
        title: 'Se ha añadido al Carrito',
        text: 'Aqua Flip 🛒✔️',
        icon: undefined,
       width: '300px',
       padding: 'rem',
       background: '#fff',
       grow: false,
       backdrop: false,
       timer: 4500,
       timerProgressBar: true,
       toast: false,
       position: 'bottom-end',
       allowOutsideClick: false,
       allowEscapeKey: false,
       stopKeydownPropagation: false,
       showConfirmButton: false,
       showCancelButton: false,
       showCloseButton: false,
       closeButtonAriaLabel: 'Cerrar esta alerta',
       imageUrl: 'img/aquaflip.jpg',
       imageWidth: '100%'
   });

    renderizaElementos()
};


const renderizaElementos = ()=>{
    listadoCarrito.innerHTML = ''
    let sumaTotal = 0;
    if(carrito.length>0){
        for (let index = 0; index < carrito.length; index++) {
            let elemento = document.createElement('div');
            elemento.innerHTML = `  <p>
                                    Producto: ${carrito[index].producto},
                                    Cantidad: ${carrito[index].cantidad}</p>`;
            sumaTotal = sumaTotal + (parseInt(carrito[index].precio) * parseInt(carrito[index].cantidad));
            listadoCarrito.append(elemento);
            total.innerText = `Total: $${sumaTotal}`;

            let btn5 = document.getElementById('btn-5');
                btn5.addEventListener('click', function(){Swal.fire({
                title: 'El precio total de tu compra es de: ' + '💲' + sumaTotal,
                text: 'GRACIAS!! 💙',
                icon: 'success'
            })})
        }
    }
}

