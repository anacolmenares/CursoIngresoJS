/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldoBruto;
	var aumento;
	var resultadoTotal;
	
	sueldoBruto=sueldo.value;
	
	sueldoBruto=parseInt(sueldoBruto);
	

	aumento=sueldoBruto*10/100;
	aumento=parseInt(aumento);

	resultadoTotal=sueldoBruto+aumento;

	resultado.value=resultadoTotal;

	
}
