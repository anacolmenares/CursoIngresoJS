function mostrar()
{

	var numero;

	numero = prompt("ingrese un número entre 0 y 10.");

	while(numero<0 || numero>9)
	{
		numero = prompt("error, ingrese un número entre 0 y 10.");

	}


		Numero.value=numero;

}//FIN DE LA FUNCIÓN