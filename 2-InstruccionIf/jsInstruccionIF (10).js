function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;
	var mensaje;

	notaRandom=Math.floor((Math.random()*10)+1);

	if(notaRandom>=9)
	{

		mensaje=("EXCELENTE");
	}else{

		if(notaRandom>=4)
		{
			mensaje=("APROBO");
		}else{

			mensaje=("Vamos, la proxima se puede");
		}
	}

	alert(mensaje);
	console.log(notaRandom);
}//FIN DE LA FUNCIÓN