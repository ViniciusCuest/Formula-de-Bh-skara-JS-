		$(document).ready(function(){
			async function resolve(a,b,c){
				let delta = (Math.pow(b,2)) - (4 * a * c);
				let x1 = (-b + Math.sqrt(delta)) / (2 * a);
				let x2 = (-b - Math.sqrt(delta)) / (2 * a);
				if(delta < 0){
					return {x1: "Não possui raiz real", x2: "Não possui raiz real"};
				}
				return {x1: x1, x2: x2};
			}
			$("#button").click(function(){
				var textA = $("#a").val();
				var textB = $("#b").val();
				var textC = $("#c").val();
					$("#results #value").remove();
				resolve(parseFloat(textA),parseFloat(textB),parseFloat(textC)).then(function(res){
					$("#a").val("");
					$("#b").val("");
					$("#c").val("");
					$("#results").append("<div class='value' id='value'><strong class='text'>X1:</strong><i class='text'>"+res.x1 +"</i></div><div class='value' id='value'><strong class='text'>X2:</strong><i class='text'>"+res.x2+"</i></div>");
				}); 
			});
		});