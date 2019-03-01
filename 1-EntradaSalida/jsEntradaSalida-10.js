/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeUno;
	var descuento;
	var resultadoTotal;

	importeUno=importe.value;

	importeUno=parseInt(importeUno);

	descuento=importeUno*25/100;
	descuento=parseInt(descuento);

	resultadoTotal=importeUno-descuento;

	resultado.value=resultadoTotal;

}
