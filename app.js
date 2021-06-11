$(document).ready(function(){
	$(function (){
	$.ajax({
		type: 'GET',
		url: 'https://api.jsonbin.io/v3/b/60c0cfc79fc30168f1cae176',
		headers:{
    			"X-Master-Key":"$2b$10$UQHXlckxYv/6Ox617tJzWeJbIMis2xSjnSIMEaE3hFNPXxkGe538q"
		},
		success: function(data) {
			//console.log(data.faculdades);
			var faculdades = data.record.faculdades;
			// console.log(faculdades);
			var cursos_faculdades = [];
			$.each(faculdades,function(key, faculdade){
				cursos = faculdade.cursos;
				$.each(cursos, function(key, curso){
					cursos_faculdades.push(curso);
				});
			});
			//console.log(cursos_faculdades);
			var curso_data;
			function busca_curso(){
				curso_data = '';
				var user_input = $("#inputlg").val();
				var aux = 0;
				for(let k in cursos_faculdades){
				if(cursos_faculdades[k].nome.toLowerCase().indexOf(user_input, 0) > -1){
					//console.log(cursos_faculdades[k]);
					curso_data += '<tr class="info">';

					curso_data += '<td>'+cursos_faculdades[k].nome + '</td>';
					curso_data += '<td>'+cursos_faculdades[k].grau + '</td>';
					curso_data += '<td>'+cursos_faculdades[k].modalidade + '</td>';
					curso_data += '<td>'+cursos_faculdades[k].duracao + '</td>';
					curso_data += '<td> <a target="_blank" href="' + cursos_faculdades[k].ppc +'"> Clique aqui </a></td>';
					curso_data += '</tr>';
					aux += 1;
				} else if(aux == 0){
					console.log("CURSO NÃO ENCONTRADO");

				}
				//user_input.val("");
			}	
				$('#tabela_curso').append(curso_data);
			}
			

			$("#button").click(function(){
				$('#tabela_curso tr:nth-child(n+2):nth-child(n-1)').html("");
				busca_curso();
				// alert("clicked!");
				
			});
			
			 $('#inputlg').keypress(function(event) {
   				if (event.keyCode == '13') {
       				event.preventDefault();
       				$('#button').trigger("click");
   				}
			});
			
		}
	});
});

});
