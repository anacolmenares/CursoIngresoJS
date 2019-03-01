function mostrar()
{
//tomo la edad  
	var edadUno;
	var estadoCivilUno;

	edadUno=edad.value;
	estadoCivilUno=estadoCivil.value;
	console.log(estadoCivilUno);

	if(edadUno<18 && estadoCivilUno!=="Soltero")
	{
		mensaje=("Es muy pequeño para no ser soltero")
	}
	
	alert(mensaje);


}//FIN DE LA FUNCIÓN