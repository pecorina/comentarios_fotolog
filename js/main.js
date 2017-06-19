/*aquí va tu código*/

/*key es donde se encuentra almacenada la clave ej: nombres*/
/*funcion boton*/
function init(){
	var button = document.getElementById("boton");
	button.addEventListener("click", guardarDatos);
	guardarDatos();
}

/*funcion guardar datos*/
function guardarDatos(){
	var clave = document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;

	localStorage.setItem(clave, valor);

	/*limpia contenedor para no repetir valores en html*/
	var contenedor = document.getElementById("ale");
	contenedor.innerHTML="";

	/*recorre los valores ingresados*/
	for(var i = 0; i < localStorage.length; i++);
		var kei = localStorage.key(i);/*key toma info y la devuelve como valor string*/
		var values = localStorage.getItem(kei);/*getItem devuelve valor del kei*/
}
  
  	/*creando contenedor*/
	var caja = document.createElement("div");
	caja.classList.add("cajita");

	/*informacion que va dentro del contenedor(nombre usuario)*/
	var titulo = document.createElement("h1");/*titulo es el padre*/
	var nombre = document.createTextNode(kei);/*crea un nodo hijo*/
	titulo.classList.add("datos-usuario");/*agrega una clase al padre*/
	titulo.appendChild(nombre);/*le asigna un padre al nodo hijo*/

	var parrafo = document.createElement("p");/*titulo es el padre*/
	var comentario = document.createElement("values");/*nombre es el hijo*/
	parrafo.classList.add("post");/*agrega una clase al padre*/
	parrafo.appendChild(comentario);/*le asigna un padre al nodo hijo*/

/*Luego asignamos el padre(caja) a los hijos (nombre y comentarios) para guardarlos.*/
	caja.appendChild(nombre);
	caja.appendChild(comentario);
/*finalmente le asignamos el padre (contenedor) al hijo (caja), donde me muestra todo el contenedor creado*/
	contenedor.appendChild(caja);



/*funcion boton 2*/
function init(){
	var button = document.getElementById("boton2");
	button.addEventListener("click", limpiar);
}


function limpiarDatos(){
	localStorage.clear();
	guardarDatos();	
}