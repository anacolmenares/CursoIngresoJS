/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	suma=primerNumero+segundoNumero;

	alert("la sema es: "+suma);
	
}

function restar()
{
	var unoNumero;
	var dosNumero;
	var resta;

	unoNumero=numeroUno.value;
	dosNumero=numeroDos.value;

	unoNumero=parseInt(unoNumero);
	dosNumero=parseInt(dosNumero);

	resta=unoNumero-dosNumero;

	alert("la resta es: "+resta);	
}

function multiplicar()
{ 
	var numeroPrimer;
	var numeroSegundo;
	var multiplicar;

	numeroPrimer=numeroUno.value;
	numeroSegundo=numeroDos.value;

	numeroPrimer=parseInt(numeroPrimer);
	numeroSegundo=parseInt(numeroSegundo);

	multiplicar=numeroPrimer*numeroSegundo;

	alert("la multiplicacion es: "+multiplicar);

}

function dividir()
{
	var dividendo;
	var divisor;
	var division;

	dividendo=numeroUno.value;
	divisor=numeroDos.value;

	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);

	division=dividendo/divisor;

	alert("la division es: "+division);
}

