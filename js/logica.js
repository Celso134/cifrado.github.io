//Se utilizará javascript version 6, 
//apartir de funciones de tipo callback y
// y funciones anónimas

var cesar = cesar || (function(){
	//para cifrar se necesita
	//texto, desplazamiento y accipon

	var doStaff = function(txt, desp, action){
		//variable que se encarga del remplazo
		//para realizar movimientos del cifrado

		var replace = (function(){
			//definir alfabeto
			var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
			//saber la longitud
			var a = abc.length;
			//voy a retornar de mi funcion
			return function(c){
				//aqui se hace la lógica del cifrado y decifrado

				var i = abc.indexOf(c.toLowerCase());
				//saber si está vacío el campo

				if(i != -1){
					//no está vacía

					var pos = i;
					//cifrar o decifrar

					if(action){
						//cifrando

						pos += desp;
					}else{
						//decifrando

						pos -= desp;
					}
					return abc[pos];
				}
				return c;
			};
		})();
		//tenemos que realizar una prueba del texto
		//escribiendo en el textarea para que sea
		//lo que quiero
		var re= (/([a-zñ])/ig);
		return String(txt).replace(re, function(match){
			return replace(match);
		});
	}
	//necesitar saber que estoy mandando
		//cifrando o decifrando, eso viene partir del boton
		//cuyas funciones son para codificar o decodificar

		return{
			encode : function(txt, desp){
				return doStaff(txt, desp, true);
			},
			decode : function(txt, desp){
				return doStaff(txt, desp, false);
			}
		};
})();

//voy a crear mis funciones de cifrado

//function codificar(){
//	document.getElementById('resultado').innerHTML = cesar.encode(
//		document.getElementById('cadena').value, 10
//		);
//}
//function decodificar(){
//	document.getElementById('resultado').innerHTML = cesar.decode(
//		document.getElementById('cadena').value, 10
//		);
//}

function codificar(){
	var xd = "";
	var jump = parseInt(document.getElementById('salto').value);
	jump = jump%27;
	var yeah = 0;
	var mod = 0;
	var aux = 0;
	if(Number.isInteger(jump) && jump > -1 && parseInt(document.getElementById('salto').value) < 10001){
		for(var i = 0; i < document.getElementById('cadena').value.length; i++){
			if(document.getElementById('cadena').value.charCodeAt(i) < 65 && document.getElementById('cadena').value.charCodeAt(i)!= 32){
				window.alert('Error en el formato a codificar');
				i=document.getElementById('cadena').value.length;
				xd="Error";
			}else{
				if(document.getElementById('cadena').value.toLowerCase().charCodeAt(i) == 241 || document.getElementById('cadena').value.charCodeAt(i) == 209){
					aux = 15+jump;
					aux = aux%27;
					xd += suich(aux);
					aux = 0;
					}else{
						if(document.getElementById('cadena').value.charCodeAt(i) == 32){
						xd += " ";
					}else{
						if(document.getElementById('cadena').value.toLowerCase().charCodeAt(i) > 110){
							yeah = document.getElementById('cadena').value.toLowerCase().charCodeAt(i);
							yeah += 1;
							yeah -= 96;
							yeah += jump;
							mod = yeah%27;
							xd += suich(mod);
							yeah = 0;
							mod = 0;
						}else{
							yeah = document.getElementById('cadena').value.toLowerCase().charCodeAt(i);
							yeah -= 96;
							yeah += jump;
							mod = yeah%27;
							xd += suich(mod);
							yeah = 0;
							mod = 0;
						}
					}
				}
			}
		}
		document.getElementById('resultado').innerHTML = xd;
	}else{
		if(jump > -1){
			window.alert('Numero demasiado grande');
		}else{
			window.alert("Erorr en el formato.");
		}
	}

//	for(var i = 0; i < document.getElementById('cadena').value.length; i++){
//		console.log(document.getElementById('cadena').value.charCodeAt(i));
//		xd += document.getElementById('cadena').value.charCodeAt(i).toString();
//	}
}


function decodificar(){
	var xd = "";
	var jump = parseInt(document.getElementById('salto').value);
	jump = jump%27;
	var yeah = 0;
	var mod = 0;
	var aux = 0;
	if(Number.isInteger(jump) && jump > -1 && parseInt(document.getElementById('salto').value) < 10001){
		for(var i = 0; i < document.getElementById('cadena').value.length; i++){
			if(document.getElementById('cadena').value.toLowerCase().charCodeAt(i) == 241){
				aux = 15-jump;
				aux = aux%27;
				xd += suich(aux);
			}else{
				if(document.getElementById('cadena').value.charCodeAt(i) == 32){
					xd += " ";
				}else{
					if(document.getElementById('cadena').value.toLowerCase().charCodeAt(i) > 110){
						yeah = document.getElementById('cadena').value.toLowerCase().charCodeAt(i);
						yeah += 1;
						yeah -= 15+jump;
						mod = yeah%27;
						xd += suich(mod);
						yeah = 0;
						mod = 0;
					}else{
						yeah = document.getElementById('cadena').value.toLowerCase().charCodeAt(i);
						yeah -= 15+jump;
						mod = yeah%27;
						xd += suich(mod);
						yeah = 0;
						mod = 0;
					}
				}
			}
		}
		document.getElementById('resultado').innerHTML = xd;
	}else{
		if(jump > -1){
			window.alert('Numero demasiado grande');
		}else{
			window.alert("Erorr en el formato debe introducir un número.");
		}

	}

}

function suich(uwu){
	switch(uwu){
		case 0: return "z";
		case 1: return "a";
		case 2: return "b";
		case 3: return "c";
		case 4: return "d";
		case 5: return "e";
		case 6: return "f";
		case 7: return "g";
		case 8: return "h";
		case 9: return "i";
		case 10: return "j";
		case 11: return "k";
		case 12: return "l";
		case 13: return "m";
		case 14: return "n";
		case 15: return "ñ";
		case 16: return "o";
		case 17: return "p";
		case 18: return "q";
		case 19: return "r";
		case 20: return "s";
		case 21: return "t";
		case 22: return "u";
		case 23: return "v";
		case 24: return "w";
		case 25: return "x";
		case 26: return 'y';
	}
}