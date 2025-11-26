export async function enviar(){
		async function postData(url = 'http://localhost:3000/solicitudes/solicitud', data = {"numero_telefono": document.getElementById('cajaTel').value, "correo": document.getElementById('cajaCorreo').value, "nombre": document.getElementById('cajaNombre').value, "contenido": document.getElementById('cajaConsulta').value.replaceAll('\n', '<br>')}) {
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