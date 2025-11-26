export async function enviar(){
		async function postData(url = 'http://localhost:3000/solicitudes/solicitud', data = {"numero_telefono": $('cajaTel').get('value').toString(), "correo": $('cajaCorreo').get('value').toString(), "nombre": $('cajaNombre').get('value').toString(), "contenido": $('cajaConsulta').get('value').toString().replaceAll('\n', '<br>')}) {
  			const response = await fetch(url, {
   				method: 'POST', 
    			mode: 'cors', 
    			cache: 'no-cache', 
    			credentials: 'same-origin', 
    			headers: {
      			'Content-Type': 'application/json',
    			},
    			redirect: 'follow',
    			referrerPolicy: 'no-referrer', 
    			body: JSON.stringify(data)
  			});
  			return response.json();
			}
			await postData();
			alert("subida");
		}