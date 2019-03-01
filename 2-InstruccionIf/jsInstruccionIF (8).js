function mostrar()
{
//tomo la edad  

	var edadUno;
	var estadoCivilUno;
	var mensaje;

	edadUno=edad.value;
	estadoCivilUno=estadoCivil.value;

	if(edadUno<18 && estadoCivilUno!=="Soltero")
	{


	}else{

		if(edadUno>17 && estadoCivilUno=="Soltero")
		{
			mensaje=("Es soltero y no es menor");
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN