function mostrar()
{

	var clave;


	clave= prompt("ingrese el número clave.");

	while(clave!=="utn750")
	{
		clave= prompt("error, ingrese el número clave.");
	}

	alert("Bienvenido "+clave);


}//FIN DE LA FUNCIÓN
