function mostrar()
{
	var promedio;
	var contador;
	var acumulador;
	var numero;

	contador=0;
	acumulador=0;


	acumulador=parseInt(acumulador);

	while(contador<5)
	{
		contador++;

		numero=prompt("Ingrese un numero");

		numero=parseInt(numero);

		acumulador=acumulador+numero;


	}


promedio=acumulador/contador;



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN