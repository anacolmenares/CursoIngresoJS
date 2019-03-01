function mostrar()
{
//tomo la edad  

	var edadUno;
	var mensaje;

	edadUno=edad.value;

	if(edadUno>=18)
	{
		mensaje=("mayor de edad");
	}else{

		if(edadUno>=13 && edadUno<=17)
		{
			mensaje=("adolescente");
		}else{

			mensaje=("niño");
		}
	}
		alert(mensaje);

}//FIN DE LA FUNCIÓN